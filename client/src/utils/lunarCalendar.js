import { TK19, TK20, TK21, TK22 } from './lunarCalendar.data';
import { padZero } from 'helpers';

const INT = d => Math.floor(d); // Discard the fractional part of a number, e.g., INT(3.2) = 3
const PI = Math.PI;

const jdn = (dd, mm, yy) => {
  const a = INT((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;
  return dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
};
export const getJuliusDate = jdn;

class _LunarDate {
  constructor(dd, mm, yy, leap, jd) {
    this.day = dd;
    this.month = mm;
    this.year = yy;
    this.leap = leap;
    this.jd = jd;
    this.fullString = `${dd}-${padZero(mm)}-${yy}`;
  }
}

const decodeLunarYear = (yy, k) => {
  const ly = [];
  const monthLengths = [29, 30];
  const regularMonths = new Array(12);
  const offsetOfTet = k >> 17;
  const leapMonth = k & 0xf;
  const leapMonthLength = monthLengths[(k >> 16) & 0x1];
  const solarNY = jdn(1, 1, yy);
  let currentJD = solarNY + offsetOfTet;
  let mm;
  let j = k >> 4;
  for (let i = 0; i < 12; i++) {
    regularMonths[12 - i - 1] = monthLengths[j & 0x1];
    j >>= 1;
  }
  if (leapMonth === 0) {
    for (mm = 1; mm <= 12; mm++) {
      ly.push(new _LunarDate(1, mm, yy, 0, currentJD));
      currentJD += regularMonths[mm - 1];
    }
  } else {
    for (mm = 1; mm <= leapMonth; mm++) {
      ly.push(new _LunarDate(1, mm, yy, 0, currentJD));
      currentJD += regularMonths[mm - 1];
    }
    ly.push(new _LunarDate(1, leapMonth, yy, 1, currentJD));
    currentJD += leapMonthLength;
    for (mm = leapMonth + 1; mm <= 12; mm++) {
      ly.push(new _LunarDate(1, mm, yy, 0, currentJD));
      currentJD += regularMonths[mm - 1];
    }
  }
  return ly;
};

export const getYearInfo = yyyy => {
  let yearCode;
  if (yyyy < 1900) {
    yearCode = TK19[yyyy - 1800];
  } else if (yyyy < 2000) {
    yearCode = TK20[yyyy - 1900];
  } else if (yyyy < 2100) {
    yearCode = TK21[yyyy - 2000];
  } else {
    yearCode = TK22[yyyy - 2100];
  }
  return decodeLunarYear(yyyy, yearCode);
};

const FIRST_DAY = jdn(25, 1, 1800); // Tet am lich 1800
const LAST_DAY = jdn(31, 12, 2199);

export const findLunarDate = (jd, ly) => {
  if (jd > LAST_DAY || jd < FIRST_DAY || ly[0].jd > jd) {
    return new _LunarDate(0, 0, 0, 0, jd);
  }
  let i = ly.length - 1;
  while (jd < ly[i].jd) {
    i--;
  }
  let off = jd - ly[i].jd;
  const ret = new _LunarDate(ly[i].day + off, ly[i].month, ly[i].year, ly[i].leap, jd);
  return ret;
};

const jdn2date = jd => {
  let A;
  const Z = jd;
  if (Z < 2299161) {
    A = Z;
  } else {
    const alpha = INT((Z - 1867216.25) / 36524.25);
    A = Z + 1 + alpha - INT(alpha / 4);
  }
  const B = A + 1524;
  const C = INT((B - 122.1) / 365.25);
  const D = INT(365.25 * C);
  const E = INT((B - D) / 30.6001);

  const dd = INT(B - D - INT(30.6001 * E));
  let mm;
  let yyyy;
  if (E < 14) {
    mm = E - 1;
  } else {
    mm = E - 13;
  }
  if (mm < 3) {
    yyyy = C - 4715;
  } else {
    yyyy = C - 4716;
  }
  return [dd, mm, yyyy];
};
export const juliusToDate = jd => {
  const d = jdn2date(jd);
  return { day: d[0], month: d[1], year: d[2] };
};

/* Compute the longitude of the sun at any time.
 * Parameter: floating number jdn, the number of days since 1/1/4713 BC noon
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 */
const sunLongitude = jdn => {
  const T = (jdn - 2451545.0) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
  const T2 = T * T;
  const dr = PI / 180; // degree to radian
  const M = 357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
  const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree

  let DL = (1.9146 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
  DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.00029 * Math.sin(dr * 3 * M);

  const theta = L0 + DL; // true longitude, degree
  // obtain apparent longitude by correcting for nutation and aberration
  const omega = 125.04 - 1934.136 * T;

  let lambda = theta - 0.00569 - 0.00478 * Math.sin(omega * dr);
  // Convert to radians
  lambda = lambda * dr;
  lambda = lambda - PI * 2 * INT(lambda / (PI * 2)); // Normalize to (0, 2*PI)
  return lambda;
};

/* Compute the sun segment at start (00:00) of the day with the given integral Julian day number.
 * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00.
 * The function returns a number between 0 and 23.
 * From the day after March equinox and the 1st major term after March equinox, 0 is returned.
 * After that, return 1, 2, 3 ...
 */
const getSunLongitude = (dayNumber, timeZone) => INT((sunLongitude(dayNumber - 0.5 - timeZone / 24.0) / PI) * 12);
const TIETKHI = [
  'Xuân phân',
  'Thanh minh',
  'Cốc vũ',
  'Lập hạ',
  'Tiểu mãn',
  'Mang chủng',
  'Hạ chí',
  'Tiểu thử',
  'Đại thử',
  'Lập thu',
  'Xử thử',
  'Bạch lộ',
  'Thu phân',
  'Hàn lộ',
  'Sương giáng',
  'Lập đông',
  'Tiểu tuyết',
  'Đại tuyết',
  'Đông chí',
  'Tiểu hàn',
  'Đại hàn',
  'Lập xuân',
  'Vũ Thủy',
  'Kinh trập'
];
export const getSolarTerm = jd => TIETKHI[getSunLongitude(jd + 1, 7.0)];

export const getMonth = (mm, yy) => {
  let mm1, yy1;
  if (mm < 12) {
    mm1 = mm + 1;
    yy1 = yy;
  } else {
    mm1 = 1;
    yy1 = yy + 1;
  }

  const jd1 = jdn(1, mm, yy);
  const jd2 = jdn(1, mm1, yy1);

  let ly1 = getYearInfo(yy);
  let ly2;
  const tet1 = ly1[0].jd;
  const result = [];

  if (tet1 <= jd1) {
    for (let i = jd1; i < jd2; i++) {
      result.push(findLunarDate(i, ly1));
    }
  } else if (jd1 < tet1 && jd2 < tet1) {
    ly1 = getYearInfo(yy - 1);
    for (let i = jd1; i < jd2; i++) {
      result.push(findLunarDate(i, ly1));
    }
  } else if (jd1 < tet1 && tet1 <= jd2) {
    ly2 = getYearInfo(yy - 1);
    for (let i = jd1; i < tet1; i++) {
      result.push(findLunarDate(i, ly2));
    }
    for (let i = tet1; i < jd2; i++) {
      result.push(findLunarDate(i, ly1));
    }
  }
  return result;
};

const CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

const getYearCanChi = year => CAN[(year + 6) % 10] + ' ' + CHI[(year + 8) % 12];

const getCanChi = lunarDate => {
  const dayName = CAN[(lunarDate.jd + 9) % 10] + ' ' + CHI[(lunarDate.jd + 1) % 12];
  let monthName = CAN[(lunarDate.year * 12 + lunarDate.month + 3) % 10] + ' ' + CHI[(lunarDate.month + 1) % 12];
  if (lunarDate.leap === 1) {
    monthName += ' (nhuận)';
  }
  const yearName = getYearCanChi(lunarDate.year);
  return [dayName, monthName, yearName];
};

export const getDayName = lunarDate => {
  if (lunarDate.day === 0) {
    return '';
  }
  const cc = getCanChi(lunarDate);
  return {
    name: 'Ngày ' + cc[0] + ', tháng ' + cc[1] + ', năm ' + cc[2],
    day: cc[0],
    month: cc[1],
    year: cc[2]
  };
};

export const getCanHour0 = jdn => CAN[((jdn - 1) * 2) % 10];

const GIO_HD = ['110100101100', '001101001011', '110011010010', '101100110100', '001011001101', '010010110011'];
export const getGioHoangDao = jd => {
  const chiOfDay = (jd + 1) % 12;
  const gioHD = GIO_HD[chiOfDay % 6];
  const result = [];

  for (let i = 0; i < 12; i++) {
    if (gioHD.charAt(i) === '1') {
      result.push({
        CHI: CHI[i],
        start: (i * 2 + 23) % 24,
        end: (i * 2 + 1) % 24
      });
    }
  }
  return result;
};

import moment from 'moment';
import {
  getJuliusDate,
  getYearInfo,
  findLunarDate,
  getSolarTerm,
  getDayName,
  getCanHour0,
  getGioHoangDao
} from './lunarCalendar';

const daysLocale = {
  Mon: 'Thứ Hai',
  Tue: 'Thứ Ba',
  Wed: 'Thứ Tư',
  Thu: 'Thứ Năm',
  Fri: 'Thứ Sáu',
  Sat: 'Thứ Bảy',
  Sun: 'Chủ Nhật'
};

const monthsLocale = ['Giêng', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Một', 'Chạp'];

export default class LunarDate {
  constructor(dateObj) {
    this.initialDate = moment(dateObj);
    this.year = this.initialDate.get('year');
    this.day = this.initialDate.get('date');
    this.month = this.initialDate.get('month') + 1;
  }

  get juliusDate() {
    return getJuliusDate(this.day, this.month, this.year);
  }

  get yearInfo() {
    let yearInfo = getYearInfo(this.year);
    if (this.juliusDate < yearInfo[0].jd) {
      yearInfo = getYearInfo(this.year - 1);
    }
    return yearInfo;
  }

  get weekDay() {
    return daysLocale[this.initialDate.format('ddd')];
  }

  get monthName() {
    return monthsLocale[this.initialDate.get('month')];
  }

  get date() {
    if (this.year < 1800 || 2199 < this.year) {
      throw new Error('Not supported yet');
    }
    return findLunarDate(this.juliusDate, this.yearInfo);
  }

  get solarTerm() {
    return getSolarTerm(this.juliusDate);
  }

  get dayName() {
    return getDayName(this.date);
  }

  get canHour() {
    return getCanHour0(this.juliusDate);
  }

  get zodiacHour() {
    return getGioHoangDao(this.juliusDate);
  }
}

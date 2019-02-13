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

export default class LunarDate {
  constructor(dateObj) {
    const date = moment(dateObj);
    this.year = date.get('year');
    this.day = date.get('date');
    this.month = date.get('month') + 1;
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

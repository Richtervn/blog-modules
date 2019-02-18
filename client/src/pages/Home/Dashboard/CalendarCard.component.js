import './CalendarCard.css';
import React from 'react';
import moment from 'moment';

import { LunarDate } from 'utils';

export default () => {
  const today = moment();
  const lunarDate = new LunarDate(today);

  return (
    <div className="dashboard-calendar-card">
      <div className="header">
        Tháng {today.get('month') + 1} năm {today.get('year')}
      </div>
      <div className="center-date">
        <div className="big-date-wrapper">
          <div className="big-date">{today.get('date')}</div>
          <div className="week-day-name">{lunarDate.weekDay}</div>
        </div>
      </div>
      <div className="footer">
        <div className="local-text">
          Tiết {lunarDate.solarTerm}
          <br />
          Giờ {lunarDate.canHour}
        </div>
        <div className="lunar-date-row">
          <div className="lunar-date">
            <div className="header-sm">Âm lịch</div>
            <div className="big-lunar-wrapper">
              <div className="big-lunar">{lunarDate.date.day}</div>
              <div className="lunar-month">
                Tháng {lunarDate.date.month} năm {lunarDate.date.year}
              </div>
              <div className="day-name">{lunarDate.dayName.name}</div>
            </div>
          </div>
          <div className="zodiac-hours">
            <div className="header-sm">Giờ hoàng đạo</div>
            <ul className="zodiac-list">
              {lunarDate.zodiacHour.map((h, i) => (
                <li key={i} className="zodiac-item">
                  <div className="zodiac-name">Giờ {h.CHI}:</div>
                  <div className="zodiac-solar">
                    &nbsp;từ {h.start} đến {h.end} giờ
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

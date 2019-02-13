import './MonthBigCalendar.css';

import React, { useEffect } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import { LunarDate } from 'utils';
import { padZero } from 'helpers';

const localizer = BigCalendar.momentLocalizer(moment);

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const getDaysInView = (month, year) => {
  const prevMonthDays = [];
  const nextMonthDays = [];
  const currentMonthDays = [];

  const ts = moment(`${month}-${year}`, 'MM-YYYY');
  const firstDay = ts.startOf('month').format('ddd');
  const lastDay = ts.endOf('month').format('ddd');
  const currentDaysInMonth = ts.daysInMonth();
  for (let i = 1; i <= currentDaysInMonth; i++) {
    currentMonthDays.push(`${padZero(i)}-${padZero(month)}-${year}`);
  }

  const prevTs = moment(`${month}-${year}`, 'MM-YYYY').subtract(1, 'months');
  const prevDaysInMonth = prevTs.daysInMonth();
  const prevMonth = prevTs.get('month') + 1;
  const prevMonthYear = prevTs.get('year');
  const prevMonthEnd = weekDays.indexOf(firstDay);
  for (let i = prevMonthEnd - 1; i >= 0; i--) {
    prevMonthDays.push(`${padZero(prevDaysInMonth - i)}-${padZero(prevMonth)}-${prevMonthYear}`);
  }

  const nextTs = moment(`${month}-${year}`, 'MM-YYYY').add(1, 'months');
  const nextMonth = nextTs.get('month') + 1;
  const nextMonthYear = nextTs.get('year');
  const nextMonthStart = weekDays.indexOf(lastDay);
  for (let i = 1; i <= weekDays.length - nextMonthStart - 1; i++) {
    nextMonthDays.push(`${padZero(i)}-${padZero(nextMonth)}-${nextMonthYear}`);
  }
  return prevMonthDays.concat(currentMonthDays).concat(nextMonthDays);
};

const _renderLunarDate = (month, year) => {
  const daysInView = getDaysInView(month, year);
  daysInView.forEach(day => {
    const elems = document.getElementsByClassName(`smbc-${day}`);
    if (!elems) {
      return;
    }

    const slot = elems[0];
    if (!slot) {
      return;
    }

    const lunarDate = new LunarDate(moment(day, 'DD-MM-YYYY'));
    const container = document.createElement('DIV');
    container.className = 'lunar-date';
    container.innerHTML = lunarDate.date.day;

    slot.appendChild(container);
  });
};

const ToolBar = ({ label, onNavigate, date }) => {
  useEffect(() => {
    const viewDate = moment(date);
    setTimeout(() => _renderLunarDate(viewDate.get('month') + 1, viewDate.get('year')), 0);
  }, [date]);

  return (
    <div className="big-calendar-toolbar">
      <button className="nav-btn" onClick={() => onNavigate('PREV')} style={{ textAlign: 'left' }}>
        <i className="fa fa-2x fa-angle-left" />
      </button>
      <div className="label">{label}</div>
      <button className="nav-btn" onClick={() => onNavigate('NEXT')} style={{ textAlign: 'right' }}>
        <i className="fa fa-2x fa-angle-right" />
      </button>
    </div>
  );
};

export default ({ events = [], onSelectSlot, onSelectEvent }) => {
  return (
    <div className="month-big-calendar">
      <BigCalendar
        onSelectSlot={slot => {
          onSelectSlot(slot);
        }}
        dayPropGetter={day => {
          const additionClass = `smbc-${moment(day).format('DD-MM-YYYY')}`;
          return { className: additionClass };
        }}
        events={events}
        views={['month']}
        selectable={true}
        localizer={localizer}
        onSelectEvent={onSelectEvent}
        components={{ toolbar: ToolBar }}
      />
    </div>
  );
};

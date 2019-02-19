import './MonthBigCalendar.css';

import _ from 'underscore';
import React, { useMemo } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

import { LunarDate } from 'utils';
import { padZero, colorConverter } from 'helpers';

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

const _renderLunarDate = (slot, day) => {
  if (slot.children.length > 0) {
    let hasLunarDate = false;
    for (let i = 0; i < slot.children.length; i++) {
      if (slot.children[i].classList[0] === 'lunar-date') {
        hasLunarDate = true;
        break;
      }
    }
    if (hasLunarDate) {
      return;
    }
  }

  const lunarDate = new LunarDate(moment(day, 'DD-MM-YYYY')).date;
  const container = document.createElement('DIV');
  container.className = 'lunar-date';
  container.innerHTML = `${lunarDate.day}/${lunarDate.month}`;
  slot.appendChild(container);
};

const _renderDayEventBg = (slot, day, involvedEvents) => {
  const dayTs = moment(day, 'DD-MM-YYYY');
  const dayLunarTs = new LunarDate(dayTs).date;

  const occurredEvents = involvedEvents.filter(event => {
    const startTs = moment(event.start);
    const endTs = moment(event.end);

    if (event.type === 'ONE_TIME') {
      return dayTs.diff(startTs) >= 0 && dayTs.diff(endTs) < 0;
    }
    console.log(slot);
    if (event.type === 'REPEATABLE_SOLAR') {
      const currentYear = dayTs.get('year');
      const eventYearDiff = endTs.get('year') - startTs.get('year');

      return (
        (startTs
          .clone()
          .set('year', currentYear)
          .diff(dayTs) >= 0 &&
          endTs
            .clone()
            .set('year', currentYear + eventYearDiff)
            .diff(dayTs) <= 0) ||
        (startTs
          .clone()
          .set('year', currentYear - 1)
          .diff(dayTs) >= 0 &&
          endTs
            .clone()
            .set('year', currentYear + eventYearDiff - 1)
            .diff(dayTs) <= 0) ||
        (startTs
          .clone()
          .set('year', currentYear + 1)
          .diff(dayTs) >= 0 &&
          endTs
            .clone()
            .set('year', currentYear + eventYearDiff + 1)
            .diff(dayTs) <= 0)
      );
    }

    if (event.type === 'REPEATABLE_LUNAR') {
      //One day only
      const currentLunarDay = new LunarDate(dayTs).date;
      if (currentLunarDay.day === dayLunarTs.day && currentLunarDay.month === dayLunarTs.month) {
        return true;
      }
    }

    return false;
  });
  if (occurredEvents.length > 0) {
    const highestPriorityEvent = _.max(occurredEvents, event => event.priority);
    slot.style.backgroundColor = colorConverter.hexToRgba(highestPriorityEvent.color, 0.2);
  }
};

const _renderDecorations = (daysInView, involvedEvents) =>
  daysInView.forEach(day => {
    const elems = document.getElementsByClassName(`smbc-${day}`);
    if (!elems) {
      return;
    }

    const slot = elems[0];
    if (!slot) {
      return;
    }
    _renderLunarDate(slot, day);
    if (involvedEvents.length > 0) {
      _renderDayEventBg(slot, day, involvedEvents);
    }
  });

const _renderEffects = (date, dayEvents) => {
  const viewDate = moment(date);
  const daysInView = getDaysInView(viewDate.get('month') + 1, viewDate.get('year'));
  const daysInViewLunar = daysInView.map(day => new LunarDate(moment(day, 'DD-MM-YYYY')).date.fullString);

  const firstDayInView = daysInView[0];
  const lastDayInView = daysInView[daysInView.length - 1];

  const firstDay = moment(firstDayInView, 'DD-MM-YYYY');
  const lastDay = moment(lastDayInView, 'DD-MM-YYYY');

  const involvedEvents = dayEvents.slice(0).filter(event => {
    if (event.type === 'ONE_TIME') {
      const startTs = moment(event.start);
      return firstDay.diff(startTs) <= 0 && lastDay.diff(startTs) >= 0;
    }

    if (event.type === 'REPEATABLE_LUNAR') {
      const eventStartLunar = new LunarDate(event.start).date;
      const eventEndLunar = new LunarDate(event.end).date;
      const eventStartDate = eventStartLunar.fullString.slice(0, 5);
      const eventEndDate = eventEndLunar.fullString.slice(0, 5);
      const eventStartDay = daysInViewLunar.find(day => day.slice(0, 5) === eventStartDate);
      const eventEndDay = daysInViewLunar.find(day => day.slice(0, 5) === eventEndDate);
      if (eventStartDay || eventEndDay) {
        return true;
      }
      //CASE: Event from month to month
    }

    if (event.type === 'REPEATABLE_SOLAR') {
      const startTs = moment(event.start);
      const endTs = moment(event.end);

      const eventStartDate = `${padZero(startTs.get('date'))}-${padZero(startTs.get('month') + 1)}`;
      const eventStartDay = daysInView.find(day => day.slice(0, 5) === eventStartDate);
      const eventEndDate = `${padZero(endTs.get('date'))}-${padZero(endTs.get('month') + 1)}`;
      const eventEndDay = daysInView.find(day => day.slice(0, 5) === eventEndDate);

      if (eventStartDay || eventEndDay) {
        return true;
      }
      //CASE: Event from month to month
      const currentYear = viewDate.get('year');
      const eventYearDiff = endTs.get('year') - startTs.get('year');
      return (
        (startTs
          .clone()
          .set('year', currentYear)
          .diff(firstDay) <= 0 &&
          endTs
            .clone()
            .set('year', currentYear + eventYearDiff)
            .diff(firstDay) >= 0) ||
        (startTs
          .clone()
          .set('year', currentYear + 1)
          .diff(firstDay) <= 0 &&
          endTs
            .clone()
            .set('year', currentYear + eventYearDiff + 1)
            .diff(firstDay) >= 0) ||
        (startTs
          .clone()
          .set('year', currentYear - 1)
          .diff(firstDay) <= 0 &&
          endTs
            .clone()
            .set('year', currentYear + eventYearDiff - 1)
            .diff(firstDay) >= 0)
      );
    }
    return false;
  });

  setTimeout(() => {
    _renderDecorations(daysInView, involvedEvents);
  }, 0);
};

const ToolBar = ({ label, onNavigate, date, dayEvents }) => {
  useMemo(() => {
    _renderEffects(date, dayEvents);
  }, [label]);

  return (
    <div className="big-calendar-toolbar">
      <button
        className="nav-btn"
        onClick={() => {
          onNavigate('PREV');
        }}
        style={{ textAlign: 'left' }}>
        <i className="fa fa-2x fa-angle-left" />
      </button>
      <div className="label">{label}</div>
      <button
        className="nav-btn"
        onClick={() => {
          onNavigate('NEXT');
        }}
        style={{ textAlign: 'right' }}>
        <i className="fa fa-2x fa-angle-right" />
      </button>
    </div>
  );
};

export default ({ events = [], onSelectSlot, onSelectEvent, dayEvents }) => {
  // Set current year for reatable day_events
  const currentYearDayEvents = dayEvents.map(event => {
    const starTs = moment(event.start);
    const endTs = moment(event.end);
    if (['REPEATABLE_SOLAR', 'REPEATABLE_LUNAR'].includes(event.type)) {
      const eventYearDiff = endTs.get('year') - starTs.get('year');
      const currentYear = moment().get('year');
      return { ...event, start: starTs.set('year', currentYear), end: endTs.set('year', currentYear + eventYearDiff) };
    }
    return event;
  });

  const displayEvents = events
    .map(event => ({ ...event, eventType: 'schelude' }))
    .concat(currentYearDayEvents.map(event => ({ ...event, eventType: 'day' })));

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
        events={displayEvents}
        eventPropGetter={event => {
          if (event.color) {
            return { style: { backgroundColor: event.color } };
          }
        }}
        views={['month']}
        selectable={true}
        localizer={localizer}
        onSelectEvent={event => {
          onSelectEvent(event);
        }}
        components={{
          toolbar: props => <ToolBar {...props} dayEvents={dayEvents} />
        }}
      />
    </div>
  );
};

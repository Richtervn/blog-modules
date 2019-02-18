/* eslint-disable */
import moment from 'moment';
import React, { Component } from 'react';
// import { LunarDate } from 'utils';

class CodePlayground extends Component {
  componentDidMount() {
    const d1 = moment('01-12-2018', 'DD-MM-YYYY');
    const d2 = moment('01-01-2019', 'DD-MM-YYYY');
    console.log(d2.diff(d1));
    console.log(d1.diff(d2));
    // const d2 = moment()
    // const day = new LunarDate(Date.now());
    // console.log(day);
    // console.log(day.zodiacHour);
  }

  render() {
    return (
      <div>
        <div />
      </div>
    );
  }
}

export default CodePlayground;
// href="OPES_APP://opes.com/dcm"
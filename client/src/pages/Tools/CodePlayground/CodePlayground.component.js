import React, { Component } from 'react';
import { LunarDate } from 'utils';

class CodePlayground extends Component {
  componentDidMount() {
    const day = new LunarDate(Date.now());
    console.log(day);
    console.log(day.zodiacHour);
  }

  render() {
    return <div />;
  }
}

export default CodePlayground;

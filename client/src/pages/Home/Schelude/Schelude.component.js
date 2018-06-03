import './Schelude.css';
import React, { Component } from 'react';
import moment from 'moment';

class Schelude extends Component {
  constructor(props) {
    super(props);

    console.log(moment().daysInMonth())
    console.log(moment().month())
    console.log(moment().day())
    // startOf('month')
  }

  render() {
    return <div id="schelude-page"></div>;
  }
}

export default Schelude;

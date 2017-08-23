import React from 'react';
import Test from 'components/Test';

// let yeomanImage = require('../images/yeoman.png');
// {<img src={yeomanImage} alt="Yeoman Generator" />}

class AppComponent extends React.Component {
  render() {
    return (
      <Test/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

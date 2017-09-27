import React from 'react';

const channels = ['User', 'Server', 'Admin'];

export default ({ activeChannel, onChangeActiveChannel }) => (
  <div className="row no-row-margin ds9799-top-nav">
    <div className="col-5 no-col-margin">
      <div className="ds9799-logo-container">
        <img src="/app_modules/images/icons/mulogo.png" className="ds9799-logo" />
        <span>
          <h4 style={{ display: 'inline-block' }}>DarkSteam 0.97d + 99i</h4>
        </span>
      </div>
    </div>
    <div className="col-7 no-col-margin">
      <div className="row no-row-margin">
        {channels.map((channel, i) => (
          <div className="col no-col-margin" key={i}>
            <div
              className={
                activeChannel == channel ? (
                  'ds9799-top-nav-pannel text-center ds9799-top-nav-pannel-active'
                ) : (
                  'ds9799-top-nav-pannel text-center'
                )
              }
              onClick={() => onChangeActiveChannel(channel)}>
              <h4>{channel}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

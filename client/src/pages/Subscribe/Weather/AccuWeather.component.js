import './AccuWeather.css';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import classnames from 'classnames';

import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { CircleProgress } from 'components/Other';
import { ContainerLoader } from 'common/Loaders';

const getThermometerProps = uvIndex => {
  if (uvIndex <= 4) {
    return { className: `fa fa-2x fa-thermometer-${uvIndex}` };
  } else {
    return { className: 'fa fa-2x fa-thermometer-4', style: { color: `rgba(200, 0, 0, 0.${uvIndex})` } };
  }
};

const getPrecipitationData = current => {
  const data = [];
  const aliasData = [
    { key: 'Past24Hours', alias: 24 },
    { key: 'Past18Hours', alias: 18 },
    { key: 'Past12Hours', alias: 12 },
    { key: 'Past9Hours', alias: 9 },
    { key: 'Past6Hours', alias: 6 },
    { key: 'Past3Hours', alias: 3 },
    { key: 'PastHour', alias: 1 }
  ];
  const extractData = (key, alias) => {
    if (current.PrecipitationSummary[key]) {
      data.push({ name: alias, value: current.PrecipitationSummary[key].Metric.Value });
    }
  };
  aliasData.forEach(obj => extractData(obj.key, obj.alias));
  return data;
};

const getTemperatureData = current => {
  const data = [];
  const aliasData = [
    { key: 'Past6HourRange', alias: 6 },
    { key: 'Past12HourRange', alias: 12 },
    { key: 'Past24HourRange', alias: 24 }
  ];
  const extractData = (key, alias) => {
    if (current.TemperatureSummary[key]) {
      data.push({
        name: alias,
        temperature: [
          current.TemperatureSummary[key].Minimum.Metric.Value,
          current.TemperatureSummary[key].Maximum.Metric.Value
        ]
      });
    }
  };
  aliasData.forEach(obj => extractData(obj.key, obj.alias));
  return data;
};

export default ({ current, forecast, onGetCurrent, onGetForecast }) => {
  const [isRefreshing, setRefreshing] = useState(false);

  useEffect(() => {
    onGetForecast();
    onGetCurrent();
  }, []);
  useEffect(() => {
    setRefreshing(false);
  }, [forecast]);

  if (!current || !forecast) {
    return (
      <div id="accu-loader-container">
        <ContainerLoader />
      </div>
    );
  }

  return (
    <div id="accu-weather">
      <div className="header">
        <div className="city">
          <div className="name">Ha Noi - VN</div>
          <div className="date">{moment(current.EpochTime * 1000).format('DD/MM/YYYY')}</div>
        </div>
        <a
          className="site"
          href="https://https://www.accuweather.com/en/vn/vietnam-weather"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/images/icons/accu-weather/site-logo.png" alt="OpenWeatherMap" />
          <div className="name">Accu Weather</div>
        </a>
        <button
          onClick={() => {
            setRefreshing(true);
            onGetForecast();
            onGetCurrent();
          }}>
          {moment(current.EpochTime * 1000).format('HH:mm')}&nbsp;&nbsp;
          <i className={classnames('fa fa-refresh', { 'fa-spin': isRefreshing })} />
        </button>
      </div>
      <div className="content">
        <div className="main-card">
          <div className="weather-wrapper">
            <div className="weather-icon">
              <div className="icon">
                <img src={`/images/icons/accu-weather/${current.WeatherIcon}.png`} alt={current.WeatherText} />
              </div>
              <div className="weather-text">{current.WeatherText}</div>
            </div>
            <div className="current-temperature">
              {current.Temperature.Metric.Value}°C
              {current.Past24HourTemperatureDeparture.Metric.Value > 0 && (
                <div className="increase">
                  <i className="fa fa-sort-up" />
                  <div className="value">&nbsp;{current.Past24HourTemperatureDeparture.Metric.Value}°C</div>
                </div>
              )}
              {current.Past24HourTemperatureDeparture.Metric.Value < 0 && (
                <div className="decrease">
                  <i className="fa fa-sort-down" />
                  <div className="value">&nbsp;{current.Past24HourTemperatureDeparture.Metric.Value}°C</div>
                </div>
              )}
            </div>
          </div>
          <div className="weather-info">
            <div>{`Outdoor: ${current.ApparentTemperature.Metric.Value}°C`}</div>
            <div>{`Wet-bulb: ${current.WetBulbTemperature.Metric.Value}°C`}</div>
            <div>{`RealFeel® direct: ${current.RealFeelTemperature.Metric.Value} °C`}</div>
            <div>{`RealFeel® shade: ${current.RealFeelTemperatureShade.Metric.Value} °C`}</div>
            <div className="uv">
              <i {...getThermometerProps(current.UVIndex)} />
              UV {current.UVIndexText}: {current.UVIndex}
            </div>
          </div>
        </div>
        <div className="info-card">
          <div className="info-row">
            <div className="item">
              <div style={{ width: '120px' }}>
                <CircleProgress percentage={current.RelativeHumidity} text={`${current.RelativeHumidity}%`} />
              </div>
              <div className="label">Humidity</div>
            </div>
            <div className="item">
              <div style={{ width: '120px' }}>
                <CircleProgress percentage={current.CloudCover} text={`${current.CloudCover}%`} />
              </div>
              <div className="label">Cloud</div>
              <div className="sub">
                Ceiling: {current.Ceiling.Metric.Value} {current.Ceiling.Metric.Unit}
              </div>
            </div>
            <div className="item">
              <div className="pressure">
                <div className="label">
                  {current.Pressure.Metric.Value} {current.Pressure.Metric.Unit}
                  {current.PressureTendency.Code === 'F' && <i className="fa fa-angle-double-down" />}
                  {current.PressureTendency.Code === 'R' && <i className="fa fa-angle-double-up" />}
                </div>
              </div>
              <div className="label">Atmospheric pressure</div>
            </div>
          </div>
          <div className="info-row">
            <div className="item">
              <div className="visibility">
                <div className="label">
                  {current.Visibility.Metric.Value} {current.Visibility.Metric.Unit}
                </div>
              </div>
              <div className="label">Visibility</div>
              {current.ObstructionsToVisibility && <div className="sub">({current.ObstructionsToVisibility})</div>}
            </div>
            <div className="item">
              <div className="wind">
                <div className="label">
                  {current.Wind.Speed.Metric.Value} {current.Wind.Speed.Metric.Unit}
                </div>
                <div className="label">{current.Wind.Direction.Degrees}°</div>
              </div>
              <div className="label">Wind</div>
              <div className="sub">
                Chill: {current.WindChillTemperature.Metric.Value}°C | Gust: {current.WindGust.Speed.Metric.Value}{' '}
                {current.WindGust.Speed.Metric.Unit}
              </div>
            </div>
            <div className="item">
              <div className="rain">
                <div className="label">
                  {current.HasPrecipitation ? current.Precip1hr.Metric.Value : 0}{' '}
                  {current.HasPrecipitation ? current.Precip1hr.Metric.Unit : 'mm'}
                </div>
              </div>
              <div className="label">{current.HasPrecipitation ? current.PrecipitationType : 'Rain'}</div>
            </div>
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-label">Temperature</div>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={getTemperatureData(current)} margin={{ top: 10, right: 0, bottom: 20 }}>
              <XAxis dataKey="name" unit="h" stroke="#fff" />
              <YAxis stroke="#fff" unit="°C" />
              <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff1f" />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active) {
                    return null;
                  }
                  return (
                    <div className="precipitation-char-tool-tip">
                      <b>{payload[0].payload.name} hours ago:</b> {payload[0].payload.temperature[0]}°C ~{' '}
                      {payload[0].payload.temperature[1]}°C
                    </div>
                  );
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
          {current.HasPrecipitation && <div className="chart-label">{current.PrecipitationType} precipitation</div>}
          {current.HasPrecipitation && (
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart data={getPrecipitationData(current)} margin={{ top: 10, right: 0, bottom: 20 }}>
                <XAxis dataKey="name" unit="h" stroke="#fff" />
                <YAxis stroke="#fff" unit={current.Precip1hr.Metric.Unit} />
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff1f" />
                <Tooltip
                  content={({ active, payload }) => {
                    if (!active) {
                      return null;
                    }
                    return (
                      <div className="precipitation-char-tool-tip">
                        <b>{current.PrecipitationType}:</b> {payload[0].value} {current.Precip1hr.Metric.Unit}{' '}
                        {payload[0].payload.name} hours ago
                      </div>
                    );
                  }}
                />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      <div className="footer">
        {forecast.DailyForecasts.map((data, i) => (
          <div className="forecast-item" key={i}>
            <div className="header">
              <div className="date">{moment(data.Date).format('DD/MM')}</div>
              <div className="time">
                <div className="day">Day</div>
                <div className="night">Night</div>
              </div>
            </div>
            <div className="content">
              <div className="weather day">
                <div className="icon-wrapper">
                  <img src={`/images/icons/accu-weather/${data.Day.Icon}.png`} alt={data.Day.LongPhrase} />
                  <div className="weather-text">{data.Day.IconPhrase}</div>
                </div>
                <div className="weather-long-text">{data.Day.LongPhrase}</div>
                <div className="rain-prob">Rain: {data.Day.RainProbability}%</div>
              </div>
              <div className="weather night">
                <div className="icon-wrapper">
                  <img src={`/images/icons/accu-weather/${data.Night.Icon}.png`} alt={data.Night.LongPhrase} />
                  <div className="weather-text">{data.Night.IconPhrase}</div>
                </div>
                <div className="weather-long-text">{data.Night.LongPhrase}</div>
                <div className="rain-prob">Rain: {data.Night.RainProbability}%</div>
              </div>
            </div>
            <div className="info-lines">
              <div className="temperature">
                {data.Temperature.Minimum.Value}°C~{data.Temperature.Maximum.Value}°C
              </div>
              <div className="realfeel">
                <div className="label">RealFeel®:</div>
                <div className="temperature-info">
                  {data.RealFeelTemperature.Minimum.Value}°C | {data.RealFeelTemperature.Maximum.Value}°C
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

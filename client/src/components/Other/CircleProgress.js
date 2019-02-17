import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

export default ({
  percentage,
  text,
  strokeWidth = 3,
  counterClockwise = true,
  color = '#fff',
  trailColor = '#222',
  textColor = '#fff',
  fontSize = '20px'
}) => (
  <CircularProgressbar
    percentage={percentage}
    text={text}
    strokeWidth={strokeWidth}
    counterClockwise={counterClockwise}
    styles={{
      root: {},
      path: {
        stroke: color,
        strokeLinecap: 'butt',
        transition: 'stroke-dashoffset 0.5s ease 0s'
      },
      trail: {
        stroke: trailColor
      },
      text: {
        fill: textColor,
        fontSize: fontSize
      }
    }}
  />
);

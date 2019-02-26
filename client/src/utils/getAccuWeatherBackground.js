const backgrounds = [
  { codes: [1, 2, 3, 4, 5], url: '/images/backgrounds/sunny.jpg' },
  { codes: [6, 7, 8, 11], url: '/images/backgrounds/cloudy-day.jpg' },
  { codes: [12, 13, 14, 16, 17], url: '/images/backgrounds/light-rain.jpg' },
  { codes: [33, 34, 35, 36], url: '/images/backgrounds/clear-night.jpg' }
];

export default weatherCode => {
  let bgUrl = '/images/backgrounds/sunny.jpg';
  if (weatherCode === null) {
    return bgUrl;
  }

  for (let i = 0; i < backgrounds.length; i++) {
    if (backgrounds[i].codes.includes(weatherCode)) {
      bgUrl = backgrounds[i].url;
      break;
    }
  }

  return bgUrl;
};

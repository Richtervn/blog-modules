export default (active, name, type) => {
  switch (type) {
    case 'MangasReadingChannel':
      if (active == name) {
        return 'btn btn-secondary channel-button channel-button-active';
      } else {
        return 'btn btn-secondary channel-button';
      }
    case 'GamingHistoryChannel':
      if (active == name) {
        return 'btn btn-secondary channel-button channel-button-active';
      } else {
        return 'btn btn-secondary channel-button';
      }
    default:
      return;
  }
};

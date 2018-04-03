export default {
  suitedTheme: 'light',
  defaultProps: {
    label: 'Example',
    icon: '/images/icons/sc_launcher.ico',
    rating: 4
  },
  documentation: {
    props: {
      label: 'label',
      icon: 'link',
      rating: 'rating',
      isActive: 'Active to change color',
      customClass: 'customClass',
      onClick: 'func',
      downloadUrl: 'link',
      onRating: 'func'
    },
    innerClass: {
      'root > .icon-wrapper': 'Wrapper for icon',
      'root > .content': 'Wrapper for content ( content > .label; content > .rating; content > .dl-btn)'
    }
  }
};

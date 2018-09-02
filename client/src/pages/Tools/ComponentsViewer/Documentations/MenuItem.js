export default {
  suitedTheme: 'dark',
  defaultProps: {
    name: 'Example',
    isActive: false
  },
  documentation: {
    props: {
      name: 'Name of the item',
      isActive: 'Is group activated or not',
      onClick: 'func',
      route: 'route'
    },
    innerClass: {
      '.menu-group-item': 'Wrap class'
    }
  }
};

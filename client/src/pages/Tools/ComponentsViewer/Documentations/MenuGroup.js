export default {
  suitedTheme: 'light',
  defaultProps: {
    name: 'Example',
    isOpen: false,
    isActive: false,
    isShow: false,
    icon: ''
  },
  documentation: {
    props: {
      name: 'Name of the group',
      isOpen: 'Is group openned or not',
      isActive: 'Is group activated or not',
      onClick: 'func',
      isShow: 'Is group show by default or not',
      children: 'children'
    },
    innerClass: {
      '.menu-group' : 'Menu group wrap class',
      '.menu-group > .menu-group-name': 'Name of group',
      '.menu-group > .menu-group-icon': 'Icon of group'
    }
  }
};





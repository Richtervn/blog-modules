export default {
  suitedTheme: 'light',
  defaultProps: {
    features: [
      { name: 'Example', icon: 'fa-user', tooltip: 'example tooltip' },
      { name: 'Another', icon: 'fa-envelope', tooltip: 'another tooltip' }
    ]
  },
  documentation: {
    props: {
      features: 'Array of shape with name, icon: font-awesome-icon, tooltip',
      customClass: 'customClass',
      onChangeFeature: 'func',
      activeFeature: 'Current active feature name to change color'
    },
    innerClass: {
      'root > .btn': 'Access class of buttons'
    }
  }
};

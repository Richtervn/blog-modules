export default {
  suitedTheme: 'light',
  defaultProps: {
    col: 8,
    priority: 'Highly Recommended'
  },
  documentation: {
    props: {
      col: 'col',
      children: 'children',
      route: 'route',
      priority: 'One of Must Read, Highly Recommended, Recommended, Interest',
      onClick: 'func',
      onClickEdit: 'func',
      onClickDelete: 'func',
      customClass: 'customClass'
    },
    innerClass: {
      'root > .header': 'Header class',
      'root > .content': 'Wrapper for content',
      'root > .priority': 'Priority class'
    }
  }
};

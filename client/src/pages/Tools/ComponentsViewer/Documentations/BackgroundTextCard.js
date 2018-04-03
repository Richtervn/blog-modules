export default {
  suitedTheme: 'dark',
  defaultProps: {
    col: 8,
    opacity: 5,
    admin: true,
    imgUrl: '/images/backgrounds/mu-characters.jpg'
  },
  documentation: {
    props: {
      col: 'col',
      children: 'children',
      imgUrl: 'link',
      opacity: 'Overlay opacity',
      admin: 'Show admin feature buttons',
      downloadUrl: 'link',
      route: 'route',
      customClass: 'customClass',
      onClickEdit: 'func',
      onClickDelete: 'func'
    },
    innerClass: {
      'root > .feature': 'Feature buttons wrapper ( feature > .btn )'
    }
  }
};

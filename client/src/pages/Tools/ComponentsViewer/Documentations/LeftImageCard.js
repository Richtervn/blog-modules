export default {
  suitedTheme: 'light',
  defaultProps: {
    col: 8,
    imgUrl: '/images/example/cover.jpg',
    imgWidth: 120,
    imgHeight: 180,
    admin: true
  },
  documentation: {
    props: {
      col: 'col',
      imgUrl: 'link',
      imgWidth: 'Width of image',
      imgHeight: 'Height of image',
      isActive: 'Active to change color',
      admin: 'Show admin feature buttons',
      onClick: 'func',
      onClickEdit: 'func',
      onClickDelete: 'func',
      route: 'route',
      children: 'children',
      nohover: 'Disable hover',
      customClass: 'customClass'
    },
    innerClass: {
      'root > .image-wrapper': 'Wrapper for image ( image-wrapper > .image )',
      'root > .content': 'Wrapper for children'
    }
  }
};

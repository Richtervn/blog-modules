export default {
  suitedTheme: 'dark',
  defaultProps: {
    col: 8,
    imgUrl: '/images/example/cover.jpg'
  },
  documentation: {
    props: {
      col: 'col',
      imgUrl: 'link',
      children: 'children',
      customClass: 'customClass'
    },
    innerClass: {
      'root > .image-wrapper': 'Wrapper for image',
      'root > .content': 'Wrapper for children'
    }
  }
};

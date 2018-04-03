export default {
  suitedTheme: 'light',
  defaultProps: {
    imgUrl: '/images/example/cover.jpg',
    info: { Example: 'example' }
  },
  documentation: {
    props: {
      customClass: 'customClass',
      imgUrl: 'link',
      info: 'An object of information',
      onSave: 'func'
    },
    innerClass: {
      'root > .introduction-image': 'Class of image',
      'root > .introduction-card-info': 'Wrapper of info',
      'introduction-card-info > .info-line' : 'A line of info ( info-line > .info-key; info-line > .info-value; info-line > .info-key-input; info-line > .info-value-input; info-line > .remove-field-btn )',
      'root > .introduction-card-feature': 'Wrapper for feature buttons ( introduction-card-feature > .btn )'
    }
  }
};

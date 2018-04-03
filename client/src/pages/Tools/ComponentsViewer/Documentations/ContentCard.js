export default {
  suitedTheme: 'dark',
  defaultProps: {
    data: [
      {
        Label: 'Example Label',
        SubSections: [{ Label: 'Sub 1' }, { Label: 'Sub 2' }]
      }
    ]
  },
  documentation: {
    description: 'Build up content menu for Article View',
    props: {
      data: 'Array of shape Label, Content, Subsections. Subsections is an array of shape Label, Content',
      customClass: 'customClass'
    },
    innerClass: {
      'root > .contents-card-label': 'Label of content card',
      'root > .contents-card-menu': 'Wrapper for menu ( .contents-card-menu > .main-article-ref; .contents-card-menu > .sub-article-ref )'
    }
  }
};

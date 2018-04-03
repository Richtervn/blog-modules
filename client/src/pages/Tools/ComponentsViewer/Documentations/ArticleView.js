export default {
  suitedTheme: 'dark',
  defaultProps: {
    data: []
  },
  documentation: {
    props: {
      data: 'Array of shape Label, Content, Subsections. Subsections is an array of shape Label, Content',
      customClass: 'customClass',
      onSave: 'func'
    },
    innerClass: {
      'root > .default-view' : 'View show when data is empty',
      'article-view-form' : 'Form to input Label, Content ( article-view-form > .label-input; article-view-form > .content-input )',
      'article-view-form > .article-view-form-btns' : 'Wrapper for feature buttons',
      'article-view-form > .article-view-form-btns > .btn' : 'Access inner feature buttons style',
      'article-view-form > .article-sub-section-form' : 'Wrapper for sub section input ( article-sub-section-form > .label-input; article-sub-section-form > .content-input )',
      'article-sub-section-form > article-sub-section-feature' : 'Wrapper for feature buttons ( article-sub-section-form > article-sub-section-feature > .btn )',
      'root > .article-view' : 'View for article',
      'article-view > .main-article' : 'Wrapper for main article',
      'article-view > .main-article > .article-label' : 'Class of label',
      'article-label > .article-edit' : 'Feature buttons wrapper ( article-label > .article-edit > .btn )',
      'article-view > .main-article > .article-text' : 'Class of content',
      'sub-article-label' : 'Label of sub article',
      'sub-article-text': 'Content of sub article',
      'root > .article-view-feature': 'Feature buttons wrapper' 
    }
  }
};

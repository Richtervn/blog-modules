export default {
  suitedTheme: 'dark',
  defaultProps: {
    label: 'Example'
  },
  documentation: {
    props: {
      label: 'label',
      children: 'children',
      customClass: 'customClass'
    },
    innerClass: {
      'root > .header': 'Header',
      'root > .body': 'Body'
    }
  }
};

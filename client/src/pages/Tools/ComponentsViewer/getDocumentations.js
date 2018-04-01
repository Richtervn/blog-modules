const dark = {
  background: 'black',
  color: 'white'
};

export default cpn => {
  switch (cpn) {
    case 'ArticleView':
      return {
        suitedTheme: dark,
        defaultProps: { data: [] },
        documentation: 'Default docmentation'
      };
    default:
      return;
  }
};

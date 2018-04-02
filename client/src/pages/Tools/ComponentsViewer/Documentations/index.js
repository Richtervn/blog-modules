import ProgressBadgesCard from './ProgressBadgesCard';

const themes = {
  dark: {
    background: 'black',
    color: 'white'
  },
  light: {
    background: 'white',
    color: 'black'
  }
};

const documentations = { ProgressBadgesCard };

const makeDocumentaion = doc => {
  const transformDoc = { ...doc };
  transformDoc.suitedTheme = themes[doc.suitedTheme];

  for (let key in doc.defaultProps) {
    if (doc.defaultProps[key] === 'label') {
      transformDoc.defaultProps[key] = 'Example Label';
    }
    if (doc.defaultProps[key] === 'badges') {
      transformDoc.defaultProps[key] = ['badge', 'another'];
    }
    if (doc.defaultProps[key] === 'color') {
      transformDoc.defaultProps[key] = 'red';
    }
  }

  for (let key in doc.documentation.props) {
    if (doc.documentation.props[key] === 'col') {
      transformDoc.documentation.props[key] = 'Number of collumn in boostrap 4 layout';
    }
    if (doc.documentation.props[key] === 'label') {
      transformDoc.documentation.props[key] = 'Example string to show';
    }
    if (doc.documentation.props[key] === 'badges') {
      transformDoc.documentation.props[key] = 'List badges in array';
    }
    if (doc.documentation.props[key] === 'color') {
      transformDoc.documentation.props[key] = 'Color of the component';
    }
    if (doc.documentation.props[key] === 'children') {
      transformDoc.documentation.props[key] = 'Component can contain children';
    }
    if (doc.documentation.props[key] === 'func') {
      transformDoc.documentation.props[key] = 'Function to be called';
    }
    if (doc.documentation.props[key] === 'route') {
      transformDoc.documentation.props[key] = 'Click will redirect to this route';
    }
  }
  return transformDoc;
};

export default cpn => {
  if (documentations[cpn]) {
    return makeDocumentaion(documentations[cpn]);
  }
  return { suitedTheme: themes.light, documentation: null, defaultProps: {} };
};

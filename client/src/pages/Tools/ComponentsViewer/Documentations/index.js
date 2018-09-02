import { toTitle } from 'helpers';

import AddCardButton from './AddCardButton';
import AdminButtons from './AdminButtons';
import ArticleView from './ArticleView';
import BackgroundTextCard from './BackgroundTextCard';
import ButtonsNavBar from './ButtonsNavBar';
import ContentCard from './ContentCard';
import InfoHeaderCard from './InfoHeaderCard';
import IntroductionCard from './IntroductionCard';
import LeftImageCard from './LeftImageCard';
import LeftImageCardTrans from './LeftImageCardTrans';
import LeftPngCardTrans from './LeftPngCardTrans';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import ProgressBadgesCard from './ProgressBadgesCard';
import SmallIconCard from './SmallIconCard';
import TextPriorityCard from './TextPriorityCard';

const documentations = {
  AddCardButton,
  AdminButtons,
  ArticleView,
  BackgroundTextCard,
  ButtonsNavBar,
  ContentCard,
  InfoHeaderCard,
  IntroductionCard,
  LeftImageCard,
  LeftImageCardTrans,
  LeftPngCardTrans,
  MenuGroup,
  MenuItem,
  ProgressBadgesCard,
  SmallIconCard,
  TextPriorityCard
};

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
    if (doc.documentation.props[key] === 'link') {
      transformDoc.documentation.props[key] = 'String of url';
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
      transformDoc.documentation.props[key] = 'Function to be called ' + toTitle(key);
    }
    if (doc.documentation.props[key] === 'rating') {
      transformDoc.documentation.props[key] = 'Number of stars rating';
    }
    if (doc.documentation.props[key] === 'route') {
      transformDoc.documentation.props[key] = 'Click will redirect to this route';
    }
    if (doc.documentation.props[key] === 'customClass') {
      transformDoc.documentation.props[key] = 'Add a css class to wrapper element. Default value is default';
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

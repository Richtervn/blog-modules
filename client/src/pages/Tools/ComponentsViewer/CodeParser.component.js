import './CodeParser.css';
import React from 'react';
import JsxParser from 'react-jsx-parser';

import * as AboutBuilder from 'components/AboutBuilder';
import * as Buttons from 'components/Buttons';
import * as Cards from 'components/Cards';
import * as CollapseMenu from 'components/CollapseMenu';
import * as FormTools from 'components/FormTools';
import * as Inputs from 'components/Inputs';
import * as Modal from 'components/Modal';
import * as Other from 'components/Other';
import * as SideBars from 'components/SideBars';
import * as ToolsBars from 'components/ToolsBars';
import * as TopBars from 'components/TopBars';

const injectableComponents = {
  ...AboutBuilder,
  ...Buttons,
  ...Cards,
  ...CollapseMenu,
  ...FormTools,
  ...Inputs,
  ...Modal,
  ...Other,
  ...SideBars,
  ...ToolsBars,
  ...TopBars
};

export default ({ jsxCode, cssCode }) => (
  <div id="cv-code-parser">
    <JsxParser components={injectableComponents} jsx={jsxCode} showWarnings={false} />
    {cssCode && <style>{cssCode}</style>}
  </div>
);

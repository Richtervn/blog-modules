import './CodeParser.css';
import _ from 'underscore';
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

export default ({ jsxCode, cssCode, documentation, suitedTheme }) => (
  <div id="cv-code-parser">
    <div className="viewer" style={{ background: suitedTheme.background, color: suitedTheme.color }}>
      <JsxParser components={injectableComponents} jsx={jsxCode} showWarnings={false} />
    </div>
    {!documentation && <div className="documentation">No documentation</div>}
    {documentation && (
      <div className="documentation">
        {documentation.props && (
          <ul className="cpn-props">
            {_.sortBy(Object.keys(documentation.props)).map((key, i) => (
              <li key={i}>
                <span className="prop-name">{key}</span>
                <span className="prop-desc"> : {documentation.props[key]}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    )}
    {cssCode && <style>{cssCode}</style>}
  </div>
);

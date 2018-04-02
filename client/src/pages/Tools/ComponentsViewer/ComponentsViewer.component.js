import './ComponentsViewer.css';
import React, { Component } from 'react';
import PageContainer from 'common/PageContainer';
import jsxToString from 'jsx-to-string';

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

import getDocumentations from './Documentations';
import ComponentsSelector from './ComponentsSelector.component';
import CodeEditor from './CodeEditor.component';
import CodeParser from './CodeParser.component';

class ComponentsViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: {
        AboutBuilder,
        Buttons,
        Cards,
        CollapseMenu,
        FormTools,
        Inputs,
        Modal,
        Other,
        SideBars,
        ToolsBars,
        TopBars
      },
      selectedCpn: null,
      jsxCode: '',
      cssCode: '',
      language: 'JSX',
      isSharing: true,
      documentation: '',
      suitedTheme: ''
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick({ key, cpn }) {
    const { documentation, suitedTheme, defaultProps } = getDocumentations(key);
    console.log(getDocumentations(key));
    const displayComponent = <cpn {...defaultProps} />;
    const source = jsxToString(displayComponent, { displayName: key, shortBooleanSyntax: true });

    this.setState({
      selectedCpn: cpn,
      jsxSource: source,
      jsxCode: source,
      cssCode: '',
      documentation: documentation,
      suitedTheme: suitedTheme
    });
  }

  render() {
    const { components, selectedCpn, language, jsxCode, cssCode, isSharing, documentation, suitedTheme } = this.state;

    return (
      <PageContainer>
        <div className="row">
          <div className="col-2">
            <div className="row">
              <ComponentsSelector
                components={components}
                activeItem={selectedCpn}
                onClickItem={cpn => this.handleItemClick(cpn)}
              />
            </div>
          </div>
          <div className="col-10">
            <div className="row">
              <CodeEditor
                isSharing={isSharing}
                onToggleShare={() => this.setState({ isSharing: !isSharing })}
                language={language}
                onChangeLanguage={lang => this.setState({ language: lang })}
                onParserCode={value => this.setState({ jsxCode: value.jsxCode, cssCode: value.cssCode })}
                jsxSource={jsxCode}
              />
              <div className="col">
                <div className="row">
                  <CodeParser
                    jsxCode={jsxCode}
                    cssCode={cssCode}
                    documentation={documentation}
                    suitedTheme={suitedTheme}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default ComponentsViewer;

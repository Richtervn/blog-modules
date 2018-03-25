import React, { Component } from 'react';
import PageContainer from 'common/PageContainer';

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
      language: 'JSX'
    };
  }

  render() {
    const { components, selectedCpn, language, jsxCode, cssCode } = this.state;
    console.log(React.cloneElement(Cards.BackgroundTextCard))
    return (
      <PageContainer>
        <div className="row">
          <div className="col-2">
            <div className="row">
              <ComponentsSelector
                components={components}
                activeItem={selectedCpn}
                onClickItem={cpn => this.setState({ selectedCpn: cpn, jsxCode: `<${cpn}/>` })}
              />
            </div>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <CodeEditor
                    language={language}
                    onChangeLanguage={lang => this.setState({ language: lang })}
                    onChangeCode={code =>
                      language === 'JSX' ? this.setState({ jsxCode: code }) : this.setState({ cssCode: code })
                    }
                    jsxCode={jsxCode}
                    cssCode={cssCode}
                    jsxSource={`<${selectedCpn}/>`}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <CodeParser jsxCode={jsxCode} cssCode={cssCode} />
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

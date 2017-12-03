import React, { Component } from 'react';
import decodeMuClass from 'factories/decodeMuClass';

const initState = (characters, exchangeCount) => {
  const value = {};
  characters.forEach(character => {
    value[character.Name] = 0;
  });
  console.log(exchangeCount);
  return {
    value: value,
    characters: characters.map(character => {
      return {
        Name: character.Name,
        Class: character.Class,
        IsVip: character.IsVip,
        Count: exchangeCount[character.Name]
      };
    }),
    total: exchangeCount.total
  };
};

class ExchangeModal extends Component {
  constructor(props) {
    super(props);
    const { characters, exchangeCount } = this.props;
    this.state = initState(characters, exchangeCount);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps({ exchangeCount, characters }) {
    this.setState(initState(characters, exchangeCount));
  }

  handleChange(event){
    let {name, value} = event.target;
    const nextState = {...this.state};
    this.state.characters.forEach(character => {
      if(character.Name == name && value > character.Count){
        value = character.Count;
      }
    })
    if(value < 0) {
      value = 0;
    }
    nextState.value[name] = value;
    this.setState(nextState)
  }

  render() {
    const { exchange } = this.props;
    return (
      <div className="modal fade" id="buyDs9799LuxuryExchangeModal" style={{ color: 'black' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <img
                className="ds9799-modal-lx-icon"
                src={exchange.image_url.replace('./public', 'http://localhost:3000')}
              />
              <strong>{`Exchange ${exchange.name}`}</strong>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container center-flex flex-center-both">
                {this.state.characters.map((character, i) => (
                  <div className="ds9799-character-plain-card" key={i}>
                    <div className="row no-row-margin">
                      <div className="col-4 no-col-margin">
                        <img
                          src={`/app_modules/images/muonline/character/${character.Class}.png`}
                          className="ds9799-character-card-icon"
                        />
                      </div>
                      <div className="col-8 no-col-margin">
                        <h5>
                          {character.Name}
                          {character.IsVip == 1 && (
                            <span>
                              <img
                                src={`/app_modules/images/icons/vip.png`}
                                className="pull-right"
                                style={{ width: '20px', height: '20px' }}
                              />
                            </span>
                          )}
                        </h5>
                        <div>
                          <strong>{`${character.Count} ${exchange.name}`}</strong>
                        </div>
                        <form className="form-inline">
                          <div className="form-group" style={{ paddingRight: '15px' }}>
                            <input
                              type="number"
                              onChange={this.handleChange}
                              className="form-control"
                              name={character.Name}
                              value={this.state.value[character.Name]}
                              style={{ maxWidth: '150px' }}
                            />
                          </div>
                          <button className="btn btn-danger">Exchange</button>
                        </form>
                      </div>
                    </div>
                  </div>
                ))}

                <button className="btn btn-danger btn-block">
                  {`Exchange all ${this.state.total} ${exchange.name}`}
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExchangeModal;

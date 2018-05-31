import './MonstersSetBase.css';
import _ from 'underscore';
import React, { Component } from 'react';

import MapFileSelector from './MapFileSelector.container';
import MonsterFileSelector from './MonsterFileSelector.container';
import MapDirectionSelector from './MapDirectionSelector.component';

class MonstersSetBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapId: 0,
      monId: 0,
      choosingX: 0,
      choosingY: 0,
      choosenX: 0,
      choosenY: 0,
      monMove: '',
      monDirection: '',
      monRespawn: '',
      monAmount: '',
      secondX: '',
      secondY: '',
      msb: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.generate = this.generate.bind(this);
    this.removeMsb = this.removeMsb.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  generate() {
    const { data: { Monsters, Maps } } = this.props;
    let { mapId, monId, monDirection, choosenX, choosenY, monMove, monRespawn, secondX, secondY, monAmount } = {
      ...this.state
    };

    const monster = _.findWhere(Monsters, { _id: monId.toString() });
    const map = _.findWhere(Maps, { _id: parseInt(mapId, 10) });

    let desciption, msbCode;
    if (!choosenX) choosenX = 125;
    if (!choosenY) choosenY = 125;
    if (!monAmount) monAmount = 5;
    if (!monRespawn) monRespawn = -1;
    if (!secondX) secondX = choosenX;
    if (!secondY) secondY = choosenY;

    if (monDirection) {
      if (!monMove) monMove = 0;
      desciption = `[${map.Name}] ${monster.Name}`;
      msbCode = `${monId}  ${mapId}  ${monMove}  ${choosenX}  ${choosenY}  ${monDirection}  //${desciption}`;
    } else {
      if (!monMove) monMove = 30;
      desciption = `[${map.Name}] ${monAmount} ${monster.Name}`;
      msbCode = `${monId}  ${mapId}  ${monMove}  ${choosenX}  ${choosenY}  ${secondX}  ${secondY}  ${monRespawn}  ${monAmount}  //${desciption}`;
    }

    const nextState = { ...this.state };
    nextState.msb.push(msbCode);
    this.setState(nextState);
  }

  removeMsb(index) {
    const nextState = { ...this.state };
    nextState.msb.splice(index, 1);
    this.setState(nextState);
  }

  render() {
    const {
      monId,
      mapId,
      monAmount,
      monDirection,
      choosingX,
      choosingY,
      choosenX,
      choosenY,
      monMove,
      monRespawn,
      secondX,
      secondY,
      msb
    } = this.state;

    return (
      <div id="ds9799-msb">
        <div className="map-selector">
          <MapFileSelector
            mapId={mapId}
            onSelect={e => this.setState({ mapId: e.target.value })}
            onChooseCoordinate={({ nativeEvent }) =>
              this.setState({
                choosingX: Math.round(nativeEvent.offsetX / 2),
                choosingY: Math.round(nativeEvent.offsetY / 2)
              })
            }
            onSetCoordinate={() => this.setState({ choosenX: choosingX, choosenY: choosingY })}
          />
          <div className="coorinates-inputs">
            <div className="dectecting-coors">
              <div className="coors-input">
                <div className="prepend">X</div>
                <input type="text" className="form-control" value={choosingX} readOnly disabled />
              </div>
              <div className="coors-input">
                <div className="prepend">Y</div>
                <input type="text" className="form-control" value={choosingY} readOnly disabled />
              </div>
            </div>
            <div className="setted-coors">
              <div className="coors-input">
                <div className="prepend">X</div>
                <input
                  type="text"
                  className="form-control"
                  value={choosenX}
                  onChange={this.handleChange}
                  name="choosenX"
                />
              </div>
              <div className="coors-input">
                <div className="prepend">Y</div>
                <input
                  type="text"
                  className="form-control"
                  value={choosenY}
                  onChange={this.handleChange}
                  name="choosenY"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-generate">
          <div className="msb-form">
            <MonsterFileSelector monId={monId} onSelect={e => this.setState({ monId: e.target.value })} />
            <div className="msb-input-form">
              <MapDirectionSelector
                onSelect={e => this.setState({ monDirection: e.target.value })}
                value={monDirection}
              />
              <input
                type="number"
                className="form-control"
                name="monMove"
                placeholder="Monster Move (0 -> 30)"
                onChange={this.handleChange}
                value={monMove}
              />
              <input
                type="number"
                className="form-control"
                name="monRespawn"
                placeholder="Respawn Time (-1 -> x)"
                onChange={this.handleChange}
                value={monRespawn}
              />
              <input
                type="number"
                className="form-control"
                name="secondX"
                placeholder="Second X For Range"
                onChange={this.handleChange}
                value={secondX}
              />
              <input
                type="number"
                className="form-control"
                name="secondY"
                placeholder="Second Y For Range"
                onChange={this.handleChange}
                value={secondY}
              />
              <input
                type="number"
                className="form-control"
                name="monAmount"
                placeholder="Amount of Monsters"
                onChange={this.handleChange}
                value={monAmount}
              />
              <button className="btn btn-danger btn-block" onClick={this.generate}>
                Generate
              </button>
            </div>
          </div>
          <div className="msb-box">
            {msb.map((msbCode, i) => (
              <p key={i}>
                {msbCode}
                <div className="pull-right">
                  <button className="btn btn-danger" onClick={() => this.removeMsb(i)}>
                    <i className="fa fa-times" />
                  </button>
                </div>
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MonstersSetBase;

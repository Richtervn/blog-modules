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
      monMove: null,
      monDirection: null,
      monRespawn: null,
      monAmount: null,
      secondX: null,
      secondY: null,
      msb: []
    };
    this.selectMap = this.selectMap.bind(this);
    this.selectMonster = this.selectMonster.bind(this);
    this.chooseCoordinate = this.chooseCoordinate.bind(this);
    this.setCoordinate = this.setCoordinate.bind(this);
    this.setDirection = this.setDirection.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generate = this.generate.bind(this);
    this.removeMsb = this.removeMsb.bind(this);
  }

  selectMonster(id) {
    this.setState({ monId: id });
  }

  selectMap(id) {
    this.setState({ mapId: id });
  }

  chooseCoordinate(e) {
    this.setState({
      choosingX: Math.round(e.offsetX / 2),
      choosingY: Math.round(e.offsetY / 2)
    });
  }

  setCoordinate(e) {
    this.setState({
      choosenX: this.state.choosingX,
      choosenY: this.state.choosingY
    });
  }

  setDirection(direction) {
    this.setState({
      monDirection: direction
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  generate() {
    const { data: { Monsters, Maps } } = this.props;
    let {
      mapId,
      monId,
      monDirection,
      choosingX,
      choosingY,
      choosenX,
      choosenY,
      monMove,
      monRespawn,
      secondX,
      secondY,
      monAmount
    } = {
      ...this.state
    };

    const monster = _.findWhere(Monsters, { _id: monId.toString() });
    const map = _.findWhere(Maps, { _id: parseInt(mapId) });

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
      mapId,
      monId,
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
      <div className="row">
        <div className="col-6">
          <div className="ds9799-dashboard-container">
            <MapFileSelector
              mapId={mapId}
              onSelect={e => this.selectMap(e.target.value)}
              onChooseCoordinate={({ nativeEvent }) => this.chooseCoordinate(nativeEvent)}
              onSetCoordinate={() => this.setCoordinate()}
            />
            <div className="row">
              <div className="col">
                <div className="input-group sm-padding">
                  <span className="input-group-addon">X</span>
                  <input type="text" className="form-control border-darkgrey" value={choosingX} readOnly />
                </div>
              </div>
              <div className="col">
                <div className="input-group sm-padding">
                  <span className="input-group-addon">Y</span>
                  <input type="text" className="form-control border-darkgrey" value={choosingY} readOnly />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="input-group sm-padding">
                  <span className="input-group-addon">X</span>
                  <input
                    type="text"
                    className="form-control border-lawngreen"
                    value={choosenX}
                    onChange={this.handleChange}
                    name={choosenX}
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group sm-padding">
                  <span className="input-group-addon">Y</span>
                  <input
                    type="text"
                    className="form-control border-lawngreen"
                    value={choosenY}
                    onChange={this.handleChange}
                    name={choosenY}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col">
              <div className="ds9799-dashboard-container">
                <MonsterFileSelector monId={monId} onSelect={e => this.selectMonster(e.target.value)} />
              </div>
            </div>
            <div className="col">
              <div className="ds9799-dashboard-container">
                <MapDirectionSelector onSelect={e => this.setDirection(e.target.value)} />
                <input
                  type="number"
                  className="form-control"
                  name="monMove"
                  placeholder="Monster Move (0 -> 30)"
                  onChange={this.handleChange}
                />
                <input
                  type="number"
                  className="form-control"
                  name="monRespawn"
                  placeholder="Respawn Time (-1 -> x)"
                  onChange={this.handleChange}
                />
                <input
                  type="number"
                  className="form-control"
                  name="secondX"
                  placeholder="Second X For Range"
                  onChange={this.handleChange}
                />
                <input
                  type="number"
                  className="form-control"
                  name="secondY"
                  placeholder="Second Y For Range"
                  onChange={this.handleChange}
                />
                <input
                  type="number"
                  className="form-control"
                  name="monAmount"
                  placeholder="Amount of Monsters"
                  onChange={this.handleChange}
                />
                <button className="btn btn-danger btn-block" onClick={this.generate}>
                  Generate
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="ds9799-dashboard-container">
              <div className="ds9799-msb-box">
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
        </div>
      </div>
    );
  }
}

export default MonstersSetBase;

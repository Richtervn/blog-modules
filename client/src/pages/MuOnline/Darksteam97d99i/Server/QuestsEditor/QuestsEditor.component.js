import './QuestsEditor.css';
import React, {Component} from 'react';

class QuestsEditor extends Component {
  componentWillMount() {
    
  }

  render(){
    return <div id="ds9799-quests-editor"></div>
  }
}

export default QuestsEditor;


// import _ from 'underscore';
// import React, { Component } from 'react';

// import MonsterFileSelector from '../MonsterSetBase/MonsterFileSelector';
// import ItemSelector from '../BagItemsEditor/ItemSelector';
// import BasicItemOptions from '../BagItemsEditor/BasicItemOptions';
// import ExcItemOptions from '../ShopEditor/ExcItemOptions';
// import SimpleMapSelector from './SimpleMapSelector';

// const optLevel = [0, 1, 2, 3, 4, 5, 6, 7];
// const itemLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// class QuestEditor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       minPlvl: 1,
//       minPrs: 0,
//       minPgrs: 0,
//       monId: 0,
//       mapId: 0,
//       monAmount: 0,
//       questInfo: '',
//       questRequire: '-',
//       questReward: '',
//       isRequireItem: false,
//       reqCategory: 'Swords',
//       reqItemId: 0,
//       reqItemLvl: 0,
//       reqItemOptLvl: 0,
//       reqItemAmount: 0,
//       rewCategory: 'Swords',
//       rewItemId: 0,
//       rewItemLuck: false,
//       rewItemSkill: false,
//       rewItemLvl: 0,
//       rewItemOptLvl: 0,
//       rewItemExc: {
//         exc1: false,
//         exc2: false,
//         exc3: false,
//         exc4: false,
//         exc5: false,
//         exc6: false
//       },
//       rewZen: 0,
//       rewPoints: 0,
//       rewExp: 0,
//       rewLevels: 0,
//       rewCredits: 0,
//       rewItemAmount: 0,
//       quest: []
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.selectMonId = this.selectMonId.bind(this);
//     this.changeCheck = this.changeCheck.bind(this);
//     this.selectReqItemCategory = this.selectReqItemCategory.bind(this);
//     this.selectReqItem = this.selectReqItem.bind(this);
//     this.changeReqItemLevel = this.changeReqItemLevel.bind(this);
//     this.changeReqItemOpt = this.changeReqItemOpt.bind(this);
//     this.selectRewItemCategory = this.selectRewItemCategory.bind(this);
//     this.selectRewItem = this.selectRewItem.bind(this);
//     this.changeRewCheck = this.changeRewCheck.bind(this);
//     this.changeRewLevel = this.changeRewLevel.bind(this);
//     this.changeRewExc = this.changeRewExc.bind(this);
//     this.generate = this.generate.bind(this);
//   }

//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   selectMonId(id) {
//     this.setState({ monId: id });
//   }

//   selectMap(id) {
//     this.setState({ mapId: id });
//   }

//   changeCheck(name) {
//     this.setState({ [name]: !this.state[name] });
//   }

//   selectReqItemCategory(category) {
//     this.setState({ reqCategory: category });
//   }

//   selectReqItem(id) {
//     this.setState({ reqItemId: id });
//   }

//   selectRewItemCategory(category) {
//     this.setState({ rewCategory: category });
//   }

//   selectRewItem(id) {
//     this.setState({ rewItemId: id });
//   }

//   changeReqItemOpt(e) {
//     this.setState({ reqItemOptLvl: e.target.value });
//   }

//   changeReqItemLevel(e) {
//     this.setState({ reqItemLvl: e.target.value });
//   }

//   changeRewCheck(type) {
//     if (type == 'luck') this.setState({ rewItemLuck: !this.state.rewItemLuck });
//     if (type == 'skill') this.setState({ rewItemSkill: !this.state.rewItemSkill });
//   }

//   changeRewLevel(e) {
//     const { name, value } = e.target;
//     if (name == 'option') this.setState({ rewItemOptLvl: value });
//     if (name == 'level') this.setState({ rewItemLvl: value });
//   }

//   changeRewExc(type) {
//     const nextState = { ...this.state };
//     nextState.rewItemExc[type] = !this.state.rewItemExc[type];
//     this.setState(nextState);
//   }

//   generate() {
//     const { data } = this.props;
//     const {
//       minPlvl,
//       minPrs,
//       minPgrs,
//       monId,
//       mapId,
//       monAmount,
//       questInfo,
//       questRequire,
//       questReward,
//       isRequireItem,
//       reqCategory,
//       reqItemId,
//       reqItemLvl,
//       reqItemAmount,
//       rewCategory,
//       rewItemId,
//       rewItemLvl,
//       rewItemSkill,
//       rewItemLuck,
//       rewItemOptLvl,
//       rewItemExc,
//       rewItemAmount,
//       rewZen,
//       rewPoints,
//       rewExp,
//       rewLevels,
//       rewCredits,
//       quest
//     } = this.state;
//     let questStr = `${minPlvl}  ${minPrs}  ${minPgrs}  ${monId}  ${mapId}  `;
//     questStr += `${monAmount}  "${questInfo}"  "${questRequire}"  "${questReward}"  `;
//     questStr += isRequireItem ? '1  ' : '0  ';
//     const reqItemGroup = _.findWhere(data.Categories, { Name: reqCategory });
//     questStr += `${reqItemGroup._id}  ${reqItemId}  ${reqItemLvl}  ${reqItemAmount}  `;
//     const rewItemGroup = _.findWhere(data.Categories, { Name: rewCategory });
//     questStr += `${rewItemGroup._id}  ${rewItemId} ${rewItemLvl}  `;
//     questStr += rewItemSkill ? '1  ' : '0  ';
//     questStr += rewItemLuck ? '1  ' : '0  ';
//     questStr += `${rewItemOptLvl}  `;
//     let excOpt = 0;
//     const { exc1, exc2, exc3, exc4, exc5, exc6 } = rewItemExc;
//     if (exc1) excOpt += 1;
//     if (exc2) excOpt += 2;
//     if (exc3) excOpt += 4;
//     if (exc4) excOpt += 8;
//     if (exc5) excOpt += 16;
//     if (exc6) excOpt += 32;
//     questStr += `${excOpt}  ${rewItemAmount}  ${rewZen}  ${rewPoints}  ${rewExp}  ${rewLevels}  ${rewCredits}`;

//     const nextState = { ...this.state };
//     nextState.quest.push(questStr);
//     this.setState(nextState);
//   }

//   render() {
//     const { data, onGetData } = this.props;
//     const {
//       monId,
//       isRequireItem,
//       reqCategory,
//       reqItemId,
//       reqItemLvl,
//       reqItemOptLvl,
//       rewCategory,
//       rewItemId,
//       rewItemLuck,
//       rewItemSkill,
//       rewItemLvl,
//       rewItemOptLvl,
//       rewItemExc,
//       quest
//     } = this.state;
//     return (
//       <div className="row no-row-margin">
//         <div className="col no-col-margin">
//           <div className="ds9799-dashboard-container">
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="minPlvl"
//               placeholder="Min player level"
//             />
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="minPrs"
//               placeholder="Min player resets"
//             />
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="minPgrs"
//               placeholder="Min player grand resets"
//             />
//             <div className="mgt-5">
//               <MonsterFileSelector
//                 data={data}
//                 onGetData={onGetData}
//                 monId={monId}
//                 onSelect={e => this.selectMonId(e.target.value)}
//               />
//             </div>
//             <div className="mgt-5">
//               <SimpleMapSelector
//                 data={data}
//                 onGetData={onGetData}
//                 onSelect={e => this.selectMap(e.target.value)}
//               />
//             </div>
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="monAmount"
//               placeholder="Monsters to be killed"
//             />
//             <input
//               className="form-control mgt-5"
//               type="text"
//               onChange={this.handleChange}
//               name="questInfo"
//               placeholder="Quest's information"
//             />
//             <input
//               className="form-control mgt-5"
//               type="text"
//               onChange={this.handleChange}
//               name="questRequire"
//               placeholder="Quest's requirement description"
//             />
//             <input
//               className="form-control mgt-5"
//               type="text"
//               onChange={this.handleChange}
//               name="questReward"
//               placeholder="Quest's reward description"
//             />
//             <button className="btn btn-block btn-danger mgt-5" onClick={() => this.generate()}>
//               Generate
//             </button>
//           </div>
//         </div>
//         <div className="col no-col-margin">
//           <div className="ds9799-dashboard-container">
//             <label className="form-check-label">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 onChange={() => this.changeCheck('isRequireItem')}
//                 checked={isRequireItem}
//               />
//               &nbsp;Required Item ?&nbsp;
//             </label>
//             <div className="mgt-5">
//               <ItemSelector
//                 data={data}
//                 onGetData={onGetData}
//                 category={reqCategory}
//                 itemId={reqItemId}
//                 onSelectCategory={e => this.selectReqItemCategory(e.target.value)}
//                 onSelectItem={e => this.selectReqItem(e.target.value)}
//                 itemLvl={reqItemLvl}
//               />
//             </div>
//             <div className="row no-row-margin">
//               <div className="col no-col-margin">
//                 <form className="form-inline flex-center">
//                   <label className="mr-sm-2">Item Level :</label>
//                   <select
//                     className="ds9799-sm-selector"
//                     name="level"
//                     onChange={this.changeReqItemLevel}
//                     defaultValue={reqItemLvl}>
//                     {itemLevel.map((lvl, i) => (
//                       <option value={lvl} key={i}>
//                         {lvl}
//                       </option>
//                     ))}
//                   </select>
//                 </form>
//               </div>
//               <div className="col no-col-margin">
//                 <form className="form-inline flex-center">
//                   <label className="mr-sm-2">Opt Level :</label>
//                   <select
//                     className="ds9799-sm-selector"
//                     name="option"
//                     onChange={this.changeReqItemOpt}
//                     defaultValue={reqItemOptLvl}>
//                     {optLevel.map((lvl, i) => (
//                       <option value={lvl} key={i}>
//                         {lvl}
//                       </option>
//                     ))}
//                   </select>
//                 </form>
//               </div>
//             </div>
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="reqItemAmount"
//               placeholder="Required Item Amount"
//             />
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="rewZen"
//               placeholder="Reward Zen Amount"
//             />
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="rewPoints"
//               placeholder="Reward Points"
//             />
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="rewExp"
//               placeholder="Reward Experience"
//             />
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="rewLevels"
//               placeholder="Reward Levels"
//             />
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="rewCredits"
//               placeholder="Reward Credits"
//             />
//             <input
//               className="form-control mgt-5"
//               type="number"
//               onChange={this.handleChange}
//               name="rewItemAmount"
//               placeholder="Reward Item Count"
//             />
//           </div>
//         </div>
//         <div className="col-6 no-col-margin">
//           <div className="ds9799-dashboard-container">
//             <div className="mgt-5">
//               <ItemSelector
//                 data={data}
//                 onGetData={onGetData}
//                 category={rewCategory}
//                 itemId={rewItemId}
//                 onSelectCategory={e => this.selectRewItemCategory(e.target.value)}
//                 onSelectItem={e => this.selectRewItem(e.target.value)}
//                 itemLvl={rewItemLvl}
//               />
//               <BasicItemOptions
//                 luck={rewItemLuck}
//                 skill={rewItemSkill}
//                 onChangeCheck={type => this.changeRewCheck(type)}
//                 option={rewItemOptLvl}
//                 level={rewItemLvl}
//                 onChangeLevel={this.changeRewLevel}
//               />
//               <ExcItemOptions
//                 category={rewCategory}
//                 exc={rewItemExc}
//                 itemId={rewItemExc}
//                 onChangeCheck={this.changeRewExc}
//               />
//             </div>
//             <div className="ds9799-quest-box">{quest.map((q, i) => <div key={i}>{q}</div>)}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default QuestEditor;

import './InventoryManager.css';
import React, { Component } from 'react';

import { ColLoader } from 'common/Loaders';

import { CharactersList } from '../CharactersManager';
import InventoryCard from './InventoryCard.container';
import ItemEditor from './ItemEditor.component';

const defaultItem = {
  edit: false,
  category: 'Swords',
  duration: 255,
  itemId: 0,
  luck: false,
  skill: false,
  option: 0,
  level: 0,
  exc1: false,
  exc2: false,
  exc3: false,
  exc4: false,
  exc5: false,
  exc6: false
};

class InventoryManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusCharacter: this.props.characters ? this.props.characters[0].Name : '',
      slot: '',
      ...this.initItemState()
    };
  }

  initItemState(item) {
    if (!item) {
      return { ...defaultItem };
    }
    return {
      edit: true,
      category: item.category,
      duration: 255,
      itemId: item.itemId,
      luck: item.luck === 1,
      skill: item.skill === 1,
      option: item.option,
      level: item.level,
      exc1: item.exc1 === 1,
      exc2: item.exc2 === 1,
      exc3: item.exc3 === 1,
      exc4: item.exc4 === 1,
      exc5: item.exc5 === 1,
      exc6: item.exc6 === 1
    };
  }

  componentWillMount() {
    this.props.onGetCharacters();
  }

  handleCharSelect(charName) {
    this.setState({ focusCharacter: charName, slot: '', edit: false });
    this.props.onGetInventory(charName);
  }

  handleSelectItem(slot, item) {
    this.setState({ slot, ...this.initItemState(item) });
  }

  handleUpdateInventory({ deleteMode }) {
    const {
      focusCharacter,
      slot,
      category,
      duration,
      itemId,
      luck,
      skill,
      option,
      level,
      exc1,
      exc2,
      exc3,
      exc4,
      exc5,
      exc6
    } = this.state;
    const formBody = { characterName: focusCharacter, slot };
    if (!deleteMode) {
      formBody.item = {
        category,
        duration,
        itemId,
        luck,
        skill,
        option,
        level,
        exc1,
        exc2,
        exc3,
        exc4,
        exc5,
        exc6
      };
    }
    this.props.onUpdateInventory(formBody);
    if (deleteMode) {
      this.setState({ slot: '' });
    }
  }

  render() {
    const { characters } = this.props;
    const {
      focusCharacter,
      edit,
      slot,
      category,
      itemId,
      level,
      luck,
      skill,
      option,
      exc1,
      exc2,
      exc3,
      exc4,
      exc5,
      exc6
    } = this.state;
    if (!characters) {
      return <ColLoader />;
    }
    return (
      <div id="ds9799-inventory-manager">
        <div className="side-bar">
          <CharactersList
            characters={characters}
            focusCharacter={focusCharacter}
            onCharacterSelect={charName => this.handleCharSelect(charName)}
            hideAddBtn
          />
        </div>
        <div className="main-view">
          <div className="inventory-card-wrapper">
            <InventoryCard selectedSlot={slot} onSelectItem={(sl, item) => this.handleSelectItem(sl, item)} />
          </div>
          {slot && (
            <div className="item-editor-wrapper">
              <ItemEditor
                category={category}
                itemId={itemId}
                level={level}
                luck={luck}
                skill={skill}
                option={option}
                exc1={exc1}
                exc2={exc2}
                exc3={exc3}
                exc4={exc4}
                exc5={exc5}
                exc6={exc6}
                onChangeCheck={name => this.setState({ [name]: !this.state[name] })}
                onSelectCategory={cat => this.setState({ category: cat })}
                onChangeLevel={e => this.setState({ [e.target.name]: e.target.value })}
                onSelectItem={id => this.setState({ itemId: id })}
              />
              <div className="feature">
                <div className="feature-btn">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => this.handleUpdateInventory({ deleteMode: false })}>
                    {edit ? 'Update Inventory' : 'Create Item'}
                  </button>
                </div>
                {edit && (
                  <div className="feature-btn">
                    <button
                      className="btn btn-danger btn-block"
                      onClick={() => this.handleUpdateInventory({ deleteMode: true })}>
                      Delete Item
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          {!slot && (
            <div className="notice">
              <h4>Select slot to edit</h4>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default InventoryManager;

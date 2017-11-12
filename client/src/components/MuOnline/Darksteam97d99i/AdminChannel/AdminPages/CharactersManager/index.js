import React, { Component } from 'react';
import CharacterCard from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/CharacterManager/CharacterCard';
import CharacterInfo from './CharacterInfo';

class CharactersManager extends Component {
	constructor(props) {
		super(props);

		this.state = { isMakeNew: false };
		this.onMakeNew = this.onMakeNew.bind(this);
		this.onCancelNew = this.onCancelNew.bind(this);
	}

	onMakeNew() {
		this.setState({ isMakeNew: true });
	}

	onCancelNew() {
		this.setState({ isMakeNew: false });
	}

	render() {
		const {
			accounts,
			characters,
			onGetCharacters,
			onGetAccounts,
			focusCharacter,
			onEditCharacter,
			onDeleteCharacter,
			onSetFocusCharacter,
			onAddCharacter
		} = this.props;

		if (!characters) {
			onGetCharacters();
			return null;
		}

		return (
			<div className="row no-row-margin">
				<div className="col-3 no-col-margin">
					<div className="ds9799-character-search-box">
						<i className="fa fa-search ds9799-account-search-icon" />
						<input
							type="text"
							className="ds9799-character-search-input"
							onChange={e => onGetCharacters({ Name: e.target.value })}
						/>
					</div>
					{characters.map(character => (
						<CharacterCard
							key={character.Name}
							character={character}
							isFocus={character.Name == focusCharacter.Name}
							onSelect={onSetFocusCharacter}
							admin
						/>
					))}
					<div className="ds9799-character-add-button" onClick={this.onMakeNew}>
						<i className="fa fa-plus-circle ds9799-account-add-icon" />
					</div>
				</div>
				<div className="col-9 no-col-margin">
					<CharacterInfo
						character={focusCharacter}
						accounts={accounts}
						onGetAccounts={onGetAccounts}
						isMakeNew={this.state.isMakeNew}
						onDeleteCharacter={onDeleteCharacter}
						onAddCharacter={onAddCharacter}
						onEditCharacter={onEditCharacter}
					/>
				</div>
			</div>
		);
	}
}

export default CharactersManager;

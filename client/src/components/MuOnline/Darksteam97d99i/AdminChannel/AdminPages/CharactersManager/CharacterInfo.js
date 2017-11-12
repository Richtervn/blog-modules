import React, { Component } from 'react';
import decodeMuClass from 'factories/decodeMuClass';
import unixTimeHelper from 'factories/unixTimeHelper';

const initialValue = character => ({
	AccountID: character.AccountID || '',
	Name: character.Name || '',
	cLevel: character.cLevel || 1,
	LevelUpPoint: character.LevelUpPoint || 0,
	Class: character.Class || '0',
	Strength: character.Strength || 0,
	Dexterity: character.Dexterity || 0,
	Vitality: character.Vitality || 0,
	Energy: character.Energy || 0,
	Money: character.Money || 0,
	MapNumber: character.MapNumber || 0,
	MapPosX: character.MapPosX || 0,
	MapPosY: character.MapPosY || 0,
	CtlCode: character.CtlCode || 0,
	Resets: character.Resets || 0,
	GrandResets: character.GrandResets || 0,
	IsMarried: character.IsMarried == '1' ? true : false,
	MarryName: character.MarryName || '',
	QuestNumber: character.QuestNumber || 0,
	QuestMonsters: character.QuestMonsters || 0,
	SkyEventWins: character.SkyEventWins || 0,
	IsVip: character.IsVip == '1' ? true : false,
	VipExpirationTime: character.VipExpirationTime ? unixTimeHelper.toInputDate(character.VipExpirationTime) : ''
});

const characterList = {
	'Dark Wizard': '0',
	'Soul Master': '1',
	'Dark Knight': '16',
	'Blade Knight': '17',
	Elf: '32',
	'Muse Elf': '33',
	'Magic Gladiator': '48'
};

const mapList = {
	Lorencia: 0,
	Dungeon: 1,
	Davias: 2,
	Noria: 3,
	'Lost Tower': 4,
	Exile: 5,
	Stadium: 6,
	Atlans: 7,
	Tarkan: 8,
	Icarus: 10
};

class CharacterInfo extends Component {
	constructor(props) {
		super(props);
		const { character } = this.props;
		this.state = {
			test: 1,
			value: initialValue(character),
			editing: false,
			isMakeNew: false
		};

		this.enableEditing = this.enableEditing.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.close = this.close.bind(this);
		this.save = this.save.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isMakeNew) {
			return this.setState({ value: initialValue({}), editing: true, isMakeNew: true });
		}
		const { character } = nextProps;
		this.setState({ value: initialValue(character), editing: false });
	}

	enableEditing() {
		this.setState({ editing: true });
	}

	close() {
		if (this.state.isMakeNew) {
			return this.setState({
				value: initialValue(this.props.character),
				editing: false,
				isMakeNew: false
			});
		}
		if (this.state.editing) {
			return this.setState({
				editing: false,
				isMakeNew: false
			});
		}
		this.props.onDeleteCharacter(this.props.character.Name);
		this.setState({
			editing: false,
			isMakeNew: false
		});
	}

	save() {
		const formBody = { ...this.state.value };
		if (this.state.VipExpirationTime) {
			formBody.VipExpirationTime = unixTimeHelper.toOutputDate(formBody.VipExpirationTime);
		}
		if (!this.state.isMakeNew) {
			this.props.onEditCharacter(formBody);
			this.setState({ editing: false });
		} else {
			this.props.onAddCharacter(formBody);
			this.setState({ editing: false, isMakeNew: false });
		}
	}

	handleChange(event) {
		const { name, value } = event.target;
		const nextStateValue = { ...this.state.value };
		switch (name) {
			case 'IsMarried':
				nextStateValue[name] = !this.state.value[name];
				break;
			case 'IsVip':
				nextStateValue[name] = !this.state.value[name];
				break;
			default:
				nextStateValue[name] = value;
				break;
		}
		this.setState({ value: nextStateValue });
	}

	render() {
		const { accounts, onGetAccounts } = this.props;
		const { editing } = this.state;

		if (!accounts) {
			onGetAccounts();
			return null;
		}

		return (
			<div className="ds9799-character-account-card">
				<div className="ds9799-admin-account-card-header">
					<strong>Character Infomation</strong>
					<span className="pull-right">
						<button onClick={editing ? this.save : this.enableEditing}>
							<i className={editing ? 'fa fa-save' : 'fa fa-pencil'} />
						</button>
						<button onClick={this.close}>
							<i className="fa fa-times" />
						</button>
					</span>
				</div>
				<div className="ds9799-admin-account-card-content">
					<div className="row no-row-margin">
						<div className="col-4">
							<div>
								<b>Account :</b>
								<select
									className="ds9799-admin-account-form-control form-control"
									onChange={this.handleChange}
									value={this.state.value.AccountID}
									name="AccountID"
									disabled={!editing}>
									{accounts.map(account => (
										<option key={account.memb___id} value={account.memb___id}>
											{account.memb___id}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Name :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="text"
									value={this.state.value.Name}
									onChange={this.handleChange}
									name="Name"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Class :</b>
								<select
									className="ds9799-admin-account-form-control form-control"
									onChange={this.handleChange}
									value={this.state.value.Class}
									name="Class"
									disabled={!editing}>
									{Object.keys(characterList).map(charClass => (
										<option key={charClass} value={characterList[charClass]}>
											{charClass}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Character Level :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									onChange={this.handleChange}
									value={this.state.value.cLevel}
									name="cLevel"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Level Up Points :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.LevelUpPoint}
									onChange={this.handleChange}
									name="LevelUpPoint"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Strength :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.Strength}
									onChange={this.handleChange}
									name="Strength"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Agility :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.Dexterity}
									onChange={this.handleChange}
									name="Dexterity"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Vitality :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.Vitality}
									onChange={this.handleChange}
									name="Vitality"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Energy :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.Energy}
									onChange={this.handleChange}
									name="Energy"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Map :</b>
								<select
									className="ds9799-admin-account-form-control form-control"
									onChange={this.handleChange}
									value={this.state.value.MapNumber}
									onChange={this.handleChange}
									name="MapNumber"
									disabled={!editing}>
									{Object.keys(mapList).map(mapName => (
										<option key={mapName} value={mapList[mapName]}>
											{mapName}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Map Position X :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.MapPosX}
									onChange={this.handleChange}
									name="MapPosX"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Map Position Y :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.MapPosY}
									onChange={this.handleChange}
									name="MapPosY"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Resets :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.Resets}
									onChange={this.handleChange}
									name="Resets"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Grand Resets :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.GrandResets}
									onChange={this.handleChange}
									name="GrandResets"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Control Code :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.CtlCode}
									onChange={this.handleChange}
									name="CtlCode"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4 form-inline">
							<div className="form-check">
								<label className="form-check-label">
									<input
										className="form-check-input"
										type="checkbox"
										checked={this.state.value.IsMarried == 1 || this.state.value.IsMarried == true}
										disabled={!this.state.editing}
										name="IsMarried"
										onChange={this.handleChange}
									/>
									<b>Is Married</b>
								</label>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Marry Name :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="text"
									value={this.state.value.MarryName}
									onChange={this.handleChange}
									name="MarryName"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Money :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.Money}
									onChange={this.handleChange}
									name="Money"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Quest Number :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.QuestNumber}
									onChange={this.handleChange}
									name="QuestNumber"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Quest Monsters :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.QuestMonsters}
									onChange={this.handleChange}
									name="QuestMonsters"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Sky Event Wins :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.SkyEventWins}
									onChange={this.handleChange}
									name="SkyEventWins"
									disabled={!editing}
								/>
							</div>
						</div>

						<div className="col-4 form-inline">
							<div className="form-check">
								<label className="form-check-label">
									<input
										className="form-check-input"
										type="checkbox"
										checked={this.state.value.IsVip == 1 || this.state.value.IsVip == true}
										disabled={!this.state.editing}
										name="IsVip"
										onChange={this.handleChange}
									/>
									<b>Is VIP</b>
								</label>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Vip Expiration Time :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="date"
									value={this.state.value.VipExpirationTime}
									disabled={!this.state.editing}
									name="VipExpirationTime"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CharacterInfo;

import React, { Component } from 'react';
import ExcItemOptions from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/ShopEditor/ExcItemOptions';
import BasicItemOptions from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/BagItemsEditor/BasicItemOptions';
import ItemSelector from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/BagItemsEditor/ItemSelector';
import SlotSelector from '../WebShopManager/SlotSelector';

const initialMaterial = {
	name: '',
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
	exc6: false,
	count: 0
};

class ModalAddReceipt extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
		this.state = {
			file: null,
			name: '',
			price: 0,
			charge_price: 0,
			description: '',
			category: 'Swords',
			itemId: 0,
			luck: false,
			skill: false,
			option: 0,
			duration: 255,
			level: 0,
			exc1: false,
			exc2: false,
			exc3: false,
			exc4: false,
			exc5: false,
			exc6: false,
			slot: 'RightHand',
			materials: [{ ...initialMaterial }]
		};

		this.onSelectItemCategory = this.onSelectItemCategory.bind(this);
		this.onSelectItemSlot = this.onSelectItemSlot.bind(this);
		this.onSelectItemId = this.onSelectItemId.bind(this);
		this.onChangeItemCheck = this.onChangeItemCheck.bind(this);
		this.onChangeItemLevel = this.onChangeItemLevel.bind(this);
		this.addMaterial = this.addMaterial.bind(this);
		this.onChangeReceiptItem = this.onChangeReceiptItem.bind(this);
		this.handleMaterialsChange = this.handleMaterialsChange.bind(this);
	}

	onChangeReceiptItem(value, name) {
		const nextState = { ...this.state };
		switch (name) {
			case 'level':
				nextState[value.target.name] = value.target.value;
				break;
			case 'itemId':
			case 'category':
				nextState[name] = value;
				break;
			default:
				nextState[value] = !this.state[value];
				break;
		}
		this.setState(nextState);
	}

	handleMaterialsChange(event, i) {
		const nextState = { ...this.state };
		const { name, value } = event.target;
		nextState.materials = nextState.materials.map((item, idx) => {
			if (idx == i) {
				item[name] = value;
			}
			return item;
		});
		this.setState(nextState);
	}

	onSelectItemCategory(name, i) {
		const nextState = { ...this.state };
		nextState.materials = nextState.materials.map((item, idx) => {
			if (idx == i) {
				item.category = name;
			}
			return item;
		});
		this.setState(nextState);
	}

	onSelectItemSlot(name, i) {
		const nextState = { ...this.state };
		nextState.materials = nextState.materials.map((item, idx) => {
			if (idx == i) {
				item.slot = name;
			}
			return item;
		});
		this.setState(nextState);
	}

	onSelectItemId(itemId, i) {
		const nextState = { ...this.state };
		nextState.materials = nextState.materials.map((item, idx) => {
			if (idx == i) {
				item.itemId = itemId;
			}
			return item;
		});
		this.setState(nextState);
	}

	onChangeItemCheck(name, i) {
		const nextState = { ...this.state };
		nextState.materials = nextState.materials.map((item, idx) => {
			if (idx == i) {
				item[name] = !item[name];
			}
			return item;
		});
		this.setState(nextState);
	}

	onChangeItemLevel(event, i) {
		const nextState = { ...this.state };
		const { name, value } = event.target;
		nextState.materials = nextState.materials.map((item, idx) => {
			if (idx == i) {
				item[name] = value;
			}
			return item;
		});
		this.setState(nextState);
	}

	addMaterial() {
		this.state.materials.push({ ...initialMaterial });
		this.setState(this.state);
	}

	removeItem(i) {
		this.state.materials.splice(i, 1);
		this.setState(this.state);
	}

	handleChange(event) {
		const { name, value } = event.target;
		const nextState = { ...this.state };
		switch (name) {
			case 'file':
				nextState.file = event.target.files[0];
				break;
			default:
				nextState[name] = value;
				break;
		}

		this.setState(nextState);
	}

	submit() {
		this.props.onSubmit({ ...this.state });
	}

	render() {
		const { category, data, onGetData } = this.props;

		return (
			<div className="modal fade" id="addDs9799LxReceiptModal" style={{ color: 'black' }}>
				<div className="modal-dialog" role="document" style={{ maxWidth: '1400px' }}>
					<div className="modal-content">
						<div className="modal-header">
							<img className="modal-icon" src={`/app_modules/images/icons/luxury.png`} />
							<strong>{`Add a receipt`}</strong>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div className="modal-body">
							<div className="row no-row-margin">
								<div className="col-2 no-col-margin">
									<div className="form-group">
										<label>
											<strong>Image :</strong>
										</label>
										<input type="file" className="form-control" name="file" onChange={this.handleChange} />
									</div>
									<div className="form-group">
										<label>
											<strong>Name :</strong>
										</label>
										<input
											type="text"
											className="form-control"
											name="name"
											onChange={this.handleChange}
											value={this.state.name}
										/>
									</div>
									<div className="form-group">
										<label>
											<strong>Buy Price :</strong>
										</label>
										<input
											type="number"
											className="form-control"
											name="price"
											onChange={this.handleChange}
											value={this.state.price}
										/>
									</div>
									<div className="form-group">
										<label>
											<strong>Charge Price :</strong>
										</label>
										<input
											type="number"
											className="form-control"
											name="charge_price"
											onChange={this.handleChange}
											value={this.state.charge_price}
										/>
									</div>

									<div className="form-group">
										<label>
											<strong>Description :</strong>
										</label>
										<textarea
											className="form-control"
											name="description"
											onChange={this.handleChange}
											value={this.state.description}
										/>
									</div>

									<button className="btn btn-block btn-primary" onClick={this.addMaterial}>
										Add Material
									</button>
								</div>

								<div className="col-5 no-col-margin">
									<div className="ds9799-ws-add-item-wrapper">
										<SlotSelector onSelect={event => this.onChangeReceiptItem(event.target.value, 'slot')} />
										<ItemSelector
											data={data}
											onGetData={onGetData}
											category={this.state.category}
											onSelectCategory={event => this.onChangeReceiptItem(event.target.value, 'category')}
											itemId={this.state.itemId}
											itemLvl={this.state.level}
											onSelectItem={event => this.onChangeReceiptItem(event.target.value, 'itemId')}
										/>
										<BasicItemOptions
											luck={this.state.luck}
											skill={this.state.skill}
											level={this.state.level}
											option={this.state.option}
											onChangeLevel={event => this.onChangeReceiptItem(event, 'level')}
											onChangeCheck={name => this.onChangeReceiptItem(name)}
										/>
										<ExcItemOptions
											exc={{
												exc1: this.state.exc1,
												exc2: this.state.exc2,
												exc3: this.state.exc3,
												exc4: this.state.exc4,
												exc5: this.state.exc5,
												exc6: this.state.exc6
											}}
											category={this.state.category}
											onChangeCheck={name => this.onChangeReceiptItem(name)}
											itemId={this.state.itemId}
										/>
									</div>
								</div>

								<div className="col-5 no-col-margin">
									<div className="ds9799-ws-add-item-wrapper">
										{this.state.materials.map((item, i) => (
											<div key={i} className="ds9799-ws-add-item">
												<div className="form-group">
													<label>
														<strong>Name :</strong>
													</label>
													<input
														type="text"
														className="form-control"
														name="name"
														onChange={event => this.handleMaterialsChange(event, i)}
														value={this.state.materials[i].name}
													/>
												</div>
												<div className="form-group">
													<label>
														<strong>Count :</strong>
													</label>
													<input
														type="number"
														className="form-control"
														name="count"
														onChange={event => this.handleMaterialsChange(event, i)}
														value={this.state.materials[i].count}
													/>
												</div>
												<ItemSelector
													data={data}
													onGetData={onGetData}
													category={this.state.materials[i].category}
													onSelectCategory={event => this.onSelectItemCategory(event.target.value, i)}
													itemId={this.state.materials[i].itemId}
													itemLvl={this.state.materials[i].level}
													onSelectItem={event => this.onSelectItemId(event.target.value, i)}
												/>
												<BasicItemOptions
													luck={this.state.materials[i].luck}
													skill={this.state.materials[i].skill}
													level={this.state.materials[i].level}
													option={this.state.materials[i].option}
													onChangeLevel={event => this.onChangeItemLevel(event, i)}
													onChangeCheck={name => this.onChangeItemCheck(name, i)}
												/>
												<ExcItemOptions
													exc={{
														exc1: this.state.materials[i].exc1,
														exc2: this.state.materials[i].exc2,
														exc3: this.state.materials[i].exc3,
														exc4: this.state.materials[i].exc4,
														exc5: this.state.materials[i].exc5,
														exc6: this.state.materials[i].exc6
													}}
													category={this.state.materials[i].category}
													onChangeCheck={name => this.onChangeItemCheck(name, i)}
													itemId={this.state.materials[i].itemId}
												/>

												<div className="ds9799-ws-add-item-rm-btn">
													<button className="btn btn-sm btn-danger" onClick={() => this.removeItem(i)}>
														Remove
													</button>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						<div className="modal-footer">
							<button type="button" className="btn btn-success" onClick={this.submit} data-dismiss="modal">
								Submit
							</button>
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

export default ModalAddReceipt;

import React, { Component } from 'react';
import ExcItemOptions from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/ShopEditor/ExcItemOptions';
import BasicItemOptions from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/BagItemsEditor/BasicItemOptions';
import ItemSelector from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/BagItemsEditor/ItemSelector';
import SlotSelector from './SlotSelector';

const initialItem = {
	slot: 'Right hand',
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

class ModalAddPackage extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
		this.state = {
			file: null,
			name: '',
			category_id: this.props.category._id,
			price: 0,
			isVipRequire: false,
			items: [{ ...initialItem }]
		};

		this.onSelectItemCategory = this.onSelectItemCategory.bind(this);
		this.onSelectItemSlot = this.onSelectItemSlot.bind(this);
		this.onSelectItemId = this.onSelectItemId.bind(this);
		this.onChangeItemCheck = this.onChangeItemCheck.bind(this);
		this.onChangeItemLevel = this.onChangeItemLevel.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	onSelectItemCategory(name, i) {
		const nextState = { ...this.state };
		nextState.items = nextState.items.map((item, idx) => {
			if (idx == i) {
				item.category = name;
			}
			return item;
		});
		this.setState(nextState);
	}

	onSelectItemSlot(name, i) {
		const nextState = { ...this.state };
		nextState.items = nextState.items.map((item, idx) => {
			if (idx == i) {
				item.slot = name;
			}
			return item;
		});
		this.setState(nextState);
	}

	onSelectItemId(itemId, i) {
		const nextState = { ...this.state };
		nextState.items = nextState.items.map((item, idx) => {
			if (idx == i) {
				item.itemId = itemId;
			}
			return item;
		});
		this.setState(nextState);
	}

	onChangeItemCheck(name, i) {
		const nextState = { ...this.state };
		nextState.items = nextState.items.map((item, idx) => {
			if (idx == i) {
				item[name] = !item[name];
			}
			return item;
		});
		this.setState(nextState);
	}

	onChangeItemLevel(level, i) {
		const nextState = { ...this.state };
		nextState.items = nextState.items.map((item, idx) => {
			if (idx == i) {
				item.level = level;
			}
			return item;
		});
		this.setState(nextState);
	}

	addItem() {
		this.state.items.push({ ...initialItem });
		this.setState(this.state);
	}

	removeItem(i) {
		this.state.items.splice(i, 1);
		this.setState(this.state);
	}

	handleChange(event) {
		const { name, value } = event.target;
		const nextState = { ...this.state };
		switch (name) {
			case 'file':
				nextState.file = event.target.files[0];
				break;
			case 'isVipRequire':
				nextState.isVipRequire = !this.state.isVipRequire;
				break;
			default:
				nextState[name] = value;
				break;
		}

		this.setState(nextState);
	}

	submit() {
		this.props.onSubmit({...this.state});
		console.log(this.state);
	}

	render() {
		const { category, data, onGetData } = this.props;

		return (
			<div className="modal fade" id="addDs9799WebShopPackageModal" style={{ color: 'black' }}>
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<img className="modal-icon" src={`/app_modules/images/icons/${category.Icon}.png`} />
							<strong>{`Add a package to ${category.Name}`}</strong>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div className="modal-body">
							<div className="row no-row-margin">
								<div className="col-3 no-col-margin">
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
											<strong>Price :</strong>
										</label>
										<input
											type="number"
											className="form-control"
											name="price"
											onChange={this.handleChange}
											value={this.state.price}
										/>
									</div>
									<div className="form-check">
										<label className="form-check-label">
											<input
												className="form-check-input"
												type="checkbox"
												checked={this.state.isVipRequire == 1 || this.state.isVipRequire == true}
												name="isVipRequire"
												onChange={this.handleChange}
											/>
											<b>Is Vip Require</b>
										</label>
									</div>
									<button className="btn btn-block btn-primary" onClick={this.addItem}>
										Add Item
									</button>
								</div>

								<div className="col-9 no-col-margin">
									<div className="ds9799-ws-add-item-wrapper">
										{this.state.items.map((item, i) => (
											<div key={i} className="ds9799-ws-add-item">
												<SlotSelector onSelect={event => this.onSelectItemSlot(event.target.value, i)} />
												<ItemSelector
													data={data}
													onGetData={onGetData}
													category={this.state.items[i].category}
													onSelectCategory={event => this.onSelectItemCategory(event.target.value, i)}
													itemId={this.state.items[i].itemId}
													itemLvl={this.state.items[i].level}
													onSelectItem={event => this.onSelectItemId(event.target.value, i)}
												/>
												<BasicItemOptions
													luck={this.state.items[i].luck}
													skill={this.state.items[i].skill}
													level={this.state.items[i].level}
													option={this.state.items[i].option}
													onChangeLevel={event => this.onChangeItemLevel(event.target.value, i)}
													onChangeCheck={name => this.onChangeItemCheck(name, i)}
												/>
												<ExcItemOptions
													exc={{
														exc1: this.state.items[i].exc1,
														exc2: this.state.items[i].exc2,
														exc3: this.state.items[i].exc3,
														exc4: this.state.items[i].exc4,
														exc5: this.state.items[i].exc5,
														exc6: this.state.items[i].exc6
													}}
													category={this.state.items[i].category}
													onChangeCheck={name => this.onChangeItemCheck(name, i)}
													itemId={this.state.items[i].itemId}
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

export default ModalAddPackage;

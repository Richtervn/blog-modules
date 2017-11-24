import React, { Component } from 'react';

import ExcItemOptions from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/ShopEditor/ExcItemOptions';
import BasicItemOptions from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/BagItemsEditor/BasicItemOptions';
import ItemSelector from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/BagItemsEditor/ItemSelector';

class AddExchangeModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null,
			name: '',
			price: 0,
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
		this.handleChange = this.handleChange.bind(this);
		this.onChangeItem = this.onChangeItem.bind(this);
		this.submit = this.submit.bind(this);
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

	onChangeItem(value, name) {
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

	submit() {
		this.props.onSubmit(this.state);
	}

	render() {
		const { data, onGetData } = this.props;

		return (
			<div className="modal fade" id="addDs9799LxExchangeModal" style={{ color: 'black' }}>
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<img className="modal-icon" src={`/app_modules/images/icons/luxury.png`} />
							<strong>{`Add an exchange`}</strong>
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
								</div>
								<div className="col-9 no-col-margin">
									<div className="pd-10">
										<ItemSelector
											data={data}
											onGetData={onGetData}
											category={this.state.category}
											onSelectCategory={event => this.onChangeItem(event.target.value, 'category')}
											itemId={this.state.itemId}
											itemLvl={this.state.level}
											onSelectItem={event => this.onChangeItem(event.target.value, 'itemId')}
										/>
										<BasicItemOptions
											luck={this.state.luck}
											skill={this.state.skill}
											level={this.state.level}
											option={this.state.option}
											onChangeLevel={event => this.onChangeItem(event, 'level')}
											onChangeCheck={name => this.onChangeItem(name)}
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
											onChangeCheck={name => this.onChangeItem(name)}
											itemId={this.state.itemId}
										/>
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

export default AddExchangeModal;

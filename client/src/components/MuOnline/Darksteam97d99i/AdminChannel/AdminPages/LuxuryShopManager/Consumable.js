import React, { Component } from 'react';
import AddConsumableModal from './AddConsumableModal';
import EditConsumableModal from './EditConsumableModal';
import DeleteModal from 'components/DeleteModal';
import ConsumableCard from './ConsumableCard';

const $ = window.$;

class Consumable extends Component {
	constructor(props) {
		super(props);
		this.state = { focusConsumable: {} };
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
	}

	componentWillMount() {
		const { consumables, onGetConsumable } = this.props;
		if (!consumables) {
			onGetConsumable();
		}
	}

	handleEditClick(consumable) {
		this.setState({ focusConsumable: consumable });
		$('#editDs9799LxConsumableModal').modal('show');
	}

	handleDeleteClick(consumable) {
		this.setState({ focusConsumable: consumable });
		$('#deleteDs9799LxConsumableModal').modal('show');
	}

	render() {
		const { consumables, data, onGetData, onAddConsumable } = this.props;
		if (!consumables) return null;

		return (
			<div>
				<div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
					{consumables.map((consumable, i) => (
						<ConsumableCard
							consumable={consumable}
							key={i}
							admin
							onClickDelete={this.handleDeleteClick}
							onClickEdit={this.handleEditClick}
						/>
					))}
					<div
						className="col-3 no-col-margin"
						style={{ display: 'flex' }}
						data-toggle="modal"
						data-target="#addDs9799LxConsumableModal">
						<div className="ds9799-lx-add-consumable-btn">
							<i className="fa fa-plus-circle fa-3x" />
						</div>
					</div>
				</div>
				<AddConsumableModal data={data} onGetData={onGetData} onSubmit={onAddConsumable} />
				<DeleteModal
					id="deleteDs9799LxConsumableModal"
					onSubmit={() => this.props.onDeleteConsumable(this.state.focusConsumable.id)}
					text={`Delete ${this.state.focusConsumable.name} consumable`}
				/>
				<EditConsumableModal
					data={data}
					onGetData={onGetData}
					onSubmit={this.props.onEditConsumable}
					consumable={this.state.focusConsumable}
				/>
			</div>
		);
	}
}

export default Consumable;

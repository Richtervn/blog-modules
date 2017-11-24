import React, { Component } from 'react';
import AddReceiptModal from './AddReceiptModal';
import EditReceiptModal from './EditReceiptModal';
import DeleteModal from 'components/DeleteModal';
import ReceiptCard from './ReceiptCard';

const $ = window.$;

class Receipt extends Component {
	constructor(props) {
		super(props);
		this.state = { focusReceipt: {} };
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
	}

	componentWillMount() {
		const { receipts, onGetReceipt } = this.props;
		if (!receipts) {
			onGetReceipt();
		}
	}

	handleEditClick(receipt) {
		this.setState({ focusReceipt: receipt });
		$('#editDs9799LxReceiptModal').modal('show');
	}

	handleDeleteClick(receipt) {
		this.setState({ focusReceipt: receipt });
		$('#deleteDs9799LxReceiptModal').modal('show');
	}

	render() {
		const { receipts, data, onGetData, onAddReceipt } = this.props;

		if (!receipts) return null;
		return (
			<div>
				<div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
					{receipts.map((receipt, i) => (
						<ReceiptCard
							receipt={receipt}
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
						data-target="#addDs9799LxReceiptModal">
						<div className="ds9799-lx-add-receipt-btn">
							<i className="fa fa-plus-circle fa-3x" />
						</div>
					</div>
				</div>
				<AddReceiptModal data={data} onGetData={onGetData} onSubmit={onAddReceipt} />
				<DeleteModal
					id="deleteDs9799LxReceiptModal"
					onSubmit={() => this.props.onDeleteReceipt(this.state.focusReceipt.id)}
					text={`Delete ${this.state.focusReceipt.name} receipt`}
				/>
				<EditReceiptModal
					data={data}
					onGetData={onGetData}
					onSubmit={this.props.onEditReceipt}
					receipt={this.state.focusReceipt}
				/>
			</div>
		);
	}
}

export default Receipt;

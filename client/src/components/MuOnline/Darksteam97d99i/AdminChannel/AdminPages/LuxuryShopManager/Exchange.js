import React, { Component } from 'react';
import AddExchangeModal from './AddExchangeModal';
import EditExchangeModal from './EditExchangeModal';
import DeleteModal from 'components/DeleteModal';
import ExchangeCard from './ExchangeCard';

const $ = window.$;

class Exchange extends Component {
	constructor(props) {
		super(props);
		this.state = { focusExchange: {} };
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
	}

	componentWillMount() {
		const { exchanges, onGetExchange } = this.props;
		if (!exchanges) {
			onGetExchange();
		}
	}

	handleEditClick(exchange) {
		this.setState({ focusExchange: exchange });
		$('#editDs9799LxExchangeModal').modal('show');
	}

	handleDeleteClick(exchange) {
		this.setState({ focusExchange: exchange });
		$('#deleteDs9799LxExchangeModal').modal('show');
	}

	render() {
		const { exchanges, data, onGetData, onAddExchange } = this.props;
		if (!exchanges) return null;

		return (
			<div>
				<div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
					{exchanges.map((exchange, i) => (
						<ExchangeCard
							exchange={exchange}
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
						data-target="#addDs9799LxExchangeModal">
						<div className="ds9799-lx-add-exchange-btn">
							<i className="fa fa-plus-circle fa-3x" />
						</div>
					</div>
				</div>
				<AddExchangeModal data={data} onGetData={onGetData} onSubmit={onAddExchange} />
				<DeleteModal
					id="deleteDs9799LxExchangeModal"
					onSubmit={() => this.props.onDeleteExchange(this.state.focusExchange.id)}
					text={`Delete ${this.state.focusExchange.name} exchange`}
				/>
				<EditExchangeModal
					data={data}
					onGetData={onGetData}
					onSubmit={this.props.onEditExchange}
					exchange={this.state.focusExchange}
				/>
			</div>
		);
	}
}

export default Exchange;

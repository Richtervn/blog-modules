import React, { Component } from 'react';
import ModalAddPackage from './ModalAddPackage';
import ModalEditPackage from './ModalEditPackage';
import DeleteModal from 'components/DeleteModal';
import PackageCard from '../../../UserChannel/UserPages/WebShop/PackageCard';

const $ = window.$;

class CategoryDetail extends Component {
	constructor(props) {
		super(props);
		this.state = { focusPackage: {} };
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
	}

	handleDeleteClick(pack) {
		this.setState({ focusPackage: pack });
		$('#deleteDs9799WebShopPackageModal').modal('show');
	}

	handleEditClick(pack) {
		this.setState({ focusPackage: pack });
		$('#editDs9799WebShopPackageModal').modal('show');
	}

	render() {
		const { category, data, onGetData, onAddPackage, onGetPackage, packages } = this.props;

		if (!packages[category._id]) {
			onGetPackage(category._id);
			return null;
		}

		return (
			<div className="ds9799-ws-list-package">
				<div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
					{packages[category._id].map((pack, i) => (
						<PackageCard
							pack={pack}
							key={i}
							admin
							onClickDelete={this.handleDeleteClick}
							onClickEdit={this.handleEditClick}
						/>
					))}
					<div
						className="col-4 no-col-margin"
						style={{ display: 'flex' }}
						data-toggle="modal"
						data-target="#addDs9799WebShopPackageModal">
						<div className="ds9799-ws-add-package-btn">
							<i className="fa fa-plus-circle fa-3x" />
						</div>
					</div>
				</div>
				<ModalAddPackage category={category} data={data} onGetData={onGetData} onSubmit={onAddPackage} />
				<DeleteModal
					id="deleteDs9799WebShopPackageModal"
					onSubmit={() => this.props.onDeletePackage(this.state.focusPackage.id)}
					text={`Delete ${this.state.focusPackage.name} package`}
				/>
				<ModalEditPackage
					category={category}
					data={data}
					onGetData={onGetData}
					onSubmit={this.props.onEditPackage}
					pack={this.state.focusPackage}
				/>
			</div>
		);
	}
}

export default CategoryDetail;

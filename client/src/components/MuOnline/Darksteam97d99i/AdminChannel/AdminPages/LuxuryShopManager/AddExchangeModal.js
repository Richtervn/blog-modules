import React, { Component } from 'react';

import ExcItemOptions from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/ShopEditor/ExcItemOptions';
import BasicItemOptions from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/BagItemsEditor/BasicItemOptions';
import ItemSelector from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/BagItemsEditor/ItemSelector';
import SlotSelector from '../WebShopManager/SlotSelector';

const initialItem = {};

class AddExchangeModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null,
			name: '',
			slot: 'RightHand',
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
	}

	render() {
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
						<div className="modal-body">aaa</div>
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

// name: {
//   type: DataTypes.STRING,
//   allowNull: false
// },
// price: {
//   type: DataTypes.INTEGER,
//   allowNull: false
// },
// image_url: {
//   type: DataTypes.STRING,
//   allowNull: false
// },
// category: {
//   type: DataTypes.STRING,
//   allowNull: false
// },
// itemId: {
//   type: DataTypes.INTEGER,
//   allowNull: false
// },
// slot: {
//   type: DataTypes.STRING,
//   allowNull: false
// },
// duration: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// },
// luck: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// },
// skill: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// },
// option: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// },
// level: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// },
// exc1: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// },
// exc2: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// },
// exc3: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// },
// exc4: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// },
// exc5: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// },
// exc6: {
//   type: DataTypes.INTEGER,
//   allowNull: true
// }

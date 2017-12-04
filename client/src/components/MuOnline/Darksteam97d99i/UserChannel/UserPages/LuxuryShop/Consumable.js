import React, { Component } from 'react';
import ConsumableCard from '../../../AdminChannel/AdminPages/LuxuryShopManager/ConsumableCard';
import BuyConsumableModal from './BuyConsumableModal';

const $ = window.$;

class Consumable extends Component {
	constructor(props) {
		super(props);
		this.state = { focusConsumable: { image_url: '' } };
		this.handleClickBuy = this.handleClickBuy.bind(this);
	}

	handleClickBuy(consumable) {
		this.setState({ focusConsumable: consumable });
		$('#buyDs9799LuxuryConsumableModal').modal('show');
	}

	componentWillMount() {
		const { consumables, onGetConsumable, characters, onGetCharacters } = this.props;
		if (!consumables) onGetConsumable();
		if (!characters) onGetCharacters();
	}

	render() {
		const { consumables, user, characters, onBuyConsumable } = this.props;
		if (!consumables || !characters) return null;
		return (
			<div>
				<div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
					{consumables.map((consumable, i) => (
						<ConsumableCard key={i} consumable={consumable} onClickBuy={this.handleClickBuy} />
					))}
				</div>
				<BuyConsumableModal
					onBuyConsumable={onBuyConsumable}
					characters={characters}
					consumable={this.state.focusConsumable}
					memb___id={user.memb___id}
				/>
			</div>
		);
	}
}

export default Consumable;

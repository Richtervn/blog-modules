import React, { Component } from 'react';
import ExchangeCard from '../../../AdminChannel/AdminPages/LuxuryShopManager/ExchangeCard';
import ExchangeModal from './ExchangeModal';

const $ = window.$;

class Exchange extends Component {
	constructor(props) {
		super(props);
		this.handleClickBuy = this.handleClickBuy.bind(this);
		this.state = { focusExchange: { image_url: '' } };
	}

	componentWillMount() {
		const { exchanges, onGetExchange, user, characters, onGetCharacters } = this.props;
		if (!exchanges) onGetExchange();
		if (!characters) onGetCharacters(user.memb___id);
	}

	handleClickBuy(exchange) {
		const { onGetExchangeCount, user, exchangeCount } = this.props;
		onGetExchangeCount(user.memb___id, exchange.id);
		this.setState({ focusExchange: exchange });
		$('#buyDs9799LuxuryExchangeModal').modal('show');
	}

	render() {
		const {
			exchanges,
			onGetExchange,
			user,
			exchangeCount,
			characters,
			onTradeExchange
		} = this.props;
		if (!exchanges || !characters) {
			return null;
		}
		return (
			<div>
				<div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
					{exchanges.map((exchange, i) => (
						<ExchangeCard
							key={i}
							exchange={exchange}
							onClickBuy={exchange => this.handleClickBuy(exchange)}
						/>
					))}
				</div>
				<ExchangeModal
					userId={user.memb___id}
					characters={characters}
					exchangeCount={exchangeCount}
					exchange={this.state.focusExchange}
					onTradeExchange={onTradeExchange}
				/>
			</div>
		);
	}
}

export default Exchange;

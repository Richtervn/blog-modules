import React, { Component } from 'react';
import PackageCard from './PackageCard';
import CharacterCard from '../CharacterManager/CharacterCard';

const $ = window.$;

class PackagesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focusPackage: {},
			focusCharacter: {}
		};
		this.handleBuyClick = this.handleBuyClick.bind(this);
		this.handleBuy = this.handleBuy.bind(this);
		this.handleSelectCharacter = this.handleSelectCharacter.bind(this);
	}

	handleBuyClick(pack) {
		console.log(pack);
		this.setState({ focusPackage: pack });
		$('#buyDs9799WebShopPackageModal').modal('show');
	}

	handleBuy() {
		this.props.onBuyPackage(this.state.focusPackage.id, this.state.focusCharacter.Name);
	}

	handleSelectCharacter(character) {
		this.setState({ focusCharacter: character });
	}

	render() {
		const { category, onGetPackage, packages, onBuyPackage, characters, user, onGetCharacters } = this.props;
		if (!packages[category._id]) {
			onGetPackage(category._id);
			return null;
		}

		if (!characters) {
			onGetCharacters(user.memb___id);
			return null;
		}
		return (
			<div>
				<div className="row no-row-margin">
					{packages[category._id].map((pack, i) => (
						<PackageCard key={i} pack={pack} onClickBuy={this.handleBuyClick} />
					))}
				</div>
				<div className="modal fade" id="buyDs9799WebShopPackageModal" style={{ color: 'black' }}>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<img className="modal-icon" src={`/app_modules/images/icons/${category.Icon}.png`} />
								<strong>{`Buy ${this.state.focusPackage.name}`}</strong>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="container center-flex flex-center-both">
									<div className="alert alert-info">
										<span><i className="fa fa-info-circle fa-2x"/></span>&nbsp;&nbsp;{`Select character to take ${this.state.focusPackage.name}`}
									</div>
									<div style={{ width: '330px' }}>
										{characters.map((character, i) => (
											<CharacterCard
												key={i}
												character={character}
												isFocus={character.Name == this.state.focusCharacter.Name}
												onSelect={this.handleSelectCharacter}
											/>
										))}
									</div>
									<div className="alert alert-warning flex-center-both">
										<span><i className="fa fa-exclamation-triangle fa-2x"/></span>&nbsp;&nbsp;Clean your Inventory before buying any package!
									</div>
								</div>
								<div />
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-success" onClick={this.handleBuy} data-dismiss="modal">
									Submit
								</button>
								<button type="button" className="btn btn-danger" data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PackagesList;

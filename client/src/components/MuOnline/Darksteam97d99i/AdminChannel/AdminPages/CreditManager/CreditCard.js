import React, { Component } from 'react';

class CreditCard extends Component {
	constructor(props) {
		super(props);
		const { credit } = this.props;
		const { credits, memb___id } = credit;
		this.state = {
			value: { credits, memb___id },
			editing: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
	}

	handleChange(event) {
		const nextState = this.state;
		const { name, value } = event.target;
		nextState.value[name] = value;
		this.setState(nextState);
	}

	save() {
		this.props.onEditCredit(this.state.value);
		this.setState({ editing: false });
	}

	toggleEdit() {
		this.setState({ editing: !this.state.editing });
	}

	render() {
		const { credit } = this.props;
		const { editing } = this.state;
		return (
			<div className="col-4">
				<div className="ds9799-admin-bank-card">
					<div className="ds9799-admin-bank-card-title">
						<h5 className="text-center">
							{credit.memb___id}
							{editing && (
								<span className="pull-right">
									<button onClick={this.save}>
										<i className="fa fa-save" />
									</button>
									<button onClick={this.toggleEdit}>
										<i className="fa fa-times" />
									</button>
								</span>
							)}
							{!editing && (
								<span className="pull-right">
									<button onClick={this.toggleEdit}>
										<i className="fa fa-pencil" />
									</button>
								</span>
							)}
						</h5>
					</div>
					<div className="ds9799-admin-bank-card-content">
						<div className="form-group">
							<label>
								<b>Credits :</b>
							</label>
							<input
								type="number"
								className="form-control"
								value={this.state.value.credits}
								onChange={this.handleChange}
								name="credits"
								disabled={!editing}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CreditCard;

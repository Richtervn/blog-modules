import _ from 'underscore';
import React, { Component } from 'react';

import ModalCraftItem from './ModalCraftItem';
import ReceiptCard from '../../../AdminChannel/AdminPages/LuxuryShopManager/ReceiptCard';

const $ = window.$;

class Blacksmith extends Component {
  constructor(props) {
    super(props);
    this.state = { focusReceipt: { image_url: '', materials: [] } };
    this.handleClickCraft = this.handleClickCraft.bind(this);
  }

  componentWillMount() {
    const {
      user,
      characters,
      receipts,
      userReceipts,
      onGetCharacters,
      onGetReceipt,
      onGetUserReceipts
    } = this.props;

    if (!characters) onGetCharacters(user.memb___id);
    if (!receipts) onGetReceipt();
    if (!userReceipts) onGetUserReceipts(user.memb___id);
  }

  handleClickCraft(receipt) {
    const { onGetCountMaterials, user } = this.props;
    onGetCountMaterials(user.memb___id, receipt.id);
    this.setState({ focusReceipt: receipt });
    $('#craftDs9799BlacksmithModal').modal('show');
  }

  render() {
    const { characters, receipts, userReceipts, countMaterials, user, onCraft } = this.props;
    if (!characters || !receipts || !userReceipts) {
      return (
        <div className="ds9799-blacksmith-no-receipt">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
        </div>
      );
    }

    if (userReceipts.length == 0)
      return (
        <div className="ds9799-blacksmith-no-receipt">
          <h2 style={{ color: 'gray' }}>You don't have any receipts</h2>
        </div>
      );

    const userReceiptsIds = _.pluck(userReceipts, 'receipt_id');
    const ownedReceipt = receipts.filter(receipt => _.contains(userReceiptsIds, receipt.id));

    return (
      <div className="ds9799-blacksmith-screen">
        <div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
          {ownedReceipt.map(receipt => (
            <ReceiptCard
              key={receipt.id}
              receipt={receipt}
              onClickCraft={this.handleClickCraft}
              userMode
            />
          ))}
        </div>
        <ModalCraftItem
          receipt={this.state.focusReceipt}
          countMaterials={countMaterials}
          user={user}
          characters={characters}
          onCraft={onCraft}
        />
      </div>
    );
  }
}

export default Blacksmith;

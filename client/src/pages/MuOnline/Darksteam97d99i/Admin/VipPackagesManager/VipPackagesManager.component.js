import './VipPackagesManager.css';
import React, { Component } from 'react';

import { ContainerLoader } from 'common/Loaders';
import { PureAddCardButton } from 'components/Buttons';

import VipPackageForm from './VipPackageForm.component';

class VipPackagesManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      editing: false,
      editingIndex: null
    };
  }

  componentWillMount() {
    const { vipPackages, onGetPackages } = this.props;
    if (!vipPackages) {
      onGetPackages();
    }
  }
  render() {
    const { vipPackages, onDelete, onAdd, onEdit } = this.props;
    const { adding, editing, editingIndex } = this.state;

    if (!vipPackages) {
      return <ContainerLoader />;
    }

    return (
      <div id="ds9799-vip-packages-manager">
        {vipPackages.map((pack, i) => (
          <div className="wrapper" key={pack.id}>
            {!editing && (
              <div className="feature">
                <button className="btn" onClick={() => this.setState({ editing: true, editingIndex: i })}>
                  <i className="fa fa-edit" />
                </button>
                <button className="btn" onClick={() => onDelete(pack.id)}>
                  <i className="fa fa-times" />
                </button>
              </div>
            )}

            {editing && editingIndex === i ? (
              <VipPackageForm
                pack={pack}
                onCancel={() => this.setState({ editing: false, editingIndex: null })}
                onSubmit={formBody => onEdit(formBody)}
              />
            ) : (
              <div className="package-card">
                <div className="header">{pack.name}</div>
                <div className="content">
                  <div className="card-row">
                    <div className="label">Type :</div>
                    <div className="text">&nbsp;{pack.type}</div>
                  </div>
                  <div className="card-row">
                    <div className="label">Price :</div>
                    <div className="text">&nbsp;{pack.price} Credits</div>
                  </div>
                  <div className="card-row">
                    <div className="label">Duration :</div>
                    <div className="text">&nbsp;{pack.duration} Days</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="add-package-btn">
          {!adding ? (
            <PureAddCardButton onClick={() => this.setState({ adding: true })} />
          ) : (
            <VipPackageForm onSubmit={formBody => onAdd(formBody)} onCancel={() => this.setState({ adding: false })} />
          )}
        </div>
      </div>
    );
  }
}

export default VipPackagesManager;

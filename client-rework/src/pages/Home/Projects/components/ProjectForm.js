import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArea } from 'components/FormTools';

class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        Name: '',
        Technologies: [''],
        StartTime: '',
        EndTime: '',
        Progress: 0,
        Color: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.test();
  }

  render() {
    return [
      <ModalHeader key="pj_h" iconUrl="/images/icons/project.png" label={'Add Project'} />,
      <div key="pj_b" className="modal-body">
        .
      </div>,
      <ModalFooter key="pj_f" onClickSubmit={() => this.handleSubmit()}/>
    ];
  }
}

export default ProjectForm;

// frontend/src/components/Modal.js

import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    const users = { ...this.state.users, [name]: value };
    this.setState({ users });
  };

  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Please Input your Information </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.users.name}
                onChange={this.handleChange}
                placeholder="Enter your Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="occupation">Occupation</Label>
              <Input
                type="text"
                name="occupation"
                value={this.state.users.occupation}
                onChange={this.handleChange}
                placeholder="Please Input your Occupation"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.users)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

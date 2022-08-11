import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        name: "",
        occupation: "",
      },
      data: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/user/")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  };
  renderList = () => {
    return this.state.data.map(listItem => (
      <li
        key={listItem.id}
        className="list-group-listItem d-flex justify-content-between align-listItems-center"
      >
        <div> {listItem.name} </div>
        <span
        >
          {listItem.occupation}
        </span>
        <span>
          <button
            onClick={() => this.editItem(listItem)}
            className="mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(listItem)}
            className=""
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };
  createItem = () => {
    const listItem = { name: "", occupation: "", };
    this.setState({ users: listItem, modal: !this.state.modal });
  };
  editItem = listItem => {
    this.setState({ users: listItem, modal: !this.state.modal });
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = listItem => {
    this.toggle();
    if (listItem.id) {
      axios
        .put(`http://localhost:8000/api/user/${listItem.id}/`, listItem)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/user/", listItem)
      .then(res => this.refreshList());
  };
  handleDelete = listItem => {
    axios
      .delete(`http://localhost:8000/api/user/${listItem.id}`)
      .then(res => this.refreshList());
  };
  
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">User Information</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="m-3">
                <button onClick={this.createItem} className="btn btn-primary margin-left: auto">
                  Add your details
                </button>
              </div>
              {}
              <ul className="list-group list-group-flush">
                {this.renderList()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            users={this.state.users}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;

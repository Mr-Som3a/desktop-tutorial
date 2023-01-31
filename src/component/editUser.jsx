import React, { Component } from "react";
import Input from "./_input";

class editUser extends Component {
  state = {
    users: {},
    person: {},
    // const username = user.username;
    // const email = user.email;
    // const name = user.name;
    // const phone = user.phone;
    // const id = user.id;
    // const updperson = { ...this.state.updperson }
    // updperson.username = username;
    // updperson.email = email;
    // updperson.name = name;
    // updperson.phone = phone;
    // updperson.id = id;
    // this.setState({ updperson })
  };

  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>Edit User Information</h2>
          <form className="col g-3" id="editUser" onSubmit={(e) => this.props.onUpdate(e)}>
            {/* <Input type="hidden" name="id" label="Id" value={this.props.user._id} /> */}
            <Input type="text" name="id" label="Id" value={this.props.user._id} />
            <Input type="text" name="name" label="Name" value={this.props.user.name} />
            <Input type="text" name="age" label="Age" value={this.props.user.age} />
            <Input type="text" name="address" label="Address" value={this.props.user.address} />
            <Input type="text" name="phone" label="Phone" value={this.props.user.phone} />
            <div className="col mt-2">
              <button className="btn btn-success m-1" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default editUser;

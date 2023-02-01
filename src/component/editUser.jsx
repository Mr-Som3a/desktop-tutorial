import React, { Component } from "react";
import Input from "./_input";

class editUser extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>Edit User Information</h2>
          <form className="col g-3" id="editUser" onSubmit={(e) => this.props.onUpdate(e)}>
            {/* <Input type="hidden" name="id" label="Id" value={this.props.user._id} /> */}
            <Input type="text" name="id" label="Id" value={this.props.user.id} onchange={() => this.props.handlechange} />
            <Input type="text" name="name" label="Name" value={this.props.user.name} onchange={() => this.props.handlechange} />
            <Input type="text" name="age" label="Age" value={this.props.user.age} onchange={() => this.props.handlechange} />
            <Input type="text" name="address" label="Address" value={this.props.user.address} onchange={() => this.props.handlechange} />
            <Input type="text" name="phone" label="Phone" value={this.props.user.phone} onchange={() => this.props.handlechange} />
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

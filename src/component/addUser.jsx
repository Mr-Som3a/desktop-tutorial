import React, { Component } from "react";
import Input from "./_input";

class AddUser extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5 ">
          <h2>Add A New Person</h2>
          <form className="col g-3" id="addUser" method="POST" onSubmit={(e) => this.props.createUser(e)}>
            <Input onChange={this.props.onChange} type="text" name="name" label="Name" value={this.props.person.name} />
            <Input onChange={this.props.onChange} type="text" name="age" label="Age" value={this.props.person.age} />
            <Input onChange={this.props.onChange} type="text" name="address" label="Address" value={this.props.person.address} />
            <Input onChange={this.props.onChange} type="text" name="phone" label="Phone" value={this.props.person.phone} />
            <div className="col mt-2">
              <button onClick={() => this.props.handleUpdate} className="btn btn-primary m-1" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddUser;

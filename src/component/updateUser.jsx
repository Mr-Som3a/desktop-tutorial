import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Input from "./_input";

class UpdateUser extends Component {
  // handleChange = (e) => {
  //     const uperson = { ...this.state.uperson };
  //     uperson[e.currentTarget.name] = e.currentTarget.value;
  //     this.setState({ uperson })
  // }

  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>Update User Information</h2>
          <form className="col g-3" id="updateUser" onSubmit={(e) => this.props.onUpdate}>
            {/* {console.log(this.props.user)} */}
            {/* <Input type="hidden" name="id" label="Id" value={this.props.user._id} />
            <Input type="text" name="name" label="Name" value={this.props.user.name} />
            <Input type="text" name="age" label="Age" value={this.user.age} />
            <Input type="text" name="address" label="Address" value={this.props.user.address} />
            <Input type="text" name="phone" label="Phone" value={this.props.user.phone} /> */}
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

export default UpdateUser;
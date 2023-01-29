import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { getuser } from '../Server/mtserveces';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5 ">
          <table className="table caption-top mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map((user, i) => (
                <tr key={user._id}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className="btn btn-info btn-sm" onClick={() => this.props.onUpdate(user)}>
                      <Link to={`/updateUser?id=${user._id}`}>Update</Link>
                    </button>

                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

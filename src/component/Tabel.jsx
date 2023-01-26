import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { getuser } from '../Server/mtserveces';



class Table extends Component {

    render() { 
        return (
            <React.Fragment>
                <div className="container mt-5 ">
                <table className="table caption-top mt-5">
                        <thead>
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                {/* <th scope="col">Address</th> */}
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.onTable.map(user => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                    <td>
                                        {/* <Link to="/component/update.jsx"> */}
                                        <button
                                                className="btn btn-info btn-sm"
                                                onClick={() =>this.props.onUpdate(user)
                                                // onClick={() => getuser(user.id)
                                                +console.log(user)+console.log(user.id)+console.log(typeof(user.id))}
                                                >Update
                                            </button>
                                        {/* </Link> */}

                                </td>
                                <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={()=>this.props.onDelete(user)}
                                >
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
 
export default Table;
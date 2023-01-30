import React, { Component } from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import Update from './update';

// import { getuser } from '../Server/mtserveces';




class Table extends Component {
    
    render() { 
        return (
            <>
                <div className="container mt-5 ">
                <table className="table caption-top mt-5">
                        <thead>
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.onTable.map(user => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    
                                    <td>
                                        <Link to="/component/update.jsx">
                                        <button
                                                className="btn btn-info btn-sm"
                                                onClick={()=>this.props.onHu(user)}
                                                >Update
                                            </button>
                                        </Link>

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
                <Routes>
                <Route path="/update.jsx" element={<Update/>} />
                </Routes>
                </>
        );
    }
}
 
export default Table;
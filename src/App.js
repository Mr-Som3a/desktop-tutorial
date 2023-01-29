import React, { Component } from 'react';
import Navbar from './component/navbar';
import Home from './component/home';
import AddUser from './component/addUser';
import UpdateUser from './component/updateUser';
import axios from 'axios';
import http from "./Server/httpserver.json";
import $ from "jquery"
import { Route, Routes } from 'react-router-dom';
// import { getuser } from './Server/mtserveces';


class App extends Component {
  state = {
    users: [],
    person: {},
  }

  async componentDidMount() {
    try {
      const { data: users } = await axios.get(http.apiEndpoint)
      this.setState({ users })
    } catch {
      console.log("error fetching users")
    }
  }
  addUser = function (e) {
    e.preventDefault();
    var unindexd_array = $($("#addUser")).serializeArray();
    var user = {};
    $.map(unindexd_array, function (n, i) {
      user[n["name"]] = n["value"];
    });
    var request = {
      "url": `http://localhost:5000/api/users`,
      "method": "POST",
      "data": user,
    };
    $.ajax(request).done(function (response) {
      alert("User Added Successfully !!!");
      this.handleChange(user)
    })
    // ||=============================================||
    // ||   @HERE                                     ||
    // ||   React state management problem            ||
    // ||   console.log(user)                         ||
    // ||   const users = this.state.users.push(user) ||
    // ||   this.setState({ users });                 ||
    // ||=============================================||
  }
  getUser = function (user) {
    const { data: person } = user
    this.setState({ person })
    console.log(this.state.person)
  }
  handleDelete = async id => {
    const users = this.state.users.filter(p => p._id !== id);
    this.setState({ users });
    await axios.delete(http.apiEndpoint + '/' + id);
    // alert('User Deleted Successfuly')
  }
  handleUpdate = async user => {
    // const person = {(...this.state.person)
  }

  render() {
    return (
      <>
        <Navbar />
        <main className='container'>
          <Routes>
            <Route path='/'
              element={<Home
                users={this.state.users}
                onDelete={this.handleDelete}
                onUpdate={this.getUser}
              />} />
            <Route path='/addUser'
              element={<AddUser
                addUser={this.addUser}
              />} />
            <Route path='/updateUser'
              element={<UpdateUser
                user={this.state.person}
                onUpdate={this.handleUpdate} />} />
          </Routes>
        </main>
      </>
    );
  }
}
export default App;
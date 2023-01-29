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
  // this method is used by addUser.jsx for creating new user when form is submited
  // by sendind request to the server
  addUser = (e) => {
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
      const users = this.state.users;
      this.setState({ users });
      console.log(users)
      alert("User Added Successfully !!!");
    })

    // ||=============================================||
    // ||   @HERE                                     ||
    // ||   @ the function above is work completley   ||
    // ||   @ fine but state.users does not change    ||
    // ||   console.log(user)                         ||
    // ||=============================================||
  }
  // this method is used by Home.jsx update button to store the value of that
  // this method is used by Home.jsx update button to store the value of that
  getUser(user) {
    // ||=============================================||
    // ||   @HERE                                     ||
    // ||   @ i cant pust set person so that i can    ||
    // ||   @ use it in updateUser.jsx component      ||
    // ||   console.log(user)                         ||
    // ||=============================================||
  }

  // for deleting user when delete button is clicked |||Delete Button is in file "components/home"|||
  handleDelete = async id => {
    const users = this.state.users.filter(p => p._id !== id);
    this.setState({ users });
    await axios.delete(http.apiEndpoint + '/' + id);
    // alert('User Deleted Successfuly')
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
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
    var unindexd_array = $("#addUser").serializeArray();
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
    })


    // const person = { ...this.state.person };
    // person[user.currentTarget.name] = user.currentTarget.value;
    // this.setState({ person });
    // ||=============================================||
    // ||   @HERE                                     ||
    // ||   @ the function above is work completley   ||
    // ||   @ fine but state.users does not updated   ||
    // ||   console.log(user)                         ||
    // ||=============================================||
  }
  // this method is used by Home.jsx update button to store the value of that
  // user and pass it to this.state.person
  // note that argument of this function "user" is the object we need to view its
  // value in input filds in updateUser.jsx
  getUser(user) {
    // const person = { ...this.state.person };
    // person[user.currentTarget.name] = user.currentTarget.value;
    // this.setState({ person });
    // console.log(person)
    // ||=================================================||
    // ||   @HERE                                         ||
    // ||   @ i can't update this.state.person so that i  ||
    // ||   @ can use it in updateUser.jsx component      ||
    // ||   @ i can't even print person                   ||
    // ||   console.log(this.state.person)                ||
    // ||   console.log(user)                             ||
    // ||=================================================||
  }
  // this method is used by addUser.jsx for creating new user when form is submited
  // by sendind request to the server
  updateUser = (e) => {
    e.preventDefault();
    var unindexd_array = $("#updateUser").serializeArray();
    var user = {};
    $.map(unindexd_array, function (n, i) {
      user[n["name"]] = n["value"];
    });
    var request = {
      "url": `http://localhost:5000/api/users/${user.id}`,
      "method": "PUT",
      "data": user,
    };
    $.ajax(request).done(function (response) {
      alert("User Updated Successfully !!!");
    })


    // const users = { ...this.state.users };
    // person[user.currentTarget.name] = user.currentTarget.value;
    // this.setState({ users });
    // ||=============================================||
    // ||   @HERE                                     ||
    // ||   @ the function above is work completley   ||
    // ||   @ fine but state.users does not updated   ||
    // ||=============================================||
  }
  // this method is used by home.jsx component by Delete Button
  handleDelete = async id => {
    const users = this.state.users.filter(p => p._id !== id);
    this.setState({ users });
    await axios.delete(http.apiEndpoint + '/' + id);
    alert('User Deleted Successfuly')
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
                person={this.state.person}
                onDelete={this.handleDelete}
                onUpdate={this.getUser}
              />} />
            <Route path='/addUser'
              element={<AddUser
                addUser={this.addUser}
                users={this.state.users}
                person={this.state.person}
              />} />
            <Route path='/updateUser'
              element={<UpdateUser
                user={this.state.person}
                onUpdate={this.updateUser} />} />
          </Routes>
        </main>
      </>
    );
  }
}
export default App;
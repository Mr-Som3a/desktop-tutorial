import React, { Component } from 'react';
import Navbar from './component/navbar';
import Form from './component/form';
import Update from './component/update';
import Table from './component/Tabel';
import axios from 'axios';
import http from "./Server/httpserver.json";
import { Route, Routes } from 'react-router-dom';
// import { getuser } from './Server/mtserveces';


class App extends Component {
  state = {
    users: [],
    person: {
      username: '',
      email: '',
      name: '',
      phone: '',
      id: ''
    },
    updperson: {
      username: '',
      email: '',
      name: '',
      phone: '',
      id: ''
    },
  }

  async componentDidMount() {
    const { data: users } = await axios.get(http.apiEndpoint)
    this.setState({ users })
  }

  handleChange = (e) => {
    const person = { ...this.state.person };
    person[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ person })
  }
  handleChangeU = (e) => {
    const updperson = { ...this.state.updperson };
    updperson[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ updperson })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.person)
    const { data: user } = await axios.post(http.apiEndpoint, this.state.person);
    const users = [user, ...this.state.users];
    this.setState({ users });
    console.log(this.state.users)
    alert('User Successfuly add')
  };
  handleDelete = async user => {
    const users = this.state.users.filter(p => p.id !== user.id);
    this.setState({ users });
    await axios.delete(http.apiEndpoint + '/' + user.id);
  }

  // e.preventDefault();
  // console.log(this.state.person)
  // console.log(getuser())
  // const { data: user } = await axios.patch(getuser(),this.state.person);
  // console.log(user)


  handleuser = (user) => {
    // HHHHHHHHHHHHHHHHHHHHHHHH
    const username = user.username;
    const email = user.email;
    const name = user.name;
    const phone = user.phone;
    const id = user.id;
    const updperson = { ...this.state.updperson }
    updperson.username = username;
    updperson.email = email;
    updperson.name = name;
    updperson.phone = phone;
    updperson.id = id;
    this.setState({ updperson })

  }
  handleUpdate = async (user) => {

    console.log(this.state.updperson)
    const res = await axios.put(http.apiEndpoint + '/' + this.state.updperson.id, this.state.updperson);//******* */
    console.log(res)
    // await axios.post(http.apiEndpoint + '/' +res)
    this.setState({users:res})
    alert('Update success check Table')
  }
  





  render() {
    return (
      <>
        <Navbar />
        <main className='container'>
          <Routes>
            <Route path='/' element={<h1>Welcome To Our Webapp</h1>} />
            <Route path='/component/form.jsx'
              element={<Form
                onSm={this.handleSubmit}
                onHch={this.handleChange} />} />
            <Route path='/component/Tabel.jsx'
              element={<Table
                onTable={this.state.users}
                onDelete={this.handleDelete}
                onHu={this.handleuser}
              />} />
            <Route path='/component/update.jsx'
              element={<Update
                onUpdate={this.handleUpdate}
                onval={this.state.updperson}
                onHch={this.handleChangeU} />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navbar from './component/navbar';
import Form from './component/form';
import Update from './component/update';
import Table  from './component/Tabel';
import axios from 'axios';
import http from "./Server/httpserver.json";
import { Route, Routes } from 'react-router-dom';
// import { getuser } from './Server/mtserveces';


class App extends Component {
  state = {
    users: [],
    person: { username: '', email: '' },
    upinfo:{username:'',email:''}
  }
  

  async componentDidMount() {
    const {data:users} = await axios.get(http.apiEndpoint)
    this.setState({users})
  }
  handleChange = (e) => { 
    const person = { ...this.state.person };
    person[e.currentTarget.name] = e.currentTarget.value;
    this.setState({person})
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.person)
    const { data: user } = await axios.post(http.apiEndpoint, this.state.person);
    const users = [user, ...this.state.users];
    this.setState({ users });
    alert('User Successfuly add')
  };
  handleDelete = async user => {
    const users = this.state.users.filter(p => p.id !== user.id);
    this.setState({ users });
    await axios.delete(http.apiEndpoint + '/' + user.id);
  }


  handleSubmt = async (e) => {
    e.preventDefault();
    const { data: user } = await axios.post(http.apiEndpoint, this.state.person);
    const users = [user, ...this.state.users];
    this.setState({ users });
    alert('User Successfuly add')
  };




  handleUpdate = async (user) => {
    // e.preventDefault();
    // console.log(this.state.person)
    // console.log(getuser())
    // const { data: user } = await axios.patch(getuser(),this.state.person);
    // console.log(user)
    user.username = 'success Update username'
    user.email ="success Update email"
    await axios.put(http.apiEndpoint + '/' + user.id, user);
    // console.log(indexOf(user))

    const users = [...this.state.users];
    // console.log(this.state.users)
    // console.log(users)
    const index = users.indexOf(user);
    users[index] = { ...user };
    

    this.setState({ users })
    // alert('User Successfuly updated')
    console.log(this.state.users)
  }
  
//   handleState = (e) => {
//     const upinfo={...this.state.upinfo}
//     upinfo[e.currentTarget.name] = obj.currentTarget.value
//     this.setState(upinfo)
// }
  
  
  
  
  render() { 
    return (
      <>
        <Navbar/>
        <main className='container'>
          <Routes>
            <Route path='/' element={<h1>Welcome To Our Webapp</h1>} />
            <Route path='/component/form.jsx'
              element={<Form
                onSm={this.handleSubmit}
                onval={this.state.person}
                onHch={this.handleChange} />} />
            <Route path='/component/Tabel.jsx'
              element={<Table
                onTable={this.state.users}
                onDelete={this.handleDelete}
                onUpdate={this.handleUpdate}
                />} />
            <Route path='/component/update.jsx'
              element={<Update 
                onval={this.state.person}
              onUpdate={this.handleUpdate}
              onHch={this.handleChange}/>} />
          </Routes>
        </main>
      </>
    );
  }
}
// onState={this.handleState}
export default App;
/* {<Form onval={this.setState.person} 
onHch={this.handleChange}
onSm={this.handleSubmit} />
<Table 
onUp={this.handleUpdate} 
onDel={this.handleDelete} /> }*/
// 
// onTable={this.state.users}  

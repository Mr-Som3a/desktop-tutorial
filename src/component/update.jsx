import React, { Component } from 'react';
import Input from './input';


class Update extends Component {
    
    
 
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
                    <form className="col g-3" onSubmit={this.props.onUpdate}>
                        <Input type="text"  name="username"  label="Name" onChange={this.props.onHch} />
                        <Input type="text" name="email"  label="Email" onChange={this.props.onHch} />
                        {/* <Input type="text" name="address" label="Address" onChange={this.handleChange}/> */}
                        {/* <Input type="text" name="phone" label="Phone" onChange={this.handleChange} /> */}
                        <div className="col mt-2">
                            <button className="btn btn-success m-1">Update</button>
                        </div>
                    </form>
                </div>
            </>
        );
    };
}

export default Update;

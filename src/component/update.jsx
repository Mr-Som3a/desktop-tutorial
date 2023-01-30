import React, { Component } from 'react';
import Input from './input';


class Update extends Component {
        
        render() {
            return (
                <>
                <div className="container mt-5 ">
                    <h2>Update User Information</h2>
                    {/* <form className="col g-3" onSubmit={this.props.onUpdate}> */}
                        <Input type="text" value={this.props.onval.username} name="username"  label="User Name" onChange={this.props.onHch} />
                        <Input type="text" value={this.props.onval.email} name="email"  label="Email" onChange={this.props.onHch} />
                        <Input type="text" value={this.props.onval.name} name="name" label="Name" onChange={this.props.onHch}/>
                        <Input type="text" value={this.props.onval.phone} name="phone" label="Phone" onChange={this.props.onHch} />
                        <div className="col mt-2">
                            <button className="btn btn-success m-1" onClick={this.props.onUpdate}>Update</button>
                        </div>
                    {/* </form> */}
                </div>
            </>
        );
    };
}

export default Update;

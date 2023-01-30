import React, { Component } from 'react';
import Input from './input';


class Form extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="container mt-5 ">
                    <h2>Enter A New Person</h2>
                    <form className="col g-3" onSubmit={this.props.onSm}>
                        <Input type="text"  name="username"  label="User Name" onChange={this.props.onHch} />
                        <Input type="text"  name="email"  label="Email" onChange={this.props.onHch} />
                        <Input type="text" name="name" label="Name" onChange={this.props.onHch}/>
                        <Input type="text" name="phone" label="Phone" onChange={this.props.onHch} />
                        <div className="col mt-2">
                            <button className="btn btn-primary m-1">Submit</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    };
}

export default Form;

import React from 'react';


const Input = ({type ,name , label, onChange}) => {
    return ( 
        <div className="col-md-4">
            <label htmlFor={name} className="form-label">{label}</label>
                <input
                    name={name}
                    onChange={onChange}
                    
                    className="form-control"
                    type={type}
                    id={name} />
        </div>
    );
}
export default Input;
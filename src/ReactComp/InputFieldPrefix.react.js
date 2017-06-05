import React from 'react';

const InputFieldPrefix=(props)=>{
    return (
        <div>
            <div className="row margin">
                <div className="input-field inputHeight col s12">
                    <i className="material-icons prefix left">perm_identity</i>
                    <input id={props.id} type={props.type} value={props.value}
                           onChange={props.onChange} onBlur={props.onBlur}/>
                    <label htmlFor="username" className="center-align">Username</label>
                    <div className="row margin">
                        <p className="errorMessage">{props.errorMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputFieldPrefix;
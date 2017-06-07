import React from "react"


const SubscribeForm = ()=> {
        return (
            <form className="subscribe_form">
                <input type="email"
                       className="subscribe_email"
                       id="subscribe_email"
                       placeholder="YOUR EMAIL ADDRESS"
                       required/>
                <button className="subscribe_button waves-effect waves-light">
                    <i className="material-icons medium">input</i>
                </button>
            </form>
        )
    }
    ;

export default SubscribeForm;
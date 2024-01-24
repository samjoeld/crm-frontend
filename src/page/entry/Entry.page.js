import React, { useState } from 'react';
import "./Entry.style.css";
import { LoginForm } from "../../components/login/login.comp";
import { ResetPassword } from '../../components/login/passwordReset';
 

export const Entry = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [frmLoad, setFrmLoad] = useState('login');
    

    const handleOnChange = e =>{
        const{name, value} = e.target

        switch(name){
            case 'email':
            setEmail(value)
            break;
            case 'password':
            setPassword(value)
            break;
            default:
                break;
        }
    };
const handleOnSubmit = e =>{
    e.preventDefault();

    if(!email || !password){
       return alert("Fill up all the form!");
    }
    console.log(email, password);
};
const formSwitcher = frmType =>{
    setFrmLoad(frmType);
};

const handleOnResetSubmit = e =>{
    e.preventDefault();

    if(!email){
       return alert("Please fill the mail");
    }
    console.log(email);
};
    return(
        <div className="entry-page bg-info">
        <div className="jumbotron"> 
        {frmLoad === 'login' &&  
        <LoginForm 
        handleOnChange ={handleOnChange} 
        handleOnSubmit = {handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password}
         /> }
        {frmLoad === 'reset'&&
         <ResetPassword
        handleOnChange ={handleOnChange} 
        handleOnResetSubmit = {handleOnResetSubmit}
        formSwitcher={formSwitcher}
        email={email}
         /> }
        </div>  
        </div>
    );
}
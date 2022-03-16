import React, { SyntheticEvent, useState } from "react";
import "./login.css";
import {BsFillPersonFill, BsFillLockFill} from "react-icons/bs";
import {HiUserGroup} from "react-icons/hi";
import logo from "./Logo.jpg";
import { Redirect } from "react-router-dom";
import { UserManagement } from "../../Administrator/userManagement/userManagement";
import { variables } from "../Variables";

const Login = () => {
  //render() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false);
    const[user, setUser] = useState(null);
    
    const submit = async (e) => {
        e.preventDefault();
      
        await fetch(variables.API_URL + 'users/authenticate',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
          // credentials: 'include',
          body: JSON.stringify({
            email,
            password
          })
          
        })
        .then((response) => response.json())
        .then((data) => {setUser(data)})
        setRedirect(true);
    }
    if(redirect && user === "Administrator"){
      //setRedirect(false);
     // setUser(null);
      return <Redirect to="/userManagement"  component={UserManagement}/>
    }
    else
    {

    }
    return (
      <div className="bkgImage">
        {/* <label className="navbar navbar-expand-lg navbar-dark bg-dark loginNav">
          <span className="navbar-brand">
            <img className=" logLogin" src={logo} alt="No More Bugs" style={{float: "left"}} />
          </span>
          <hr className="dotted" />
        </label> */}
        <div className="containerLogin">
          <form className="login-form" onSubmit={submit}>
            <br />
            <i>
              <HiUserGroup
                size={40}
                style={{
                  position: "absolute",
                  top: 100,
                  left: -25,
                  marginTop: 60,
                }}
              />
            </i>
            <br />
            <br />
            <br />
            <label className="label accessAccount">
              Login to access
              <br /> your account
            </label>
            <br />
            <br />
            <i>
              <BsFillPersonFill size={30} />
            </i>
            <input
              className="input-fieldEmail"
              type="text"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              required
            />

            <br />
            <i>
              <BsFillLockFill size={30} />
            </i>
            <input
              className="input-fieldPassword"
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
            />
            <br />
            <input className="checkbox" type="checkbox" />
            <span className="checkbox"></span>
            <label className="label lblBox" htmlFor="checkbox">
              Remember Me
            </label>
            <br />
            <button
              type="submit"
              className="btn btnLI "
              id="login-form-submit"
             
            >Login</button>
            <br />
          </form>
        </div>
      </div>
    );
  }

// Login.defaultProps = {
//   email: "",
//   Password: "",
// };
export default Login;

import UserAPI from "../apis/UserAPI"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // clearing session storage
    useEffect(()=>{
        localStorage.clear();
    },[]);

    const handleLogin = async (event) =>{
        event.preventDefault();
        if(validate()){
            // call user api implementation here
            try{
                const userCredentials = { username, password };
                await UserAPI.authenticateUser(userCredentials) //create login function with userapi that returns user

                //navigating to homepage
                navigate('/home')
            } catch(error){
                alert(error);
            }
        }
    }

    const validate = () => {
        let result = true;
        if(username === '' || username === null){
            result = false;
            alert("Please enter a username");
        }
        if(password === '' || password === null){
            result = false;
            alert("Please enter a password");
        }
        return result;
    }

    return (
        <div className="formCard">
          <form onSubmit={handleLogin}>
            
            <h2>Login</h2>
            <label htmlFor="loginUsername">Username</label><br />
            <input type="text" id="loginUsername" name="uname" value={username} onChange={
                e => setUsername(e.target.value)}/><br />
            <label htmlFor="loginPassword">Password</label><br />
            <input type="password" id="loginPassword" name="pw" value={password} onChange={
                e => setPassword(e.target.value)}/>
                <br /><br />
            <input className="submit_button" type="submit" value="Login"/>
            <span> | </span>
            <Link to={'/registration'}>New User</Link>
        </form>
        </div>
      ) 
}

export default Login;
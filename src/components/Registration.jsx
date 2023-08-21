import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserAPI from "../apis/UserAPI";

const Registration = () => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value(s) in';
        if (username === null || username === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' FirstName';
        }
        if (first_name === null || first_name === '') {
            isproceed = false;
            errormessage += ' LastName';
        }
        if (last_name === null || last_name === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            alert(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
            }else{
                isproceed = false;
                alert('Please enter a valid email format');
            }
        }
        return isproceed;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(IsValidate()){
            try{
                let userObject = {
                    first_name,
                    last_name,
                    username,
                    address,
                    email,
                    password
                };
                UserAPI.createUser(userObject);

                // navigating back to login page
                navigate('/login');
            } catch(error){
                alert(error);
            }
        }
    }

    return(
        <div className="formCard">
            <form onSubmit={handleSubmit}>
          
                <h2>Register</h2>
                <label htmlFor="username">Username</label><br />
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" id="username" className="uname" /><br />
                <label htmlFor="hashedPassword">Password</label><br />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="hashedPassword" className="pw"/><br /><br />
                <label htmlFor="firstName">First Name</label><br />
                <input value={first_name} onChange={e => setFirstName(e.target.value)} type="text" id="firstName" className="fname" /><br />
                <label htmlFor="lastName">Last Name</label><br />
                <input value={last_name} onChange={e => setLastName(e.target.value)} type="text" id="lastName" className="lname" /><br />
                <label htmlFor="address">Address</label><br />
                <input value={address} onChange={e => setAddress(e.target.value)} type="text" id="address" className="addr" /><br />
                <label htmlFor="email">Email</label><br />
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" className="emailName" /><br />
                <input className="submit_button" type="submit" value="Register"/>
                <span> | </span>
                <Link to={'/login'}>Close</Link>
            </form>
        </div>
    )
}

export default Registration
//import userapi
import { useNavigate } from "react-router-dom";

const Registration = ({setUser}) => {
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        const first_name = document.getElementById("firstName").value;
        const last_name = document.getElementById("lastName").value;
        const username = document.getElementById("username").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const hashed_password = document.getElementById("hashedPassword").value;

        if(username === "" || hashed_password === ""){
            return;
        }

        let userObject = {
            first_name,
            last_name,
            username,
            address,
            email,
            hashed_password
        }

        //userAPI.postUser(userObject)

    }

    return(
        <div class="formCard">
            <form onSubmit={handleRegister}>
          
                <h2>Register</h2>
                <label htmlFor="username">Username</label><br />
                <input type="text" id="username" name="uname" /><br />
                <label htmlFor="hashedPassword">Password</label><br />
                <input type="password" id="hashedPassword" name="pw"/><br /><br />
                <label htmlFor="firstName">First Name</label><br />
                <input type="text" id="firstName" name="fname" /><br />
                <label htmlFor="lastName">Last Name</label><br />
                <input type="text" id="lastName" name="lname" /><br />
                <label htmlFor="address">Address</label><br />
                <input type="text" id="address" name="addr" /><br />
                <label htmlFor="email">Email</label><br />
                <input type="text" id="email" name="emailName" /><br />
                <input class="submit_button"  type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Registration
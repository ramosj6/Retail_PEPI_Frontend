//import userapi
import {useNavigate} from "react-router-dom"

const Login = ({setUser}) => {

    const navigate = useNavigate()

    const handleLogin = async (event) =>{
        event.preventDefault()
        const username = document.getElementsById("loginUsername").value;
        const password = document.getElementsById("loginPassword").value;
         
        const user = null //create login function with userapi that returns user

        if(user){
            setUser(user)
            navigate("/products")
        }else{
            alert("Wrong Credentials")
        }
    }

    return (
        <div class="formCard">
          <form onSubmit={handleLogin}>
            
            <h2>Login</h2>
            <label htmlFor="loginUsername">Username</label><br />
            <input type="text" id="loginUsername" name="uname" /><br />
            <label htmlFor="loginPassword">Password</label><br />
            <input type="password" id="loginPassword" name="pw"/><br /><br />
            <input class="submit_button" type="submit" value="Login"/>
        </form>
        </div>
      ) 
}

export default Login
const URI = "http://127.0.0.1:5000/user"
const URI_AUTHENTICATE = "http://127.0.0.1:5000"
const URI_ALL = "http://127.0.0.1:5000/user/all/get"


const UserAPI = {
    //authenticating the user
    authenticateUser: async (userCredentials) => {
        await fetch(URI_AUTHENTICATE + "/login",  {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userCredentials)
        })
        .then(result => {
            if (!result.ok) {
                throw new Error('Login failed, please try again!');
            }
            return result.json();
        })
        .then(data => {
            console.log("Authentication successful");
            console.log(data);

            alert(data.message)
            // Store the token in local storage
            localStorage.setItem('authToken', data.access_token);
            localStorage.setItem('username', data.username);

            return data;
        })
        .catch(error => {
            console.error(error.message);
            throw error.message;
        });
    },

    // getting user by token => looking at the /profile path
    getUserWithToken: (setUserList) => {
        const authToken = localStorage.getItem('authToken');

        if (!authToken) {
            console.error("Token not available");
            return;
        }
        fetch(URI + '/profile', {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        })
        .then(result => {
            if (!result.ok) {
                throw new Error('Failed to fetch user profile');
            }
            return result.json();
        })
        .then(data => {
            console.log("User profile:", data);
            setUserList(data);
        })
        .catch(error => {
            console.error("Error fetching user profile:", error);
        });
    },

    // getting all users
    getAllUsers: (setUsersList) => {
        fetch( URI_ALL )
            .then((result) => { // go here if the response is successful (200 response)
                console.log("RESULT")
                console.log(result)

                return result.json()
            }) 
            .then((data) => {
                console.log("DATA: ")
                console.log(data)

                setUsersList(data)
            }).catch((e) => {
                console.log(e);
            })
    },

    // getting user by id
    getUserById: (setUserList, id) => {
        const authToken = localStorage.getItem('authToken');

        if (!authToken) {
            console.error("Token not available");
            return;
        }
        
        fetch(URI + `/${id}`, {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        })
        .then((result) => {
            console.log("RESULT");
            console.log(result);

            return result.json();
        })
        .then((data) => {
            console.log("DATA: ");
            console.log(data);

            setUserList(data);
        })
        .catch((error) => {console.log(error)} );
    },

    // Creating the user
    createUser: (userToCreate) => {
        fetch( URI , {
            method: "POST", // type of request
            headers: { "Content-Type": "application/json" }, // header of request
            body: JSON.stringify(userToCreate) // body of request, convert object to json string
        } )
            .then( result => result.json() )
            .then( data => {
                // dont wanna show all the information
                alert(`${data.message}` + 
                    `\nId: ${data.inserted_id}`
                    );
            } )
            .catch( (error) => { 
                console.error(error.message);
                throw error.mesage;
            } );
    }
}

export default UserAPI
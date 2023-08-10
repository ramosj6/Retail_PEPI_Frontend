const URI = "http://localhost:27017/user"
const URI_ALL = "http://localhost:27017/user/all/get"


const UserAPI = {
    //authenticating the user
    authenticateUser: (userCredentials) => {
        fetch(URI + "/login",  {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userCredentials)
        })
        .then(result => {
            if (!result.ok) {
                throw new Error('Authentication failed');
            }
            return result.json();
        })
        .then(data => {
            console.log("Authentication successful");
            console.log(data);

            // Store the token in local storage
            localStorage.setItem('authToken', data.token);

            return data;
        })
        .catch(error => {
            console.error("Authentication error:", error);
            throw error;
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
    getUserByUsername: (setUserList, username) => {
        fetch(URI + `/${username}`, {
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
                console.log("User CREATED")
                console.log(data)

                // dont wanna show all the information
                alert("User created!" + 
                    `\nID: ${data._id}` +
                    `\nUsername: ${data.username}` +
                    `\nFirstName: ${data.first_name}` +
                    `\nLastName: ${data.last_name}` +
                    `\nEmail: ${data.email}` + 
                    `\nAddress: ${data.address}`
                    )

            } )
            .catch( (error) => { console.log(error) } );
    }
}

export default UserAPI
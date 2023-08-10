const URI = "http://localhost:27017/review"


const ReviewAPI = {
    // Get Reviews by product id
    getReviewsByProduct: (setReviewsList, productId) => {
        fetch( URI + "/product/" + `${productId}` )
            .then((result) => { // go here if the response is successful (200 response)
                console.log("Result");
                console.log(result);

                return result.json();
            })
            .then((data) => {
                console.log("Data: ");
                console.log(data);

                setReviewsList(data);
            })
            .catch((error) => {console.error(error)}); // if fetch fails, go here(400/500 responses)
    },

    // GET Review By ID
    getReviewById: (setReviewList, reviewId) => {
        fetch(URI + `/${reviewId}` )
            .then((result) => {
                console.log("RESULT");
                console.log(result);

                return result.json();
            })
            .then((data) => {
                console.log("Data: ");
                console.log(data)
                
                setReviewList(data)
            })
            .catch((error) => {console.error(error)});
    },

    // Create
    createReview: (reviewToCreate) => {
        fetch(URI, {
            method: "POST", //type of request
            headers: { "Content-Type": "application/json"}, // header of the request
            body: JSON.stringify(reviewToCreate) // body of request, convert object to json string
        })
            .then( result => result.json())
            .then( data => {
                console.log("Review Created");
                console.log(data);

                alert("Your review was created!" +
                    `\nID: ${data._id}` +
                    `\nProduct ID: ${data.product_id}` +
                    `\nRating: ${data.rating}` +
                    `\nComment: ${data.comment}` +
                    `\nCreated: ${data.created_at}`)
            })
            .catch((error) => {console.error(error);});
    },

    // Update
    updateReview: (updatedReviewData, reviewId) => {
        fetch(URI + `/${reviewId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedReviewData)
        })
        .then((result) => result.json())
        .then((data) => {
            console.log("Updated Review: ");
            console.log(data);
        })
        .catch((error) => {console.error(error)});
    },

    // Delete
    deleteReview: (reviewId) => {
        fetch(URI + `/${reviewId}`, {
            method: "DELETE"
        })
        .then((result) => result.json())
        .then((data) => {
            console.log("Deleted Review:");
            console.log(data);
        })
        .catch((error) => { console.error(error) });
    }
}

export default ReviewAPI;
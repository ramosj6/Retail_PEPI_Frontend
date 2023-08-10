const URI = "http://localhost:27017/product"

const ProductAPI = {
    //get product by id
    getProductById: (productId) => {
        fetch(URI + `/${productId}`)
            .then((result) => {
                console.log("RESULT");
                console.log(result);

                return result.json();
            })
            .then((data) => {
                console.log("Data: ");
                console.log(data)
                
            })
            .catch((error) => {console.error(error)});
    },

    //Create Product
    createProduct: (productToCreate) => {
        fetch(URI + "/post", {
            method: "POST", //type of request
            headers: { "Content-Type": "application/json"}, // header of the request
            body: JSON.stringify(productToCreate) // body of request, convert object to json string
        })
            .then( result => result.json())
            .then( data => {
                console.log("Product Created");
                console.log(data);

                alert("Your product was created!" +
                    `\nID: ${data._id}` +
                    `\nProduct Name: ${data.product_name}` +
                    `\nDescription: ${data.product_desc}` +
                    `\nPrice: ${data.product_price}` +
                    `\nBrand: ${data.product_brand}`) 
                    
        })
        .catch((error) => {console.error(error);});
    },

    //Update
    updateProduct: (updatedProductData, productId) => {
        fetch(URI + `/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProductData)
        })
        .then((result) => result.json())
        .then((data) => {
            console.log("Updated Product: ");
            console.log(data);
        })
        .catch((error) => {console.error(error)});
    },

        // Delete
        deleteProduct: (productId) => {
            fetch(URI + `/${productId}`, {
                method: "DELETE"
            })
            .then((result) => result.json())
            .then((data) => {
                console.log("Deleted Product:");
                console.log(data);
            })
            .catch((error) => { console.error(error) });
        }
}
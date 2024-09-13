export const APIBook = "https://66e29307494df9a478e2320a.mockapi.io/Books";




// To Add a Data into API

export async function addBookDetails(newbook){
    const res = await fetch(`${APIBook}`,{
        method: "POST",
        body: JSON.stringify(newbook),
        headers: {
            "Content-type" : "application/json",
        }
    })
    const data = await res.json();
    return data;
}

// To Delete a Data in the API

export async function deleteBookDetails(id){
   const res = await fetch(`${APIBook}/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        }
    })

    const data = await res.json();
    return data;
}

// To Update a Data & send it to API

export async function editedbookDetails(id,editbook){
        const res = await fetch(`${APIBook}/${id}`,{
            method: "PUT",
            body: JSON.stringify(editbook),
            headers : {
                "Content-type": "application/json",
            },
        })
        const data = await res.json();
        return data;
}
export const APIBook = "https://66e29307494df9a478e2320a.mockapi.io/Books";




// To Add Data into API

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


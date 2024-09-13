export const APIAuthor = "https://66e29307494df9a478e2320a.mockapi.io/Author";


export async function addnewAuthor(newAuthor){
        const res = await fetch(`${APIAuthor}`,{
        method : "POST",
        body: JSON.stringify(newAuthor),
        headers: {
            "Content-type": "application/json",
        }
        })
        const data = await res.json();
        return data;
}

export async function deleteAuthors(id){
   const res = await fetch(`${APIAuthor}/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type":"application/json",
        }
    })
    const data = await res.json()
    return data;
}

export async function editedAuthorDetails(id,editAuthor){
        const res = await fetch(`${APIAuthor}/${id}`,{
            method: "PUT",
            body: JSON.stringify(editAuthor),
            headers : {
                "Content-type" : "application/json",
            }
        })
        const data = await res.json();
        return data;
}
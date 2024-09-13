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
import { useEffect } from "react";
import TopBar from "./TopBar";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import { APIAuthor } from "../API/APIAuthor";
import { deleteAuthors } from "../API/APIAuthor";


function AuthorDashBoard({author,setAuthor}){
    const navigate = useNavigate();
    
  // fetching data from API
    useEffect(()=>{
        fetch(APIAuthor)
        .then((res)=> res.json())
        .then((data)=>setAuthor(data))
        .catch((err)=> console.log("Sorry there has been Error Occurred",err))
    },[author])

  

    function handleEdit(id){
      navigate(`/editAuthor/${id}`)
    }

    // To delete it in API
    function handleDelete(id){
      deleteAuthors(id).then((data)=>{
        if(data){
          const remainingAuthors = author.filter((val)=> val.id != id)
          setAuthor([...remainingAuthors]);
        }else{
          console.log("Sorry Error has Occurred")
        }
      })
      
    }

    return(
        <div>
            <TopBar/>
            <div className='m-5'>
            <Button variant="primary" type="submit" onClick={()=>navigate("/addauthor")}>Add Author</Button>
            </div>

        <div className='m-5'>
      <Table striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th>Sl.No</th>
          <th>Athor's Name</th>
          <th>Biography</th>
          <th>Date of Birth</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
         author?.map((val,idx)=>(
            <tr key={idx}>
            <td>{idx+1}</td>  
          <td>{val.authors_name}</td>
          <td>{val.authorBio}</td>
          <td>{val.dateof_birth}</td>
          <td className='d-flex justify-content-between align-items-center'>
          <Button variant="info" onClick={()=> handleEdit(val.id)}>Edit</Button>
          <Button variant="danger" onClick={()=>handleDelete(val.id)}>Delete</Button>
          </td>
        </tr>
         ))   
        }
        
       
      </tbody>
    </Table>

            </div>
        </div>

       
    )
}

export default AuthorDashBoard;

// const [values, setValues] = React.useState({});

// const handleChange = event => {
//   setValues(prevValues => ({
//     ...prevValues,
//     // we use the name to tell Formik which key of `values` to update
//     [event.target.name]: event.target.value
//   });
// }
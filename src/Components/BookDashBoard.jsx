import Button from 'react-bootstrap/Button';
import TopBar from "./TopBar";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { APIBook } from '../API/APIBook';


function BookDashBoard({books,setBooks}){
  const navigate = useNavigate();

  // fetching data from API
  useEffect(()=>{
        fetch(APIBook)
        .then((res)=>res.json())
        .then((data)=>setBooks(data))
        .catch((err)=>console.log("Sorry a error has been Occured",err))
  },[books])
    return(
        <div>
            <TopBar/>
            <div className='m-5'>
            <Button variant="primary" type="submit" onClick={()=>navigate("/addbooks")}>Add Book</Button>
            </div>
                
      <div className='m-5  text-center'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN Number</th>
          <th>Publication Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
         books?.map((val,idx)=>(
            <tr key={idx}>
            <td>{idx+1}</td>  
          <td>{val.title_name}</td>
          <td>{val.author_name}</td>
          <td>{val.isbn_number}</td>
          <td>{val.publication_date}</td>
          <td className='d-flex justify-content-evenly'>
          <Button variant="info" onClick={()=>navigate("/editbook")}>Edit</Button>
          <Button variant="danger">Delte</Button>
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

export default BookDashBoard;
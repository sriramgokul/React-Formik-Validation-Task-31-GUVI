import { useFormik } from "formik";
import Form from 'react-bootstrap/Form';
import TopBar from "./TopBar";
import { BookSchema } from "../Schema/Schema";
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editedbookDetails } from "../API/APIBook";


function EditBook({books,setBooks}){

  const navigate = useNavigate();  
    const {id} = useParams();
    let  initialValues = {
      title_name: "",
      author_name: "",
      isbn_number: "",
      publication_date: "",
        };
        const selectedbook = books.filter((val)=> val.id == id);
        const selectedbookindex = books.findIndex((val)=>val.id == id);

     const {values,handleChange,handleSubmit,handleBlur} = useFormik({
     initialValues : selectedbook ? {...selectedbook[0]} :{...initialValues},
        validationSchema: BookSchema,
        onSubmit : (editedBook)=>{
          updateEditedBook(id,editedBook);
        }

        // onSubmit: (data)=>{
        //   const updatedBook = JSON.parse(JSON.stringify(books))
        //   updatedBook[selectedbookindex] = data;
        //   setBooks([...updatedBook])
        //   navigate("/");
        // }
    })

    const updateEditedBook = (id,editedBook) =>{
      editedbookDetails(editedBook).then((data)=>{
        if(data){
          setBooks([...books,editedBook]);
          navigate("/")
        }
      })
    }

    
    return (
        <>
        <TopBar/>
        <div className='m-5'>
        <Form className='w-50' onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label><b>Title</b></Form.Label>
        <Form.Control type="text" placeholder="Enter the title of the book" value={values.title_name} name="title_name" onChange={handleChange} onBlur={handleBlur} />
      </Form.Group>
      

      <Form.Group className="mb-3">
        <Form.Label><b>Author</b></Form.Label>
        <Form.Control type="text" placeholder="Enter the Author Name" value={values.author_name} name="author_name" onChange={handleChange} onBlur={handleBlur} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label><b>ISBN Number</b></Form.Label>
        <Form.Control type="number" placeholder="Enter the ISBN Number" value={values.isbn_number} name="isbn_number" onChange={handleChange} onBlur={handleBlur} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label><b>Publication date</b></Form.Label>
        <Form.Control type="date" id='date' placeholder="Enter Published Date" value={values.publication_date} name="publication_date" onChange={handleChange} onBlur={handleBlur}  />
      </Form.Group>
      
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
        </div>
        </>
    )
}

export default EditBook;
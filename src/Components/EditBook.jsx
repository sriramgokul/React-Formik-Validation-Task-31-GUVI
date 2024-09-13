import { useFormik } from "formik";
import Form from 'react-bootstrap/Form';
import TopBar from "./TopBar";
import { BookSchema } from "../Schema/Schema";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function EditBook({books,setBooks}){
    
    const {id} = useParams();
    useEffect(()=>{
      const selectedbook = books.filter((val)=> val.id == id);
      console.log(selectedbook);
    })
    const {values,handleChange,handleSubmit,handleBlur} = useFormik({
      initialValues: {
      title_name: "",
      author_name: "",
      isbn_number: "",
      publication_date: "",
        },
        validationSchema: BookSchema,
    })
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
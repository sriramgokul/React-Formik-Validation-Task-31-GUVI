import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TopBar from './TopBar';
import { useFormik } from 'formik';
import { AuthorSchema } from '../Schema/Schema';
import { useParams } from 'react-router-dom';

function EditAuthor({author,setAuthor}){
    const {id} = useParams();
    const {values,handleChange,handleSubmit,handleBlur,errors} = useFormik({
        initialValues: {
            authors_name: "",
            authorBio:"",
            dateof_birth: "",
          },
          validationSchema: AuthorSchema,
    })
    return (
        <>
        <TopBar/>
          <div className='m-5'>
          <Form className='w-50' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label><b>Author's Name:</b></Form.Label>
          <Form.Control type="text" placeholder="Enter the Author Name" name="authors_name" value={values.authors_name} onChange={handleChange} onBlur={handleBlur} />
          {errors.authors_name? <div className='text-danger'>{errors.authors_name}</div>: ""}
        </Form.Group>
  
        <Form.Group className="mb-3" >
          <Form.Label><b>Biography</b></Form.Label>
          <Form.Control type="text" placeholder="Write a short Biography about the Author" name="authorBio" value={values.authorBio} onChange={handleChange} onBlur={handleBlur}  />
          {errors.authorBio? <div className='text-danger'>{errors.authorBio}</div> : ""}
        </Form.Group>
  
        <Form.Group className="mb-3" >
          <Form.Label><b>Date of Birth</b></Form.Label>
          <Form.Control type="date" id='date' placeholder="Enter Published Date" name="dateof_birth" value={values.dateof_birth} onChange={handleChange} onBlur={handleBlur} />
          {errors.dateof_birth ? <div className='text-danger'>{errors.dateof_birth}</div>:" "}
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
          </div>
          </>
    )
}

export default EditAuthor;
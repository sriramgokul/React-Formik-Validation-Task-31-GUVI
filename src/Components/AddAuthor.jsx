import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TopBar from './TopBar';
import { useFormik } from 'formik';
import { AuthorSchema } from '../Schema/Schema';
import { addnewAuthor } from '../API/APIAuthor';
import { useNavigate } from 'react-router-dom';

function AddAuthor({author,setAuthor}){
  const navigate = useNavigate();
  const {values,handleChange,handleSubmit,handleBlur} = useFormik({
    initialValues: {
      authors_name: "",
      authorBio:"",
      dateof_birth: "",
    },
    validationSchema: AuthorSchema,
    onSubmit: (newAuthor) =>{
      console.log(newAuthor);
      addnewAuthorDetails(newAuthor)
    }
  })

  const addnewAuthorDetails = (newAuthor) =>{
    addnewAuthor(newAuthor).then((data)=>{
      if(data){
        setAuthor([...author,data])
        navigate("/authorDashboard")
      }
    })
  }
    return (
      <>
      <TopBar/>
        <div className='m-5'>
        <Form className='w-50' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label><b>Author's Name:</b></Form.Label>
        <Form.Control type="text" placeholder="Enter the Author Name" name="authors_name" value={values.authors_name} onChange={handleChange} onBlur={handleBlur} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label><b>Biography.</b></Form.Label>
        <Form.Control type="text" placeholder="Write a short Biography about the Author" name="authorBio" value={values.authorBio} onChange={handleChange} onBlur={handleBlur}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label><b>Date of Birth</b></Form.Label>
        <Form.Control type="date" id='date' placeholder="Enter Published Date" name="dateof_birth" value={values.dateof_birth} onChange={handleChange} onBlur={handleBlur} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
        </>
    )
}

export default AddAuthor;
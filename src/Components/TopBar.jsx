import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate();
  return (
    <>
     
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
           <Nav.Link onClick={()=>navigate("/")} className='text-dark'><b>Library Management System</b></Nav.Link> 
          <Nav className="ms-auto">
            <Nav.Link onClick={()=>navigate("/")} className='text-dark'><b>Books</b></Nav.Link>
            <Nav.Link onClick={()=>navigate("/authorDashboard")} className='text-dark'><b>Authors</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default TopBar;
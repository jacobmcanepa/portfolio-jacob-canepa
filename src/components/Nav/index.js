import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <div className='container_row'>
      <Navbar expand="xl" className='navbar layer1' variant='dark' sticky='top'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home" className='mx-3'>Home</Nav.Link>
            <Nav.Link href="#about" className='mx-3'>About</Nav.Link>
            <Nav.Link href="#work" className='mx-3'>Work</Nav.Link>
            <Nav.Link href="#contact" className='mx-3'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <h1 className='layer2 text-center header pt-2'>Jacob Canepa</h1>
    </div>
  );
}

export default Navigation;
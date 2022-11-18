import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <section className='contact-section'>
      <Container fluid='lg' className='contact-container'>
        <Row>
          <Col className='contact-question'>Like what you see?</Col>
        </Row>
        <Row>
          <Col className='contact-me'><a href='mailto:jacobmcanepa@gmail.com'>Contact Me</a></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
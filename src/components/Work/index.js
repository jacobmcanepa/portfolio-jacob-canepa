import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Work() {
  return (
    <section className='work-section'>
      <Container fluid='xxxl' className="work-container">
        <Row className='work-row'>
          <Col sm={12} lg={4}>
            <div className='work-title'>
              <h2>Projects</h2>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className='main-project'>
              Main Project
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={4}>
            <div className='sub-project'>
              Project 1
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className='sub-project'>
              Project 2
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className='sub-project'>
              Project 3
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Work;
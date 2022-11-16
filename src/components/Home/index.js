import headshot from '../../assets/images/jacob-headshot.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <Container className='text-center'>
      <Row>
        <Col md={12} lg={4}>
          <img src={headshot} alt='jacob-headshot' className='headshot img-fluid'/>
        </Col>
        <Col md={12} lg={4}>
          <h2 className='mt-3 profession'>Full - stack Developer</h2>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
            condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
            mi, ac feugiat metus aliquam maximus.
          </p>
        </Col>
        <Col className='social-icon mt-4' md={12} lg={4}>
          <a href='https://www.linkedin.com/in/jacob-canepa-568740198/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href='https://github.com/jacobmcanepa' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
import headshot from '../../assets/images/jacob-headshot.jpg';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <Container>
      <div className='text-center'>
        <img src={headshot} alt='jacob-headshot' className='headshot img-fluid'/>
        <h2 className='mt-4 profession'>Full-stack Developer</h2>
        <p className='mx-2 pt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus.
        </p>
      </div>
      <div className='text-center social-icon'>
        <a href='https://www.linkedin.com/in/jacob-canepa-568740198/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href='https://github.com/jacobmcanepa' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </Container>
  );
};

export default Home;
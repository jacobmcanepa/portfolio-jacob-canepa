import headshot from '../../assets/images/jacob-headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <section className='hero'>
      <img src={headshot} alt='jacob-headshot' className='headshot img-fluid'/>
      <div className='bio-container'>
        <h2 className='profession'>Full - Stack Developer</h2>
        <p className='description mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus.
        </p>
      </div>
      <div className='social-icon'>
        <a href='https://www.linkedin.com/in/jacob-canepa-568740198/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href='https://github.com/jacobmcanepa' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </section>
  );
};

export default Home;
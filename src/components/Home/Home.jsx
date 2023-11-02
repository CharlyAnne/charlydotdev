import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../assets/home-main.svg';
// import Particles from '../Particle';
import Type from './Type';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particles /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏼
                </span>
              </h1>
              <h1 className="heading-name">
                I AM
                <strong className="main-name"> CHARLIAN IMOISILI</strong>
              </h1>
              <div
                style={{ paddingLeft: 50, paddingTop: 20, textAlign: 'left' }}
              >
                <Type />
              </div>
              <div
                style={{ paddingTop: 20, marginLeft: 50, textAlign: 'left' }}
              >
                <p>
                  See more{' '}
                  <a href="https://charlydotdev.vercel.app/about" title="about me" className="purple social-links">
                    About Me &rarr;
                  </a>
                </p>
                <ul
                  className="home-about-social-links"
                  style={{ paddingTop: 10 }}
                >
                  <li className="social-icons">
                    <a
                      href="https://github.com/CharlyAnne"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/Imoisiliii"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/charlian-imoisili/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/charlian_xo"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

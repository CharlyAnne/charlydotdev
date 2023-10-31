/* eslint-disable react/no-unescaped-entities */
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi again! My name is{' '}
            <span className="purple">Charlian Imoisili</span>. I'm a front-end
            engineer based in <span className="purple"> Lagos, Nigeria.</span>
            <br />
            <br />I have solid foundation in classics like
            <i>
              <b className="purple"> Javascript and Python and </b>
            </i>{' '}
            and I've developed a few front-end and back-end projects through my
            learning phase.
            <br />
            <br />I am passionate about building new
            <i>
              <b className="purple"> Web Technologies and Products </b> in areas
              related to{' '}
              <b className="purple">Finance and Artificial Intelligence.</b>
            </i>
            <br />
          </p>
          <br />
          Apart from coding, there are other activities that interest me!
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Logical Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading african stories.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Action and Psychological thiller genres.
            </li>
          </ul>
          <p style={{ color: 'rgb(155 126 172)' }}>
            "These things will be hard to do, but you can do hard things!"{' '}
          </p>
          <footer className="blockquote-footer">Glennon Doyle Melton</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;

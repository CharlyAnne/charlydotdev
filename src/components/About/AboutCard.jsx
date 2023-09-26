import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi, My name is<span className="purple">Charlian Imoisili</span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br /> I'm a passionate enthusiast currently learning Software
            Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Logical Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Chewing gums
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Action Movies and Conspiracy Theories.
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

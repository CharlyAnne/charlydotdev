import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import DnD from '../../assets/Projects/dnd.png';
import movies from '../../assets/Projects/movies.png';
import barbie from '../../assets/Projects/barbie.png';
import helpbot from '../../assets/Projects/helpbot.png';
import calc from '../../assets/Projects/calc.png';
import love from '../../assets/Projects/love.png';

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Charlynk TV"
              description="A movie app"
              ghLink="https://github.com/CharlyAnne/movie_db"
              demoLink="https://charlynktv.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DnD}
              isBlog={false}
              title="DragNDrop Gallery"
              description="A photo gallery with a drag-and-drop feature"
              ghLink="https://github.com/CharlyAnne/dragndrop"
              demoLink="https://dragdropx.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barbie}
              isBlog={false}
              title="Barbie Clock"
              description="A working digital clock displaying current WAT"
              ghLink="https://github.com/CharlyAnne/BarbieDigitalClock"
              demoLink="https://charlyanne.github.io/BarbieDigitalClock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helpbot}
              isBlog={false}
              title="HelpBot"
              description="An openai custommer service chatbot. Still in progress"
              ghLink="https://github.com/CharlyAnne/helpbot"
              demoLink="https://github.com/CharlyAnne/helpbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={love}
              isBlog={false}
              title="Valentine Gif"
              description="A likkle something for love"
              ghLink="https://github.com/CharlyAnne/I_LOVE_YOU"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Simple Calculator"
              description="A simple calculatr with Neumorphism"
              ghLink="https://github.com/CharlyAnne/SIMPLE_CALCULATOR"
              demoLink="https://charly-calc.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;

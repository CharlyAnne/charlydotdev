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
          Here are a few projects I have worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Charlynk TV"
              description="Explore the world of cinema with a dynamic movies 
              app powered by React on the front end and .NET on the back end. 
              This app fetches movie data from the TMDB API, offering users a rich
               interface to discover, search, and explore their favorite films."
              ghLink="https://github.com/CharlyAnne/movie_db"
              demoLink="https://charlynktv.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DnD}
              isBlog={false}
              title="DragNDrop Gallery"
              description="An interactive photo gallery built with React and enhanced 
              with the dndkit library for drag-and-drop functionality. 
              Tailwind CSS and Framer Motion were used to create a modern and 
              smooth user experience, allowing users to organize and interact with their 
              photos effortlessly."
              ghLink="https://github.com/CharlyAnne/dragndrop"
              demoLink="https://dragdropx.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barbie}
              isBlog={false}
              title="Barbie Clock"
              description="A fully functional digital clock created using HTML, CSS, 
              and JavaScript. This project displays the current time and updates in 
              real-time, offering a sleek and minimalist design."
              ghLink="https://github.com/CharlyAnne/BarbieDigitalClock"
              demoLink="https://charlyanne.github.io/BarbieDigitalClock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helpbot}
              isBlog={false}
              title="HelpBot"
              description="A versatile customer service chatbot 
              integrated into a web application, constructed using the
               MERN (MongoDB, Express, React, Node.js) stack. The chatbot
                includes a widget for seamless interaction with users,
                 providing intelligent responses and improving customer 
                 support.
                 This is an ongoing project, yet to be deployed."
              ghLink="https://github.com/CharlyAnne/helpbot"
              demoLink="https://github.com/CharlyAnne/helpbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={love}
              isBlog={false}
              title="Valentine Gif"
              description="A likkle something to express your love with a charming 
              Valentine GIF created entirely with HTML and CSS. This 
              project showcases creative animation techniques to produce 
              a delightful and romantic visual experience."
              ghLink="https://github.com/CharlyAnne/I_LOVE_YOU"
              demoLink="https://charly-val.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Simple Calculator"
              description="A simple yet stylish calculator featuring 
              neumorphism-inspired design elements. Built using HTML, 
              CSS, and JavaScript, this calculator not only performs basic 
              arithmetic operations but also offers a visually appealing user interface."
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

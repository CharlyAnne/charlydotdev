import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

function Github() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="CharlyAnne"
        blockSize={12}
        blockMargin={7}
        color="#ff3373"
        fontSize={12}
      />
      <style></style>
    </Row>
  );
}

export default Github;

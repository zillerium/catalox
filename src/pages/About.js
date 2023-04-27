import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player'

const About = () => {



  return (
    <div >

<Container className="mt-5">
      <div >
	  <h1>About Us</h1>
	  <Row>
	  <Col>
                 <p>Catalox is a catalog of parts</p>
          </Col>
	  </Row>

      </div>
	  </Container>
    </div>
  );
}

export default About;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CataloxSlider from './CataloxSlider.js';
const Welcome = () => {

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Welcome to Catalox</h1>
          <p className="lead text-center">
            Catalog of Products on the Blockchain
          </p>
	  <CataloxSlider />
          <div className="d-flex justify-content-center mt-5">
            <ul className="list-group">
              <li className="list-group-item">Add Product</li>
              <li className="list-group-item">List Product</li>
              <li className="list-group-item">
                Click on the link to see the page
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;

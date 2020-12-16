import React from "react";
import "./graphic.css";
import { Row, Col } from "react-materialize";

const Graphic = () => {
  return (
    <div>
      <Row>
        <Col l={8}></Col>
        <Col l={3}>
          <h1 className="graphic-header">Gráficas de la Data</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Graphic;

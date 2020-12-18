import React from "react";
import "./graphic.css";
import { Row, Col } from "react-materialize";
import BudgetImage from "../../images/budget.png";
import RuntimeImage from "../../images/runtime.png";
import YearImage from "../../images/year.png";
import RatingsImage from "../../images/ratings.png";

const Graphic = () => {
  return (
    <div>
      <Row>
        <Col className="plot-containers" l={8}>
          <h2 className="plot-header">Budget</h2>
          <img className="data-plot" src={BudgetImage} width="50%"/>
          <h2 className="plot-header">Runtime</h2>
          <img className="data-plot" src={RuntimeImage} width="50%"/>
          <h2 className="plot-header">Year</h2>
          <img className="data-plot" src={YearImage} width="50%" />
          <h2 className="plot-header">Ratings</h2>
          <img className="data-plot" src={RatingsImage} width="50%" />
        </Col>
        <Col l={3}>
          <h1 className="graphic-header">Gráficas de la Data</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Graphic;

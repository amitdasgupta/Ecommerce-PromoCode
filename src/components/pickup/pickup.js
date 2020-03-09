import React from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

var style = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "red",
    fontWeight: 800
  }
};

export default class Pickup extends React.Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          Picking up your order in the store helps cut the costs,and we pass the
          savings on you.
        </p>
      </Tooltip>
    );
    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip} trigger="focus">
            <div style={style.pickupSavings}>pickup savings</div>
          </OverlayTrigger>
        </Col>
        <Col md={6} style={style.totalSavings}>{`$${this.props.price}`}</Col>
      </Row>
    );
  }
}

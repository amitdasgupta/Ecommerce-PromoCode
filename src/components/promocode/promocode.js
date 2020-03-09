import React, { Component } from "react";
import {
  Button,
  Collapse,
  Well,
  Form,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

export default class PromoCodeDiscount extends Component {
  // we no longer need a constructor as the state will be managed in redux

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: ""
    };
  }

  handleChange = e => {
    // the setState below will be sent to redux
    this.setState({ value: e.target.value });
    // this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code {this.state.open === false ? `+` : `-`}
        </Button>

        {this.state.open && (
          <div>
            <Well>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Promo Code</ControlLabel>{" "}
                      <FormControl
                        type="text"
                        placeholder="Enter promo code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                    </FormGroup>{" "}
                    <Button
                      block
                      bsStyle="success"
                      className="btn-round"
                      // type="submit"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Well>
          </div>
        )}
      </div>
    );
  }
}

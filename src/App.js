import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import Subtotal from "./components/subtotal/subtotal";
import Pickup from "./components/pickup/pickup";
import Taxes from "./components/taxes/taxes";
import Estimated from "./components/estimated/estimated";
import Item from "./components/ItemDetail/itemdetail";
import Promo from "./components/promocode/promocode";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 200,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disableformbutton: false
    };
  }
  componentDidMount() {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSavings) * 0.14
      },
      () => {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  }
  handleDisabled = e => {
    this.setState({
      disableformbutton: this.state.disableformbutton
    });
  };
  render() {
    const {
      total,
      pickupSavings,
      taxes,
      estimatedTotal,
      disableformbutton
    } = this.state;
    return (
      <div className="container">
        <Grid className="purchase-card">
          <h1>Hello world</h1>
          <Subtotal price={total.toFixed(2)} />
          <Pickup price={pickupSavings.toFixed(2)} />
          <Taxes taxes={taxes.toFixed(2)} />
          <hr />
          <Estimated price={estimatedTotal.toFixed(2)} />
          <Item
            price={estimatedTotal.toFixed(2)}
            isDisabled={disableformbutton}
            handleChange={this.handleDisabled}
          />
          <hr />
          <Promo />
        </Grid>
      </div>
    );
  }
}

export default App;

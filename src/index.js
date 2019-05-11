import React, { Component } from "react";
import ReactDOM from "react-dom";
import Son from "./components/Son";
import User from "./components/User";

import "./styles.css";
import "bulma/css/bulma.css";

class Dad extends Component {
  state = {
    show: true,
    counter: 0,
    jesus: {
      name: "Jesus",
      email: "jesus@gmail.com",
      image: "https://avatars0.githubusercontent.com/u/46055113?s=460&v=4"
    },
    rafiki: {
      name: "Rafiki",
      email: "torresc.rafael@gmail.com",
      image:
        "data:image/jpeg;base64,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"
    }
  };

  plus = () => {
    let { counter } = this.state;
    counter++;
    this.setState({ counter });
  };

  minus = () => {
    let { counter } = this.state;
    if (counter <= 0) return;
    counter--;
    this.setState({ counter });
  };

  toggle = () => {
    let { show } = this.state;
    show = !show;
    this.setState({ show });
  };

  render() {
    const { counter, jesus, rafiki, show } = this.state;
    return (
      <div className="App">
        <Son plus={this.plus} minus={this.minus} counter={counter} />
        <button onClick={this.toggle}>{show ? "Ocultar" : "Mostrar"}</button>
        {show ? (
          <div className="users-container">
            <User {...jesus} />
            <User {...rafiki} />
          </div>
        ) : null}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Dad />, rootElement);

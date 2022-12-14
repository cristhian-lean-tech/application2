import React, { Component } from "react";

// const input = new Input (ok)
// heredando de Component (ok)
// ciclos de vida (ok)
// poco legible (ok)

export default class Input extends Component {
  // Propio this
  constructor() {
    super();
    this.state = {
      text: "None",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // siempre que creamos una fuencion estamos creando otro THIS/Context
    // () => {} -> heredar el contexto
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input id="custom-input" onChange={this.handleChange} />
        <p>Text: {this.state.text}</p>
      </div>
    );
  }
}

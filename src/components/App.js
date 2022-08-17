//--- IMPORT
import React, { Component } from "react";

export default class App extends Component {
  //--- STATES
  constructor(props) {
    super(props);

    this.state = {
      QuantidadedeItens: 1,
      nomeNovoIten: "",
      itens: [],
    };
  }

  //--- FUNCTIONS
  renderItens() {
    let currentStates = this.state.itens;

      return currentStates.map((index) => {
        return (
          <tr key={index.id}>
            <td>{index.id}</td>
            <td>{index.nomeTarefa}</td>
            <td>{index.status}</td>
            <td>
              <button
                onClick={() => {
                  this.updateStatus(index.id);
                }}
              >
                {" "}
                Complete!{" "}
              </button>
            </td>
          </tr>
        );
      });
    
  }

  changeName(e) {
    let event = e.target.value;
    this.setState({ nomeNovoIten: event });
  }

  addnewIten() {
    if (this.state.nomeNovoIten === "") {
      alert("insira uma tarefa");
      return false;
    }

    let currentitens = this.state.itens;
    let lastitenID = parseInt(currentitens.length);
    let lastitencode = lastitenID + 1;

    let newIten = {
      id: lastitencode,
      nomeTarefa: this.state.nomeNovoIten,
      status: "false",
    };

    currentitens.push(newIten);

    this.setState({
      quantidadedeItens: this.state.QuantidadedeItens + 1,
      nomeNovoIten: "",
      itens: currentitens,
    });
  }

  updateStatus(elementID) {
    let current_itens = this.state.itens;

    for (let line in current_itens) {
      if (current_itens[line].id === elementID) {
        current_itens[line].status === "true"
          ? (current_itens[line].status = "false")
          : (current_itens[line].status = "true");

        this.setState({ itens: current_itens });
      }
    }
  }

  //--- RENDER
  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.nomeNovoIten}
            onChange={(e) => {
              this.changeName(e);
            }}
          ></input>
          <button
            onClick={() => {
              this.addnewIten();
            }}
          >
            ADD
          </button>
        </div>
        <table>
          {/* Table Head */}
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Tarefa</th>
              <th>Satus</th>
              <td></td>
            </tr>
          </thead>

          {/* Table Boddy */}
          <tbody>{this.renderItens()}</tbody>
        </table>
      </div>
    );
  }
}

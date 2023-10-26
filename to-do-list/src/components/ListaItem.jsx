import React, { useState } from "react";
import Button from "./components/Button";

class ListaItem extends Component {
  state = {
    tarefa: "",
    novaTarefa: "",
  };

  handleEditar = () => {
    this.setState({
      novaTarefa: this.state.tarefa,
    });
  };

  handleExcluir = () => {
    this.props.removerTarefa(this.state.tarefa);
  };

  handleAdicionar = () => {
    this.props.salvarTarefa(this.state.novaTarefa);
  };

  render() {
    const { tarefa } = this.state;

    return (
      <div>
        <input
          type="text"
          value={tarefa}
          onChange={e => this.setState({ tarefa: e.target.value })}
        />
        <button onClick={this.handleEditar}>Editar</button>
        <button onClick={this.handleExcluir}>Excluir</button>
        <button onClick={this.handleAdicionar}>Adicionar</button>
      </div>
    );
  }
}

export default ListaItem;

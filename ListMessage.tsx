import React, { Component } from 'react';

interface MensagemPayload {
  nome: string;
  mensagem: string;
}

interface State {
  mensagens: MensagemPayload[];
}

export class ListMessage extends Component<{}, State> {
  state: State = {
    mensagens: [],
  };
  renderMensagens = () => {
    return this.state.mensagens.map((mensagem) => <Mensagem {...mensagem} />);
  };

  render() {
    return <ul>{this.renderMensagens()}</ul>;
  }
}

const Mensagem = ({ mensagem, nome }: MensagemPayload) => {
  return (
    <li>
      <p>
        {mensagem} -
        <small>
          <i> {nome}</i>
        </small>
      </p>
    </li>
  );
};

import React, { ChangeEvent, Component } from 'react';

import { appSocket } from './appSocket';

interface State {
  mensagem: String;
}

export class EnterText extends Component<{}, State> {
  state: State = {
    mensagem: '',
  };

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(`Novo texto: ${e.currentTarget.value}`);
    this.setState({
      mensagem: e.currentTarget.value,
    });
  };

  handleClick = () => {
    console.log('Botão funciona!');

    appSocket.emit('nova-mensagem', {
      nome: 'Felipe',
      mensagem: this.state.mensagem,
    });

    this.setState({
      mensagem: '',
    });
  };

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} />
        <div>
          <button onClick={this.handleClick}>Enviar</button>
        </div>
      </div>
    );
  }
}

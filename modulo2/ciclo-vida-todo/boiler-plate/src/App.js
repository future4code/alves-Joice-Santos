import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'primeira tarefa',
          completa: false
        },
        {
          id: Date.now(),
          texto: 'segunda tarefa',
          completa: true
        }
      ],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
    this.getData()
  };
  getData = () => {
    
  }
  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({adicionaTarefa: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.adicionaTarefa,
      completa: false
    }

    const novaListaTarefa = [... this.state.tarefas, novaTarefa]

    this.setState({tarefas: novaListaTarefa})
  }

  selectTarefa = (tarefaId) => {
    const listaTarefa = this.state.tarefas.map((tarefa) => {
      if(tarefaId === tarefa.id) {
        const alteraTarefa = {
          ...Tarefa,
          completa: !Tarefa.completa
        }
        return alteraTarefa
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: listaTarefa})
  }

  onChangeFilter = (event) => {
    this.setState((event.target.value))
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>

          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

import Paragrafo from '../Paragrafo'
import Titulo from '../Title'

import { Card, LinkBotao } from './styles'

const Tarefa = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com Vue JS</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Tarefa

import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Title'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Jéssica Pires</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Jéssica Pires
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Estudante de software
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar

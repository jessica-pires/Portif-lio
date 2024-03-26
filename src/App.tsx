import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import Sidebar from './containers/SideBar'
import Sobre from './containers/Sobre'
import EstiloGlobal from './styles'
import { Container } from './styles'
import temaLight from './theme/light'
import temaDark from './theme/dark'

function App() {
  const [estaTemaDark, setestaTemaDark] = useState(false)

  function trocaTema() {
    setestaTemaDark(!estaTemaDark)
  }

  return (
    <ThemeProvider theme={estaTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}
export default App

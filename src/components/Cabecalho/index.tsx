import styled from 'styled-components'

const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <Header>
    <h1>EBAC · Jobs</h1>
  </Header>
)

export default Cabecalho

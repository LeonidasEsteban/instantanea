import styled from 'styled-components'

const WrapperStyled = styled.div`
  max-inline-size: calc(967px + 2rem);
  padding-inline: 1rem;
  box-sizing: border-box;
  margin: 0 auto;
`

function Wrapper({ children }) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}

export default Wrapper

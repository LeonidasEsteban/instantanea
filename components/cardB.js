import styled from 'styled-components'

const CardStyled = styled.div`
  border: 1px solid rgba(255,255,255,.2);
  border-radius: .125rem;

  img {
    vertical-align: middle;
    inline-size: 100%;
    height: 100%;
    object-fit: cover;
  }


`

function Card(props) {
  return (
    <CardStyled>
      <img src={props.images.original.url} alt="" />
    </CardStyled>
  )
}

export default Card

import styled from 'styled-components'

const CardStyled = styled.div`
  border: 1px solid rgba(255,255,255,.2);
  border-radius: .125rem;
  img {
    vertical-align: middle;
  }
  .content {
    img {
      inline-size: 100%;
    }
  }
  header {
    padding: 1rem;
    display: flex;
    align-items:center;
    gap: 1rem;
    img {
      border-radius: 50%;
    }
  }
`

function Card(props) {
  return (
    <CardStyled>
      {
        props?.user?.avatar_url ? (

          <header>

            <img width={32} height={32} src={props?.user?.avatar_url} alt="" />
            <p>

              {props?.user?.display_name}
            </p>

          </header>
        ) : null
      }
      <div className="content">

        <img src={props.images.original.url} alt="" />
      </div>
    </CardStyled>
  )
}

export default Card

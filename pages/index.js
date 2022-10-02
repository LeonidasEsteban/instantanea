import Card from "../components/card"
import styled from 'styled-components'
import Header from "../components/header"
import Wrapper from "../components/wrapper"


const HomeStyled = styled.main`
  .card-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

`

function Home(props) {
  return (
    <HomeStyled >
      <Header />
      <Wrapper >
        <div className="card-list">
          {
            props?.data?.data?.map((item) => {
              return (
                <Card {...item} key={item.images.original.hash} />
              )
            })
          }
        </div>
      </Wrapper>
    </HomeStyled>
  )
}


export async function getServerSideProps(context) {
  const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=KYB1I1GJQZ5mPOVFXS9AAHevFNeXbFuK&limit=25&rating=g')
  const data = await response.json()

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}

export default Home
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from "../components/header"
import Wrapper from '../components/wrapper'
import CardB from '../components/cardB'

const UserStyled = styled.div`
  .grid {
    display: grid;
    /* grid-template-columns: repeat(3, 293px); */
    grid-template-columns: repeat(auto-fill, minmax(293px, 1fr));
    /* grid-template-rows: ; */
    grid-auto-rows: 293px;

    /* grid-template-rows: 1fr 1fr; */
    gap: 44px;
  }
`

function User(props) {
  const router = useRouter()
  useEffect(() => {
    console.log(router.query.user)
  }, [])
  return (
    <UserStyled>
      <Header />
      <Wrapper>
        <div className="grid">
          {
            props?.data?.data?.map((item) => {
              return (
                <CardB {...item} key={item.images.original.hash} />
              )
            })
          }
        </div>
      </Wrapper>
    </UserStyled>
  )
}


export async function getServerSideProps(context) {

  const query = context.query.user
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=KYB1I1GJQZ5mPOVFXS9AAHevFNeXbFuK&q=${query}&limit=25&offset=0&rating=g&lang=en`)
  const data = await response.json()

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}


export default User

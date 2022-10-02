import styled from 'styled-components'
import Wrapper from './wrapper'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const HeaderStyled = styled.div`
  background: white;
  padding-block: .5rem;
  margin-block-end: 44px;
  .content {
    display: flex;
    justify-content: space-between;
  }
  input {
    /* border: 1px solid red; */
    height: 100%;
    border: none;
    border-radius: 4px;
    padding-inline: 1rem;
    outline: 0;
  }
`

function Header() {
  const router = useRouter()
  function handleSummit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const query = formData.get('query')
    router.push(`/${query.replaceAll(' ', '-')}`)
  }
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link href="/">
            <Image style={{ cursor: 'pointer' }} src="/instagram.png" width="91" height="26" />
          </Link>
          <form action="" onSubmit={handleSummit}>
            <input type="search" name="query" placeholder="Buscar" />
          </form>
          <div></div>
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header

import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Clients from '../components/Clients'
import styled from 'styled-components'
function Page1() {
  return (
    <PageWrap>
       <Navbar />
       <Main />
      <Clients />
    </PageWrap>
  );
}

export default Page1;


const PageWrap =styled.main`
  background-image: url("${process.env.PUBLIC_URL}/assets/background.png");
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
`
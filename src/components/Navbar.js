import styled from 'styled-components'

export default function Navbar() {
    return (
      <NavbarWrap>
         <h1>STvDY</h1>
         <ul>
             <li>Browser</li>
             <li>Bootcamps</li>
             <li>How it works</li>
             <li>Testemonial</li>
         </ul>
         <button>About us</button>
      </NavbarWrap>
    );
  }

  const NavbarWrap = styled.nav`
  color:#fff;
  display: flex;
  justify-content: space-around;
  align-items:center;
  max-width:65%;
  margin:0 auto;
  background:transparent;
  h1{
    font-size:2.2rem;
    cursor: pointer;
  }
  img{
    display:static;
    width: .6em;
    
  }
  ul{
      display: flex;
      list-style: none;
      margin-right:6.5em;
      li{
        font-family: 'Poppins', sans-serif;
        font-weight:400;
        font-size:0.9rem;
        margin-right: 1.2em;
        cursor: pointer;
      }
      @media(max-width:950px){
        flex-wrap:wrap;
      }
  }
  button{
    font-family: 'Poppins', sans-serif;
    font-weight:600;
    color:#fff;
    background:linear-gradient(to left , #7C1C80 , #F75C5A);
    padding: 0.8em 3.5em ;
    border:none;
    border-radius:10px;
    cursor: pointer;
  }
  
  
  
  `
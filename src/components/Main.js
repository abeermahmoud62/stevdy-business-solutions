
import styled from 'styled-components'




function Main() {
    return(
          <MainWrap>
            <div  className='main-text'>
                <h4>Advanced Platform</h4>
                <h1>Take your team<br/>to the next level</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <button>About us</button>
            </div>
          
           
             <img src={process.env.PUBLIC_URL + "assets/NoPath.png"} alt="hi" />
          
          
          </MainWrap>


    )
    
}
export default Main


const MainWrap = styled.section`
color:#fff;
display: flex;
justify-content: space-around;
align-items: center;
max-width: 70%;
margin: 0 auto;
.main-text{
    min-width: 30%;
    margin-left: 12em;
    margin-right: 2em;
}
img{
    width:70%;
}
button{
    font-family: 'Poppins', sans-serif;
    font-weight:600;
    color: #F75C5A;
    background:#fff;
    padding: 0.8em 3.5em ;
    border:none;
    border-radius:10px;
    cursor: pointer;
    margin-top: 1.5em;
  }
  h4{
      font-weight: 400;
      margin-bottom: 0.5em;
  }
  h1{
      margin-top: 0;
      margin-bottom: 0;
  }

`

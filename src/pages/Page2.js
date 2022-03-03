import styled from 'styled-components'
import data from "../CardsData"
import {FaLongArrowAltRight} from 'react-icons/fa'
const publicUrl = process.env.PUBLIC_URL
export default function Page2 (){
    const card = data.map((cardEl)=>{
        return( 
        <div className='card'>
            <img src={publicUrl + cardEl.img} alt={cardEl.title} style={{background:cardEl.color}} className="icon"/>
            <h4>{cardEl.title}</h4>
            <p><div className='border-bottom'></div><br/><br/>{cardEl.text}</p>
        </div>
        );
    })
    return (
        <PageWrap>
            <div className='main-section'>
                <section className='info-text'>
                    <img src={process.env.PUBLIC_URL +"/assets/Rectangle5.png"} alt="" />
                    <h2>The best business<br/>solution for you</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.Excepteur 
                        sint occaecat cupidatat non proident,
                        <br/>quis nostrud exercitation ullamco laboris ea commodo consequat.
                    </p>
                    <div>
                        <h5>Learn About Our Success 
                            <span>
                                <FaLongArrowAltRight style={{color:'red' , verticalAlign: 'middle'}}/>
                            </span>
                        </h5>
                    </div>
                </section>
                <section className='info-cards'>
                    {card}
                </section>
            </div>
            
        </PageWrap>

    );
}

const PageWrap = styled.main`

margin-bottom:-80px;
padding: 0;
.main-section{
    display:flex;
    justify-content: space-around;
    max-width: 65%;
    margin: 5em auto 0;
}
.info-text{
    max-width: 35%;
    h2{
    color:#3B3A3A;
    font-size:2rem;
    }
    h5{
    color: red;
    }
    
}
p{
    font-size: .7rem;
    color:#8F8F8F;
}
span{
        margin-left:2em;
}
.info-cards{
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(2, 1fr);
    max-width: 40%;
    padding-top: 2.5em;
    align-items: center;
}

.card{
    display: flex;
    flex-direction: column;
    .icon{
    width:30px;
    padding:20px;
    border-radius: 50%;
    box-shadow:0px 0px 50px #ccc;
    }
    h4{
    color:#3B3A3A;
    font-weight: 600;
    font-size: 1rem;
    text-transform: capitalize;
    margin-bottom: 0;
    padding-bottom: 0.5em;
    }
    .border-bottom{
    border-top: 3px solid #ff4c4c;
    position: absolute;
    right: 60%;
    left: 0;
    margin-bottom: 1em;
    }
    p{
    position: relative;
    margin-top: 0;
    }
}

@media(max-width:950px){
    max-width: 80%;
    margin:0 auto;
    .main-section{
        flex-direction:column;
        max-width:80%;
        margin:3em auto ;
    }
    .info-text{
        max-width:60%;
        margin-right:0;
    }
    .info-cards{
        max-width:60%;
    }
}
`



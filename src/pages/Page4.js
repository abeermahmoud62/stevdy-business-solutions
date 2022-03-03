import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
export default function Page4(){
    return(
        <PageWrap>
            <section className='text'>
                <h3>Advanced Customer Service Platform</h3>
                <h1>Platform Overview</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit  sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua.Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat.<br/>
                    Duis aute irure dolor  eu fugiat nulla pariatur.
                </p>
            </section>
            <section className='carousel'>
                <Carousel 
                showArrows={false} 
                autoPlay={true} 
                infiniteLoop 
                transitionTime={2000} 
                showThumbs={false} 
                showStatus={false}
                >
                    <div>
                        <img src={process.env.PUBLIC_URL + "assets/NoPath.png"} alt="dashboard"/>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "assets/NoPath.png"} alt="dashboard"/>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "assets/NoPath.png"} alt="dashboard"/>
                    </div>
                </Carousel>
            </section>
        </PageWrap>
    )
    ;
}

const PageWrap = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
text-align: center;
max-width: 80%;
margin: 0 auto;
.text{
    max-width: 40%;
}
.text h3{
    color:#8F8F8F;
    font-weight: 600;
}
.text p{
    color: #8F8F8F;
    font-size: .7rem;
}
.text h1{
    color:#3B3A3A;
    font-size: 2.5em;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 0;
}
.carousel img{
    width:100%; 
}
.carousel{
    .carousel-indicators{
        background-color: red;
    }
}


`
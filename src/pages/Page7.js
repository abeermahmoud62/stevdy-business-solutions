import styled from 'styled-components'

export default function Page7(){

    return(
        <PageWrap>
            <section className='progress'>
                <h2>Don't just take <br/> our words for it!</h2>
                <div className='progress-numbers'>
                    <div>
                        <h1>570</h1>
                        <h3>Download</h3>
                    </div>
                    <div>
                        <h1>570</h1>
                        <h3>Active User</h3>
                    </div>
                    <div>
                        <h1>570</h1>
                        <h3>Positive Feedback</h3>
                    </div>
                    <div>
                        <h1>570</h1>
                        <h3>+ rating</h3>
                    </div>
                </div>
            </section>
            <section className='reviews'>
                <div className='review'>
                        <img src={process.env.PUBLIC_URL + "assets/photo.png"} alt="" />
                        <div>
                            <h3>Florrie Jacobs</h3>
                            <h5>CEO of Company</h5>
                            <p>Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr<br/>diam nonumy eirmod tempor<br/>invidunt ut labore et dolore
                            </p>
                            <div className='rates'>
                                <img src={process.env.PUBLIC_URL +"assets/star.png"} alt="star" />
                                <img src={process.env.PUBLIC_URL +"assets/star.png"} alt="star" />
                                <img src={process.env.PUBLIC_URL +"assets/star.png"} alt="star" />
                                <img src={process.env.PUBLIC_URL +"assets/star.png"} alt="star" />
                                <img src={process.env.PUBLIC_URL +"assets/star.png"} alt="star" />
                            </div>
                        </div>
                </div>
                <div className='info'>
                    <h1>grow your business and <br/>join our happy users</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam<br/> nonumy eirmod tempor invidunt ut 
                    labore et dolore magna<br/>  aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo<br/>  duo dolores et ea rebum.<br/>
                    Stet clita kasd gubergren, no sea takimata Lorem.
                    </p>
                    <button>About us</button>
                </div>
            </section>
        </PageWrap>
    );
}
const PageWrap = styled.main`
display: flex;
flex-direction: column;
max-width: 70%;
margin: 0 auto;

.progress{
    text-align: center;
    margin-bottom: 3em;
    .progress-numbers{
        display: flex;
        justify-content: space-between;
        @media(max-width:950px){
            flex-wrap: wrap;
        }
        h1{
            color: #F75C5A ;
            font-size: 3rem;
            font-weight: 900;
            margin-bottom: 0;
        }
        h3{
            color: #303030;
        }
    }
}
.reviews{
    display: flex;
    justify-content: space-between;
    margin-bottom: 6em;
    @media (max-width:950px){
        flex-direction: column;
    }
    .review{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 30px;
        box-shadow: 0px 5px 10px rgb(0 0 0 /0.2);
        max-width: 35%;
        div{
            .rates{
                display: flex;
                justify-content: flex-start;
                img{
                    width: 20px;
                    height: 20px;
                    margin-left: 0;
                    margin-right: 5px;
                }
            }
            h3{
                margin-bottom: 0;
            }
            h5{
                margin-top: 10px;
                color:#989898;
                margin-bottom: 0;
            }
            p{
                font-size:.8rem;
                color:#989898;
            }
        }
        img{
            width: 40%;
            max-height: 250px;
            object-fit:contain;
        }
    }
    
    .info{
        margin-left: 2em;
        h1{
            text-transform:capitalize;
            font-size: 2em;
        }
        p{
            color:#989898;
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
    }
   

}




`
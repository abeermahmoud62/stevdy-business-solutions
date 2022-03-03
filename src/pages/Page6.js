import styled from 'styled-components'
const data=[
    {
        num:1,
        title:'Market Research',
        para:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum."
    },
    {
        num:1,
        title:'Market Research',
        para:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum."
    },
    {
        num:1,
        title:'Market Research',
        para:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum."
    }
]

export default function Page6(){
    const card = data.map((card)=>{
        return(
            <div className='card'>
                <div className='number'>
                    <h1>{card.num}</h1>
                    <img src={process.env.PUBLIC_URL + "assets/Path1.png"} alt="line" />
                </div>
                <div className='content'>
                    <h3>{card.title}</h3>
                    <p>
                        {card.para}
                    </p>
                </div>
            </div>
        );
    })
    return (   
        <PageWrap>
            <section className='text'>
                <h1>Acceleration Process to Grow Your Business</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                    labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.<br/>
                    Stet clita kasd gubergren, no sea takimata Lorem ipsum.
                </p>
                <button>About us</button>
            </section>
            <section className='cards-cont'>
               {card}
            </section>
        </PageWrap>
    );
}
const PageWrap = styled.main`
display: flex;
align-items: center;
justify-content: space-around;
max-width: 65%;
margin: 8em auto;
.cards-cont{
    display: flex;
    flex-direction: column;
    max-width: 55%;
    .card{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        :last-child img{
            display: none;
        }
        p{
        font-size: .7rem;
        color:#8F8F8F;
        max-width:80%;
        }
    }
    h3{
    color:#3B3A3A;
    font-size:2rem;
    margin-bottom: 0;
    }
}

.number{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        padding-right: 1em;
        padding-top: 1em;
    }
    h1{
    color: #fff;
    background-color: #F75C5A;
    border-radius: 50%;
    width: 50px;
    text-align: center; 
    margin-right:1em;
    }
}

.text{
    max-width: 40%;
    margin-right: 6em;
    h1{
        color:#3B3A3A;
        font-size:2rem;
    }
    p{
    font-size: .7rem;
    color:#8F8F8F;
    max-width:80%;
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

`
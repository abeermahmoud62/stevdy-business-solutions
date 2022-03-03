import styled from 'styled-components'


export default function Footer(){
    return (   
        <FooterEl>
            <div className="study">
                <h2>study</h2>
                <p>
                    Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Vivamus eget diam at mi<br/> sollicitudin.
                </p>
            </div>
            <div className='service'>
                <h4>Nos Services</h4>
                <h5>Avis clients</h5>
                <h5>Mentions légales</h5>
                <h5>Plan du site</h5>
                <h5>Blog d’Idéematic</h5>
                <h5>Le dictionnaire du digital</h5>
                <h5>‹ Notre boutique /›</h5>
            </div>
            <div className='subscribe'>
                <h4>Sign up for special offers!</h4>
                <input placeholder='Mail' name='Mail' type='email' id='email'/>
                <button>subscribe</button>
            </div>
        </FooterEl>
    );
}
const FooterEl = styled.footer`
display: flex;
justify-content:space-between;
background-color: #303030 ;
max-width: 100%;
color:#fff;
padding: 1em 3em;
h2{
    font-family: nueva-std, serif;
    font-weight: 700;
    font-style: normal;
    font-size: 3em;
    margin-top: 0;
    margin-bottom: 0;
}
h4{
    font-size: 1rem;
}
h5{
    font-weight: 400;
    font-size: .85rem;
    margin-bottom: 3px;
    margin-top: 3px;
}

.service{
    margin-left: 0;
    p{
        font-weight:400;
    }
}
.study{
    margin-right: 0;
    p{
        font-weight:600; 
    }
}
.subscribe{
    position: relative;
    width: 40%;
    input[type="email"]{
        height: 20px;
        padding: 10px;
        padding-right: 50px;
        color: #000;
        font-size: 1rem;
        font-weight: 600;
        width: 350px;
        border-radius: 20px;
        border: none;
        position: relative;
        @media (max-width:1210px){
            padding-right: 0;
        }
    }

    button{
        left: 260px;
        display: inline;
        position: absolute;
        z-index: 2;
        width: 150px;
        height: 40px;
        padding: 2px;
        text-align: center;
        font-weight: 600;
        color: #fff;
        background-color:#F75C5A ;
        border: none;
        border-radius: 20px;
        @media (max-width:1110px){
            left: 0px;
            margin-top: 1em;
        }
    }
}


`
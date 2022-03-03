import styled from 'styled-components'
import PlatformInfo from '../components/PlatformInfo';
export default function Page3 (){
    return(
        <PageWrap>
            <div className='dash-cont'>
                <img src={process.env.PUBLIC_URL + "assets/Rectangle9.png"} alt="shape" className="back" />
                <img src={process.env.PUBLIC_URL + "assets/NoPath.png"} alt="dashboard" className="dash-image"/>
            </div>
            <PlatformInfo />
        </PageWrap>
    );
}


const PageWrap = styled.main`
display: flex;
align-items: center;
.dash-cont{
    position : relative;
    max-width:70%;
}
.back{
    position:relative;
    left:-600px;
    top: 0;
    width: 100%;
}
.dash-image{
    position:absolute;
    top:100px;
    left: -200px;
    width: 100%;
    margin-right: 6em;
}
@media(max-width:950px){
    flex-direction: column;
}

`
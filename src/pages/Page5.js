import styled from 'styled-components'
import PlatformInfo from '../components/PlatformInfo';
export default function Page5(){
    return(
        <PageWrap>
            <PlatformInfo />
            <div className='dash-cont'>
                <img src={process.env.PUBLIC_URL + "assets/NoPath.png"} alt="dashboard" className="dash-image"/>
            </div>
        </PageWrap>
    );
}


const PageWrap = styled.main`
max-width: 80%;
margin:0 auto;
display: flex;
align-items: center;
.dash-image{
    width: 100%;
}
`
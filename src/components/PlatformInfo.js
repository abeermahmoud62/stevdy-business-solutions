import styled from 'styled-components'
import {FaLongArrowAltRight} from 'react-icons/fa'
export default function PlatformInfo() {

    return(
        <Platform>
                    <img src={process.env.PUBLIC_URL +"/assets/Rectangle5.png"} alt="" />
                    <h2>Best Platform for the<br/>Technological Era</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua.Ut enim ad minim veniam
                        <br/>quis nostrud exercitation ullamco laboris ea commodo consequat.
                    </p>
                    <div>
                        <h5>Learn About Our Success 
                            <span>
                                <FaLongArrowAltRight style={{color:'red' , verticalAlign: 'middle'}}/>
                            </span>
                        </h5>
                    </div>
        </Platform>
    );
    
}
const Platform = styled.section`
max-width: 60%;
margin-right: 6em;

h2{
    color:#3B3A3A;
    font-size:2rem;
}
p{
    font-size: .7rem;
    color:#8F8F8F;
}
h5{
    color: red;
} 
span{
    margin-left:2em;
}



`
import styled from 'styled-components'
import data from  '../ClientsData';
const publicUrl = process.env.PUBLIC_URL
function Clients(){
    const clientsImg = data.map((clientImg)=>{
        return <img src={publicUrl + clientImg.Img_url} alt={clientImg.Img_alt} />
    })
    return(
        <Foot>
            {clientsImg}
        </Foot>
    );
}
export default Clients;

const Foot = styled.footer`

display: flex;
align-items: center;
justify-content: center;
max-width: 65%;
margin: 6em auto 5em;
img{
    width: 10em;
}
@media (max-width:900px){
    flex-wrap: wrap;
}

`
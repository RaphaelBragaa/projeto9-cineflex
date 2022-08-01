import styled from "styled-components";


export default function Footer({img,Title,date}){
    console.log(Title)
    console.log(date)
    return(
        <>
        <Footers>
            <Imagem>
                <img src={img}></img>
            </Imagem>
            <Info>
                <h1>{Title}</h1>
                <h1>{date}</h1>
            </Info>
        </Footers>
        </>
    )
}
const Footers=styled.div`
box-sizing:border-box;
@media (max-width: 767px) {
    position: fixed;
    display:flex;
    padding-top:15px;
    padding-left:15px;
    width: 100%;
    height: 117px;
    left: 0;
    bottom: 0;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    
}
`
const Imagem=styled.div`
 display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:20px;
    margin-right:20px;
    width:8vh;
    height:10vh;
    box-shadow: 0vh  0.21vh 0.42vh 0.21vh #0000001A;
    img{
        color:green;
        object-fit:contain;
        width:9vh;
        height:9vh;
}
`
const Info=styled.div`
@media (max-width: 767px) {
        height:10vh;
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        font-family:'Roboto';
        font-weight:400;
        font-size:26px;
}
`

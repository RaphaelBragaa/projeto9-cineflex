import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Sucesso({info,number,Title}){
    console.log(info)
    return(
        <>
        <Selecione><h1>Pedido feito com sucesso!</h1></Selecione>

        <Info>
        <h1>Filme e sessão</h1>
        <h2>{Title}</h2>

        </Info>
        <Info>
        <h1>Ingressos</h1>
        {number.map((numb)=> {return(<h2>Assento {numb}</h2>)})}
        </Info>
        <Info>
        <h1>Comprador</h1>
        <h2>Nome:{info.name}</h2>
        <h2>CPF:{info.cpf} </h2>
        </Info>
        <Link to="/">
            <Button>
             Voltar pra Home 
            </Button>
        </Link>
        </>
    )
}

const Selecione = styled.div`
@media (max-width: 767px) {
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:12vh;

    font-family:'Roboto';
    font-size:1.5em;

    h1{
        color:#247A6B;
        font-weight:500;
        width:30%;
        font-size:24px;
        text-align:center;

    }
}
`

const Info=styled.div`
@media (max-width: 767px) {
    font-family:'Roboto';
    font-size:1.5em;
    margin-left:40px;
    margin-bottom:40px;
    color:#293845;
h1{
    font-weight:500;
    margin-bottom:10px;
}

}
`

const Button = styled.button`
 width:35%;
    height:45px;
    margin-left:200px;
    font-weight:400;
    font-family:'Roboto';
    font-size:15px;
    border:none;
    border-radius:5px;
    background-color:#E8833A;
    color:#FFFFFF;

    a{
        text-decoration:none;
    }
`
   

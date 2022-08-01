import { useParams, Link, useNavigate  } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios'
import { useEffect } from 'react';
import React from "react"
import Cadeira from './Cadeira';
import Footer from './Footer';



export default function Register({Title,img,setInfo,setNumber,number}){
    const { idSessao } = useParams();
    const [seats,setSeats] = React.useState([])
    const [name,setName] = React.useState('')
    const [cpf,setCpf] = React.useState('')
    const [ids,setIds]=React.useState([])
    let navigate = useNavigate()


    useEffect(()=>{
        const requisicao= axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)

        requisicao.then(resposta => {
            setSeats(resposta.data.seats)
        
        }).catch("Carregando...")
    },[])

    const dados= { 
            ids: ids,
            name:name,
            cpf:cpf,
        }

    function Reservar(){
        alert("CHAMOU")
        const requisicao=axios.post(`https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`,dados)
        setInfo(dados)
        navigate('/sucesso')

        requisicao.then(console.log('sucesso'))
        requisicao.catch(console.log('erro'))
    }

    


    return(
        <>
        <Selecione>
            <h1>Selecione o(s) assento(s)</h1>
        </Selecione>
        <Seats>
        {seats.map((seat)=>{return(<Cadeira isAvailable={seat.isAvailable} name={seat.name} id={seat.id} setIds={setIds} ids={ids} setName={setName} setNumber={setNumber} number={number}/>)})}
        </Seats>
        <Options>
            <Box background={'#8DD7CF'} border={'#1AAE9E'}>
            <div ></div> 
            <h1>Selecionado</h1>   
            </Box>
            <Box background={'#C3CFD9'} border={'#7B8B99'}>
            <div ></div> 
            <h1>Disponível</h1>   
            </Box>
            <Box background={'#FBE192'} border={'#F7C52B'}>
            <div ></div> 
            <h1>Indisponível</h1>   
            </Box>
        </Options>
        <Forms onSubmit={Reservar}>
        <h1>Nome do Comprador:</h1>
        <input type="text" value={name} placeholder="Digite seu nome..." onChange={e=>setName(e.target.value)}/>
        <h1>CPF do comprador:</h1>
        <input type="number" value={cpf} placeholder='Digite seu CPF...' onChange={e=>setCpf(e.target.value)}/>
        <button type="submit">Reservar assento(s)</button>
        </Forms>
        <Footer Title={Title} img={img}/>

        </>
    )
}

//{seats.map((seat, index)=>{return(<Cadeira key={index} cor={seat.isAvailable ? '#7B8B99':"#FBE192"} border={seat.isAvailable ? selecionadoB:"#F7C52B"}>{seat.name}</Cadeira>)})}


const Selecione = styled.div`
@media (max-width: 767px) {
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:12vh;

    font-family:'Roboto';
    font-size:1.5em;
}
`
 const Seats = styled.div`
 @media (max-width: 767px) {
    display:flex;
    justify-content:space-around; 
    flex-wrap:wrap;
     width:90%;
    height:20rem;
    margin:auto;
    
   
 }
 `
 const Options = styled.div`
  @media (max-width: 767px) {
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:90%;
    height:5rem;
    margin:auto;
    text-align:baseline;
   
  }
 `
const Box=styled.div`
@media (max-width: 767px) {
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:25%;
    height:5rem;
    font-family:'Robot';
   
    
    div{
        display:flex;
        justify-content:center;
        align-items:center;
       margin:1px;
        width:46px;
        height:46px;
        border-radius:25px;
        font-size:20px;
        border:1px solid ${(props)=>props.border};
        font-weight:500;
        background-color:${(props)=>props.background};
    } 
    h1{
        font-family:'Roboto';
        font-weight:300;
    }
}
`
const Forms = styled.form`
@media (max-width: 767px) {
    margin-top:20px;
    display:flex;
    flex-direction:column;
    margin:auto;
    width:90%;
    height:150px;
    font-family:'Roboto';
    font-weight:400;
    input{
        height:30px;
        padding-left:18px;
        margin-bottom:15px;
        border-color:none;
        outline-color:#AFAFAF;
    }
    input::placeholder{
        color:#AFAFAF;
    }
    button{
        width:35%;
        height:45px;
        margin-left:160px;
        font-weight:400;
        font-family:'Roboto';
        font-size:15px;
        border:none;
        border-radius:5px;
        background-color:#E8833A;
        color:#FFFFFF;
    }
}
`



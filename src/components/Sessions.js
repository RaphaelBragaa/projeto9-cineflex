import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios'
import { useEffect } from 'react';
import React from "react"
import Footer from './Footer';


export default function Sessions({Title,setImg,img,date,setDate}){
    const { idFilme } = useParams();
    const [items,setItems] = React.useState([])
    console.log(Title)
    let navigate = useNavigate()
    useEffect(()=>{
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        requisicao.then(resposta => {
            setItems(resposta.data.days)
            setImg(resposta.data.posterURL)
            console.log(resposta)
        })
    },[])

    
   console.log(date)
    return(
        <>
        <Selecione>
            <h1>Selecione o horário</h1>
        </Selecione>
        {items.map((item) => {return(
        <Dia>
            <h1>{item.weekday} - {item.date}</h1>
            <Horarios>
               <Link  to={`/assentos/${item.showtimes[0].id}`}> <div onClick={()=>setDate([...date,item.weekday])}>{item.showtimes[0].name}</div> </Link>
               <Link to={`/assentos/${item.showtimes[1].id}`}><div onClick={()=>setDate(item.weekday)}>{item.showtimes[1].name}</div></Link>
            </Horarios>
        </Dia>)})}
        <Footer img={img} Title={Title} date={date}/>
       

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
}
`
const Dia = styled.div`
@media (max-width: 767px) {
    display:flex;
    flex-direction:column;
    width:100%;
    padding-left:25px;

    font-family:'Roboto';
    font-size:1.3em;

}
`

const Horarios = styled.div`
@media (max-width: 767px) {
    display:flex;
    width:100%;
    margin-top:20px;
    margin-bottom:30px;
    text-decoration:none;
    div{
        display:flex;
        justify-content:center;
        align-items:center;
        width:8.8vh;
        height:7vw;
        background-color:#E8833A;
        color:#FFFFFF;
        border-radius: 4px;
        margin-right:20px;
    }
    a{
        text-decoration:none;
    }
}
`

import styled from "styled-components";
//import sonic from "../components/img/sonic.jpg"
import axios from 'axios'
import { useEffect } from 'react';
import React from "react"
import { Link } from 'react-router-dom';


export default function Movies({setTitle}){
    const[items, setItems]=React.useState([])
    
    useEffect(()=>{
        const requisicao= axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies")

        requisicao.then(resposta => {
            setItems(resposta.data)
            console.log(items.title)
            
            console.log(items)
        }).catch("Carregando...")
    },[])
    

    return(
        <>
        <Movie>
           {items.map((item,index)=>{return(
           <Link to={`/sessoes/${item.id}`}> <div onClick={()=>setTitle(item.title)}key={index}>
            <img src={item.posterURL}/>
            </div></Link>
           )})} 
        </Movie>
      
        </>
    )
}

const Movie = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding: 20px 120px 20px 120px;
    
    justify-content:space-between;



@media (max-width: 767px) {

    div{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:20px;
        width:19vh;
        height:25vh;
        box-shadow: 0vh  0.21vh 0.42vh 0.21vh #0000001A;
    }

  img{
    color:green;
    object-fit:contain;
    width:18vh;
    height:23vh;
}
}

`
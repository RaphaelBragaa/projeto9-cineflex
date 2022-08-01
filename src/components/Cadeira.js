import styled from "styled-components";
import React from "react";


export default function Cadeira({name,isAvailable,id,setIds,ids,setNumber,number}){
     const [selecionadoA,setSelecionadoA] = React.useState('#C3CFD9')
     const [selecionadoB,setSelecionadoB] = React.useState('#7B8B99')
    function Escolhido(p){
        if(p==='p'){
        setSelecionadoA('#8DD7CF')
        setSelecionadoB('#1AAE9E')
        setIds([...ids,id])
        setNumber([...number,name])
        console.log(ids)
        console.log(number)
        
    }
    } 
    
    return(
        <>
        
        <Cadeiras onClick={()=>Escolhido('p')} id={id} cor={isAvailable ? selecionadoA:"#FBE192"} border={isAvailable ? selecionadoB:"#F7C52B"}>
        {name}
        </Cadeiras>
       
       </>
    )
}

const Cadeiras = styled.div`
@media (max-width: 767px) {
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
        font-family:'Roboto';
        background-color:${(props)=>props.cor};
}

`

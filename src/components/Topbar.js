import styled from "styled-components";

export default function Topbar(){
    const cor = 'red'
    return(
        <>
        <Topo cor={cor}>CINEFLEX</Topo>
        </>
    )
}

const Topo = styled.div`
@media (max-width: 767px) {
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:7.1vh;
    background-color:#C3CFD9;

    font-family:"Roboto";
    font-weight: 700;
    font-size:2em;
    color:#E8833A;
}

`
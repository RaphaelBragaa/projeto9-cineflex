import GlobalStyle from "./globalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./Topbar"
import Movies from "./Movies"
import Sessions from "./Sessions";
import Register from "./Register";
import React from "react"
import Sucesso from "./Sucesso";

export default function App(){
  const[Title,setTitle]=React.useState('')
  const [img,setImg] = React.useState([])
  const [date,setDate] =React.useState([])
  const [info,setInfo]=React.useState()
  const [number,setNumber]=React.useState([])
  
  console.log(Title)
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Topbar/>
         <Routes>
           <Route path="/" except element={<Movies setTitle={setTitle}/>}></Route>
           <Route path="/sessoes/:idFilme" element={<Sessions setImg={setImg} img={img} Title={Title} date={date} setDate={setDate}/>}></Route>
           <Route path="/assentos/:idSessao" element={<Register img={img} Title={Title} date={date} setInfo={setInfo} setNumber={setNumber} number={number}/>}></Route>
           <Route path="/sucesso" element={<Sucesso info={info} number={number} Title={Title}/>}></Route>
         </Routes>   
        </BrowserRouter>
        </>
    )
}
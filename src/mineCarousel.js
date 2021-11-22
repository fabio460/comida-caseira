import React, { useEffect, useState } from "react";
import Prato from "./prato";
import Api from './api'
import styled from "styled-components";




function MineCarousel() {
    var [pixel,setPixel] = useState(0);
    var [tamanhoDaLista,setTamanhoDaLista]= useState();
    const Container = styled.div`
       .container_section{
           width:85%;
           margin:auto;
       }
       .mineCarousel{
           display:flex;
           margin-top:30px;
           width:66%;
           overflow-x: hidden;
           height:403px;
           margin:auto;
           
       }
       .next_prev{
           display:flex;
       }
       .nav_carousel{
           display:flex;
           justify-content:space-between;
           width:66%;
           height:60px;
           align-items:center;
           margin:auto;
           
           padding:0px;
       }
       .margem{
           transition: 1s;
           margin-left:${pixel}px;
           
       }
       .btn{
           font-size:40px;
           color:red;
       }
       .btn:hover{
        color:orange;
    }
       .active{
           color:black;
       }
    `
   
    
   const [lista,setLista]= useState([])
   async function carregarCarousel(){
        const l = await Api.listar()
        setLista(l) 
        setTamanhoDaLista(l.length)
    }
    useEffect(()=>{
       carregarCarousel()
       
    },[pixel])


    const next = ()=>{
       if(pixel > -250*(tamanhoDaLista - 4)){
        setPixel(pixel - 250)
        
       }
    }
    const prev = ()=>{
       if(pixel < 0){
        setPixel(pixel + 250)
       
       }
    }
    return<>
        <Container>
            <div className='nav_carousel container'>
                <div>carnes vermelhas</div>
                <div className='next_prev'>
                   <h1 id='prev' onClick={prev} className='btn '>{" < "}</h1>
                   <h1 id='next' onClick={next} className='btn'>{" > "}</h1>
                </div>
            </div>
            <div className='mineCarousel '>
                    <div className='margem'></div>
                    {lista.map((item)=>{
                        return <Prato nome={item.nome} imagem={item.imagem} valor={item.valor} peso={item.peso} ingredientes={item.ingredientes} descricao={item.descricao}/>
                    })}
            </div>  
        </Container>      
    </>
}
export default MineCarousel;
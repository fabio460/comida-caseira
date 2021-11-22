import React,{useEffect, useState} from "react";
import Carousel from './Carousel';
import NavBar from './navBar';
import styled from "styled-components";
import MineCarousel from "./mineCarousel";
import Api from "./api";

function Home(){
    
    const Container = styled.div`
        .modal_login{
            background-color: rgba(14, 13, 13,0.5);
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            justify-content: flex-end;
            align-items: center;
            transition: 0.5s;
            
            opacity: 0;
            display: none;
            
        }
        .modal_login_body{
            background-color: white;
            width: 0px;
            height: 100vh;
            transition: 0.5s;
        }
        .visivel{
            transition: 1s;
            opacity: 1;
            
        }
        .display{
            display: flex;
            transition: 1;
        }
        
        .container{
            width: 80%;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(4,1fr);
            background-color: wheat;
            padding:auto;
        }
        span img{
            width:70px;
        }
        span{
            margin:10px;
        }
        .modal_login_body_itens{
            border:solid black.1px;
            padding:10px;
        }
`




    const fechar = ()=>{
        document.querySelector('.modal_login').classList.remove('visivel')
        document.querySelector('.modal_login_body').style='width:0px';

        setTimeout(() => {
            document.querySelector('.modal_login').style='display:none'
        }, 300);
      
    }

    const abrir = ()=>{
        document.querySelector('.modal_login').style='display:flex'
        setTimeout(() => {
            document.querySelector('.modal_login').classList.add('visivel')
            document.querySelector('.modal_login_body').style='width:50%';
        }, 300);
    }

    const [cart,setCart]=useState([])
    async function setarCart(){
       const l =await Api.listarCarrinho();
       setCart(l)
    } 

    const excluirCard = (e)=>{
       Api.deletarCarrinho(e.target.id)
       setarCart()
       window.location.reload()
    }
    useEffect(()=>{
        setarCart()
    },[])

  
    return<>
       <NavBar abrir={abrir} fechar={fechar}/>
       <Carousel/>
       <Container>
            <div className='modal_login'>
                <div className='modal_login_body'>
                    {cart.map((item)=>{
                     return <div className='modal_login_body_itens'>
                         <span>
                            <span><img src={item.imagem} alt=''/></span>
                            <span>{item.nome}</span>
                            <span>R$ {item.valor}</span>
                            <span >quant {item.quantidade}</span>
                         </span>
                         <span ><button id={item._id} onClick={excluirCard}>x</button></span>
                      </div>                          
                    })}
                    <button onClick={fechar}>fechar</button>
                </div>
            </div>
            
        </Container>  
        <MineCarousel/>  
        <MineCarousel/>
    </>
}
export default Home;
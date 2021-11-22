import React from "react";
import styled from "styled-components";
import NavBar from "./navBar";
function AdicionarCarrinho(){
    const Container = styled.div`
      .containerAdicionarCarrinho{
          width:83.5%;
          margin:auto;
      }
      .tela{
         display:grid;
         grid-template-columns:1fr 1fr;
         
      }
      img{

      }
      button{
        background-color: rgb(76, 196, 255);
           color:white;
           cursor:pointer;
           border:none;
           height:40px;
           width:400px;
       }
       button:hover{
        background-color: rgb(76, 156, 255);
       }
       .p2 button{
          margin-top:100px;
       }
       .p2 h1{
           margin-bottom:30px;
       }
       footer{
           background-color:black;
           color:white;
           height:100px;
           display:flex;
           justify-content:space-around;
           align-items:center;
       }
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

   const nome = localStorage.getItem('nome')
   const peso = localStorage.getItem('peso')
   const imagem = localStorage.getItem('imagem')
   const ingredientes = localStorage.getItem('ingredientes')
   const descricao = localStorage.getItem('descricao')
   const valor = localStorage.getItem('valor')
    return<>
        <NavBar abrir={abrir} fechar={fechar}/>
        <Container>
            <div className='containerAdicionarCarrinho'>
                <div className='tela'>
                    <div><img src={imagem} alt=''/></div>
                    <div className='p2'>
                        <h1>{nome}</h1>
                        <h2>R$ {valor}</h2>
                        <button>adicionar</button>
                    </div>
                    <div>
                        <h4>{peso}</h4>
                        {descricao}
                    </div>
                    <div><h4>Ingrediente </h4>{ingredientes}</div>
                </div>
            </div>
            <div className='modal_login'>
                <div className='modal_login_body'>
                    <button onClick={fechar}>fechar</button>
                </div>
            </div>
            <footer>
                <div>area de entrega</div>
                <div>dúvidas frequentes</div>
                <div>preço de ajuda</div>
            </footer>
        </Container>
    </>
}
export default AdicionarCarrinho;
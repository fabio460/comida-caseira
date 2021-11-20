import React from "react";
import Carousel from './Carousel';
import NavBar from './navBar';
import styled from "styled-components";
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
//
    
    return<>
       <NavBar abrir={abrir} fechar={fechar}/>
       <Carousel/>
       <Container>
            <div className='modal_login'>
                    <div className='modal_login_body'>
                        <button onClick={fechar}>fechar</button>
                    </div>
                </div>
            
        </Container>    
    </>
}
export default Home;
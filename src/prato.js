import React from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
function Prato({nome,imagem,peso,descricao,ingredientes,valor}) {

    const h = useHistory()
    const clicar = ()=>{
        localStorage.setItem('nome',nome)
        localStorage.setItem('peso',peso)
        localStorage.setItem('imagem',imagem)
        localStorage.setItem('ingredientes',ingredientes)
        localStorage.setItem('descricao',descricao)
        localStorage.setItem('valor',valor)
        h.push('/adicionarCarrinho')
    }

    const Container = styled.div`
       .itens{
           display:flex;
           justify-content:space-between;
       }
       .prato img{
           width:100%;
           height:170px;
       }
       .prato{
           width:250px;
           height:400px;
           padding:10px;
           cursor:pointer;
           display:flex;
           flex-direction:column;
           justify-content:space-between;
           box-size:border-box;
           transition:1s;
       }
       .prato:hover{
        
        box-shadow: 1px 2px 5px black;
        transition:1s;
        
       }
       button{
        background-color: rgb(76, 196, 255);
           color:white;
           cursor:pointer;
           border:none;
           height:40px;
       }
       button:hover{
        background-color: rgb(76, 156, 255);
       }
    `
    return<>
        <Container>
            <div onClick={clicar} className='prato'>
            <img src={imagem} alt='imagem faltando'/>
            <h4>{nome}</h4>
            <div className='itens'>
                <div>{peso}</div>
                <div>R$ {valor}</div>
            </div>
            <button>adicionar</button>
            </div>
        </Container>    
    </>
}
export default Prato;
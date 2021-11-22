import React  from "react";
import styled from "styled-components";
function ItemCart(nome,imagem,valor,quantidade){
    const Container = styled.div`
       .container_item div{
           margin:15px;
       }
       .container_item{
           display:flex;
       }
    `
    return<>
       <Container>
          <div className='container_item'>
               <img src={imagem} alt=''/>
               <div>{nome}</div>
               <div>{valor}</div>
               <div>{quantidade}</div>
          </div>
       </Container>
    </>
}
export default ItemCart;
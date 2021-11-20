import React from 'react';
import styled from 'styled-components';
function NavBar({abrir}){
    const Component = styled.div`
     
       .icone_car_compras{
         cursor:pointer;
         width:30px;
         height:30px;
         margin:10px;
       }

       ul{
         display:flex;
         align-items:center;
       }
       li{
         list-style:none;
         margin:5px;
       }
       .navbar{
         width:100%;
         padding:10px;
       }
       .icone{
         width:40px;
         list-style:none;
         cursor:pointer;
       }
       .container_nav{
         width:85%;
         margin:auto;
       }
       @media(max-width:400px){
        .container_nav{
          width:95%;
          margin:auto;
        }
       }
    `
    

    return<>
      
       <Component>
  
          <div className='nav container_nav'>
                <nav class="navbar navbar-expand-lg navbar navbar-light style=background-color: #e3f2fd">
                  <a class="navbar-brand" href="h">Comida caseira</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="h">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <img className='icone' src='https://icones.pro/wp-content/uploads/2021/02/facebook-icone-orange.png' alt=''/>
                      </li>
                      <li class="nav-item">
                        <img className='icone' src='https://i.pinimg.com/originals/fa/ba/b6/fabab60eff5c90d7d6ae281288ee3e61.png' alt=''/>
                      </li>
                      <li class="nav-item">
                        <img className='icone' src='https://thumbs.dreamstime.com/b/%C3%ADcone-novo-do-logotipo-da-c%C3%A2mera-de-instagram-no-vetor-alaranjado-ouro-com-ilustra%C3%A7%C3%B5es-modernas-projeto-inclina%C3%A7%C3%A3o-fu-138902752.jpg' alt=''/>
                      </li>
                      <li class="nav-item">
                        <img className='icone' src='https://superherois.vercel.app/static/media/logo.67123f25.png' alt=''/>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="h" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                          Cardapio da semana
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="h">segunda - Baião de 2</a>
                          <a class="dropdown-item" href="h">terçã - Feijoada</a>
                          <a class="dropdown-item" href="h">quarta - Bife com batata frita</a>
                          <a class="dropdown-item" href="h">quinta - prato da casa</a>
                          <a class="dropdown-item" href="h">sexta - almondega</a>
                          
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="h">sabado - churrasco</a>
                        </div>
                      </li>
                      <li class="nav-item">
                        <a href='h' class="nav-link disabled">Disabled</a>
                      </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button class="btn btn-outline-success my-2 my-sm-0" >Search</button>
                    </form>
                  </div>
                  <img className='icone_car_compras' src='https://i.pinimg.com/originals/12/b0/7d/12b07d7d7dbde76a3a687552d50d397f.png' alt='' onClick={abrir}/>
                    <div data-toggle="modal" data-target="#exampleModal">
                      <img className='icone' src='https://hslt.com.br/Images/img_311846.png' alt=''/>
                    </div>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cadastre-se</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                              <form>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">Email </label>
                                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  <small id="emailHelp" class="form-text text-muted">manteremos sigilo com suas informações.</small>
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputPassword1">senha</label>
                                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>

                               
                              </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">fechar</button>
                            <button type="button" class="btn btn-primary">Cadastrar</button>
                          </div>
                        </div>
                      </div>
                    </div>               
                </nav>
                
              

              </div>
              <div className='espaço'></div>
              
       </Component>
    
    </>
}
export default NavBar;
import React from "react";
import styled from "styled-components";
function Carousel(){
    const Container = styled.div`
    .d-block{
        width: 100%;
        height: 300px;
        
      }
      .carousel{
        width: 100%;
        margin: auto;
        
      }
    `
    return<>
        <Container>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class='item d-flex'>
                        <img class="d-block w-100" src="https://thumbs.dreamstime.com/b/pasta-de-f%C3%ADgado-galinha-caseira-fresca-caf%C3%A9-banner-da-posi%C3%A7%C3%A3o-plana-vista-superior-215232513.jpg" alt="First slide"/>
                    </div>
                    
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://png.pngtree.com/background/20210710/original/pngtree-delicious-pizza-hand-drawn-geometric-black-banner-picture-image_1027884.jpg" alt="Second slide"/>
                </div>
                <div class="carousel-item ">
                <img class="d-block w-100" src="https://png.pngtree.com/background/20210710/original/pngtree-chinese-cuisine-simple-black-banner-picture-image_1036521.jpg" alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </Container>    
    </>
}
export default Carousel;
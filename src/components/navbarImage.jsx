import React from 'react';
import logo from '../images/opee.jpg';
import logo2 from '../images/next.png';

const NavbarImage = () => {
    return (
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={logo} alt="opeqe" width={"100%"} height={"400px"}/>
                </div>
                <div class="carousel-item">
                    <img src={logo} alt="opeqe" width={"100%"} height={"400px"}/>
                </div>
                <div class="carousel-item">
                    <img src={logo} alt="opeqe" width={"100%"} height={"400px"}/>
                </div>
            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    );
}
 
export default NavbarImage;
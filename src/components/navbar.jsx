import React, { Component } from 'react';

const Navbar = () => {
    return (
        <div class="navbar navbar-expand-sm navbar-light fixed-top top-nav" style={{'backgroundColor': '#f1f2f6','direction':'rtl'}}>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#" style={{'font-size' : '23px'}}><i class="fa fa-shopping-basket fa-10x"></i></a>
                </li>
                <li class="nav-item my-auto px-3">
                    <a class="nav-link  navbar-signup" href="#" style={{color:'green',border:'1px solid green',borderRadius:'20px',fontSize:'13px'}}>Sign Up</a>
                </li>
                <li class="nav-item my-auto px-3">
                    <a class="nav-link" href="#" style={{color:'white',backgroundColor:'black','border-radius':'15px',fontSize:'13px','paddimg':'0px 5px'}}>Log In</a>
                </li>
                <li class="nav-item my-auto px-3">
                    <a class="nav-link navbar-css" href="#" style={{color:'black'}}>Locations</a>
                </li>
                <li class="nav-item my-auto px-3">
                    <a class="nav-link navbar-css" href="#" style={{color:'black'}}>Orders</a>
                </li>
                <li class="nav-item my-auto px-3">
                    <a class="nav-link navbar-css" href="#" style={{color:'black'}}>Reservation</a>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;
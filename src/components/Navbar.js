import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../bread.svg";
import styled from "styled-components";
import { ButtonA } from "./Button";
import '../App.css';


const Navbar = () => {

  const [ menu, updateMenu ] = useState(true);
  const windowWidth = window.innerWidth;

  const handleClick = () => {
    
    if( menu ) {
      updateMenu(false);
      return;
    } else {
      updateMenu(true);
      return;
    }
  };
  

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    prevScrollpos > currentScrollPos ? document.getElementById("navbar").style.top = "0" : document.getElementById("navbar").style.top = "-100%";
    prevScrollpos = currentScrollPos;
  }


  return ( 
    <NavStyle id='navbar' className="navbar fixed-top navbar-expand-sm navbar-dark px-sm-5 sobreTodo">
      <Link to="/">
        <img
          src={logo}
          alt="confiteria de momoy"
          className="navbar-brand mr-0 logo"
          style={{width: '3rem'}}
        />
        
      </Link>
      { ( windowWidth < 480 ) 
      ? <p 
      id='hamb'
      className='hamb'
      onClick={ handleClick }
      >
        <i className="fas fa-bars hamb-icon"></i>
      </p>
      : null }

       { menu 
       ? <ul className="items navbar-nav align-items-center justify-content-center">
       <li className="nav-item mx-4 px-3">
         <Link to="/" className="nav-link">
           Inicio
         </Link>
       </li>
       <li className="nav-item mx-4">
         <Link to="/ProductList" className="nav-link">
           Confiteria
         </Link>
       </li>
       <li className="nav-item mx-4">
         <Link to="/Contact" className="nav-link">
           Contacto
         </Link>
       </li>
       <Link to="/cart" className="mx-5 botonA">
         <ButtonA>
           <span className="">
             <i className="fas fa-cart-plus " /> Carrito
           </span>
         </ButtonA>
       </Link>
   </ul> 
       : null
       }

      {
  console.log(document.querySelector('.hamb #hamb'))}
    
    </NavStyle>
  );
}
 
export default Navbar;

const NavStyle = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: right;
  align-items: center;
  transition: all 0.7s ease-in-out;
  background: rgba(0, 0, 0, 0.1);
  z-index: 3;

  .hamb{
    font-size: 2rem;    
    flex: 0 1 calc( 80% - 1rem );
    text-align: right;
    margin: 0 auto;

    .hamb-icon{
      border: 1px solid #fff;
      padding: 7px;
      border-radius: 5px;
      -webkit-box-shadow: inset 0px 0px 33px -13px rgba(0,0,0,1);
      -moz-box-shadow: inset 0px 0px 33px -13px rgba(0,0,0,1);
      box-shadow: inset 0px 0px 33px -13px rgba(0,0,0,1);
      transition: .3s ease-out;

      &:hover{
        background: #fff;
        color:#243B55;
        -webkit-box-shadow: -6px 7px 15px -7px rgba(0,0,0,1);
        -moz-box-shadow: -6px 7px 15px -7px rgba(0,0,0,1);
        box-shadow: -6px 7px 15px -7px rgba(0,0,0,1);
      }
    }
    @media ( min-width: 480px ) {
      display: none;
    }
  }

  .nav-link {
    text-transform: uppercase;
    color: var(--lightColor) !important;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: "Montserrat"!important, sans-serif ;
  }
  .items{ 
    display: flex;
    margin: 0 auto;
    flex: 0 1 calc( 80% - 1rem );
    justify-content: center;
    
    button{
      margin: 0 auto;
    }
    
    
  }
  .logo{
    margin-left: 10px;
    flex: 0 1 20%;
  }
  .textounico {
    font-size: 2.5rem;
  }

  @media (min-width:468px){
    .nav-link,
    .botonA,
    .botonB{
      font-size: 1.1rem;
    }
  }

  @media only screen and (min-width:1135px){
    .nav-link,
    .botonA,
    .botonB{
      font-size: 1.1rem;
    }
  }
`;

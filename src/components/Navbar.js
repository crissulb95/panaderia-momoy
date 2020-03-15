import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logosemidef.svg";
import styled from "styled-components";
import { ButtonA } from "./Button";
import '../App.css';

export default class Navbar extends Component {
  

  render() {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      prevScrollpos > currentScrollPos ? document.getElementById("navbar").style.top = "0" : document.getElementById("navbar").style.top = "-100%"
      prevScrollpos = currentScrollPos;
    }

    return (
      <NavStyle id='navbar' className="navbar fixed-top navbar-expand-sm navbar-dark px-sm-5 sobreTodo">
        <Link to="/">
          <img
            src={logo}
            alt="confiteria de momoy"
            className="navbar-brand pt-0 logoimg"
          />
          
        </Link>
        <ul className="navbar-nav align-items-center ml-auto">
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
      </NavStyle>
    );
  }
}

const NavStyle = styled.nav`

  
  transition: all 0.7s ease-in-out;
  background: rgba(0, 0, 0, 0.1);
  z-index: 3;
  .nav-link {
    text-transform: uppercase;
    color: var(--lightColor) !important;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: "Montserrat", sans-serif !important;
    transition: all 0.25s ease-in-out;
    &:hover {
      border-bottom: 1px solid var(--lightColor);
      padding-bottom: 3px;
    }
  }
  .textounico {
    font-size: 2.5rem;
  }

  @media only screen and (min-width:1300px){
    .logoimg ivg{
      width:10rem;
      height:auto;
    }

    .nav-link,
    .botonA,
    .botonB{
      font-size: 1.6rem;
    }
  }

  @media only screen and (min-width:1135px){
    .nav-link,
    .botonA,
    .botonB{
      font-size: 1.4rem;
    }
  }
`;

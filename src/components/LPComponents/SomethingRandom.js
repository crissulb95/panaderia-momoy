import React, { Component } from 'react'
import styled from "styled-components";
import { ButtonB } from "../Button";
import { Link } from 'react-router-dom';



export default class SomethingRandom extends Component {
  render() {
    return (
      <React.Fragment>
        <NewDiv className="d-flex align-items-center justify-content-center my-auto flex-column">
          <p className="display-4 text-center font-weight-bold">
            Tenemos toda variedad de productos
        </p>
          <Link to='/ProductList'><ButtonB className="mt-5 py-3">Visita nuestra confiteria</ButtonB></Link>
        </NewDiv>
      </React.Fragment>
    )
  }
}


const NewDiv = styled.div`
  background-color: var(--normalBlue) !important;
  height: 80vh;
  width: 30vw;
  position: absolute;
  top: 110%;
  right: 12%;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.19),
    5px 6px 10px rgba(0, 0, 0, 0.53);
  margin: auto;
`;

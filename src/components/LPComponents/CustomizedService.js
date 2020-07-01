import React, { Component } from "react";
import styled from "styled-components";
import Subtitle from "./SubTitle";
import { ButtonB } from "../Button";
import { Link } from 'react-router-dom';

export default class CustomizedService extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledDiv>
          <div className='d-flex align-items-center parte-3 text-center' >
            <div>
              <Subtitle name='Servicio personalizado' side='center mx-auto'/>
              <p className='mx-auto mt-5 col-9 lead' >
                <span className='font-weight-bold '>   La tendencia es hacia la completa satisfacción del cliente con la comida como punto focal. </span> 
                  Con la atmósfera adecuada, nuestros profesionales expertos en eventos catering pueden hacer que un evento se convierta 
                 en una ocasión especial y memorable. Una comida excelentemente preparada de por sí puede apelar a los sentidos del gusto, 
                 el olfato y la vista —incluso el tacto— pero la decoración y el ambiente perfectamente conjugados pueden ser la clave del éxito.
                    </p>
              <Link to='/default'>
                <ButtonB className='my-5 botonB px-5'>
                  Habla con nosotros
                        </ButtonB>
              </Link>
            </div>
          </div>
        </StyledDiv>
      </React.Fragment>
    );
  }
}

const StyledDiv = styled.div`
  padding: 2rem 4rem;
  height: 100vh;
  margin:0;
  background-color: rgba(0, 0, 0, 0.3);
`;

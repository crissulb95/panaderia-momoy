import React, { Component } from "react";
import Subtitle from './SubTitle';
import mapa from '../LPComponents/pictures/mapa.png';
import styled from "styled-components";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='parte-4'>
          <Subtitle name='Ven a la confiteria' side='left ml-5 pt-5' id='contacto' />
          <div className='d-flex py-5 my-5 fondo'>
            <div className='d-flex col-2 justify-content-center'>
              <div className='d-flex flex-column mt-5'>
                <DivIcons>
                  <AnchorNow href='https://www.facebook.com/CristianSulbaran' className='mx-auto' target="_blank">
                    <i className='fab fa-facebook display-1' />
                  </AnchorNow>
                </DivIcons>
                <DivIcons>
                  <AnchorNow href='https://twitter.com/cristiansulbar' className='mx-auto' target="_blank">
                     <i className='fab fa-twitter display-1' />
                  </AnchorNow>
                </DivIcons>
                <DivIcons>
                  <AnchorNow href='https://www.instagram.com/crissulb/' className='mx-auto' target="_blank">
                     <i className='fab fa-instagram display-1' /> 
                  </AnchorNow>
                </DivIcons>
              </div>
            </div>
            <div className='d-flex col-4 justify-content-center'>
              <a className='mt-5 ' href="https://www.google.com.ar/maps/place/Av.+Gral.+Las+Heras+2905,+C1425+ASG,+Buenos+Aires/@-34.5832798,-58.4027247,19z/data=!3m1!4b1!4m5!3m4!1s0x95bcb56276fe02cd:0xe1352b2d67f1ef62!8m2!3d-34.5832809!4d-58.4021775" target="_blank">
                <img src={mapa} alt='Maps direccion panaderia' className='mapa '/>
              </a>
            </div>
            <div className='d-flex col-4 justify-content-center flex-column'>
              <ParagraphNow className='display-4 ml-5'>011 22 53 1314</ParagraphNow>
              <ParagraphNow className='ml-5'>confiteridademomoy@gmail.com</ParagraphNow>
              <ParagraphNow className='ml-5'>Av. Las Heras 2905, piso 9, apt. 91.</ParagraphNow>
            </div>
          </div>
          <div className='d-flex flex-column mr-5'>
            <p className='text-right'>&copy;Creado en React por Cristian Sulbaran </p>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

const DivIcons = styled.div`
height:33%;
display:flex;
`
const AnchorNow = styled.a`
text-decoration: none;
color: var(--lightColor);
transition:transform 1s;
&:hover{
  transform:scale(1.1);
  color: var(--lightColor);
}
`

const ParagraphNow = styled.p`
 font-size:3rem;
}
`
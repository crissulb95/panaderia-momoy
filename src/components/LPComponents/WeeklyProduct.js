import React, { Fragment } from 'react';
import SubTitle from './SubTitle';
import { ButtonA, ButtonB } from "../Button";
import Logo from './bread.svg';
import { Link } from 'react-router-dom';

const WeeklyProduct = () => {
    return ( 
        
        <Fragment>
        <div className='medialuna align-items-center ' >
            <div className='pl-5 mt-5 pt-2 row'>
                <SubTitle name='Producto de la semana'/>
                <p className='ml-5 mt-5 col-4 lead' >
                        <span className='font-weight-bold '>Las medialunas de manteca</span> , más que tradicionales 
                    y clásicas entre las facturas argentinas. 
                    Se consumen en el desayuno o merienda, 
                    solas o rellenas con jamón cocido y queso. 
                    Muy recomendable es acompañarlas con un rico 
                    café con leche y sumergir la medialuna en la infusión antes de comerla.
                </p>
                <div>
                    <div className='row'>               {/* transformar el color del pan a blanco*/}
                        <img src={ Logo } alt='imagen de pan' style={{width: '35%', margin: '0 auto' }} />
                    </div>

                    <Link to='/default'>
                        <ButtonB className='ml-5 my-5 botonB'>
                        <i class="fas fa-bread-slice"></i> Quiero pedirlas
                        </ButtonB>
                    </Link>
                    <Link to='/ProductList'>
                        <ButtonA className='ml-5 my-5'>
                            <p className="botonA m-0">
                            <i class="fas fa-coffee"></i> Ver mas productos
                            </p>
                        </ButtonA>
                    </Link>
                </div>
            </div>
        </div>
    </Fragment>
     );
}
 
export default WeeklyProduct;

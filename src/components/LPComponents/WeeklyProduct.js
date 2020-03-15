import React, { Component } from 'react';
import SubTitle from './SubTitle';
import { ButtonA, ButtonB } from "../Button";
import { Link } from 'react-router-dom';

export default class WeeklyProduct extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='d-flex medialuna align-items-center ' >
                    <div className='pl-5'>
                        <SubTitle name='Producto de la semana'/>
                    <p className='ml-5 mt-5 col-4 lead' >
                            <span className='font-weight-bold '>Las medialunas de manteca</span> , más que tradicionales 
                        y clásicas entre las facturas argentinas. 
                        Se consumen en el desayuno o merienda, 
                        solas o rellenas con jamón cocido y queso. 
                        Muy recomendable es acompañarlas con un rico 
                        café con leche y sumergir la medialuna en la infusión antes de comerla.
                    </p>
                    <Link to='/default'>
                        <ButtonB className='ml-5 my-5 botonB'>
                            Quiero pedirlas
                        </ButtonB>
                    </Link>
                    <Link to='/ProductList'>
                        <ButtonA className='ml-5 my-5'>
                            <p className="botonA m-0">
                                Ver mas productos
                            </p>
                        </ButtonA>
                    </Link></div>
                    </div>
            </React.Fragment>
        )
    }
}

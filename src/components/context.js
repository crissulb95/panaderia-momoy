import React, { Component } from 'react';
import {productosDeTienda,detalleDeProducto} from './LPComponents/datosDeProducto';

const ConfiteriaContext = React.createContext();

class ConfiteriaProvider extends Component {
    state={
        productos: [],
        detalles: detalleDeProducto
    }

    componentDidMount() {
        this.setProducts();
        }

    setProducts = () => {
        let tempProducts = [];
        productosDeTienda.forEach(
            item => {
                const singleItem = { ...item };
                tempProducts = { ...tempProducts, singleItem };
            }
        );   

    this.setState(() => {
        return { productos: tempProducts };
    });
 }; 





    handleDetail = () => {
        console.log('hola desde detalles')
    }
    addToCart= () => {
        console.log('y esto desde el carrito de compras')
    }

    render() {
        return (
            <ConfiteriaContext.Provider value={{...this.state,
            detalles: this.handleDetail,
            carrito: this.addToCart
            }}>
                {this.props.children}
            </ConfiteriaContext.Provider>
        )
    }
}

const ConfiteriaConsumer = ConfiteriaContext.Consumer;

export {ConfiteriaProvider,ConfiteriaConsumer};
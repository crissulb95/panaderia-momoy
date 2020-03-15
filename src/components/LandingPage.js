import React, { Component } from 'react';
import WeeklyProduct from './LPComponents/WeeklyProduct';
import ProductStand from './LPComponents/ProductStand';
import CustomizedService from './LPComponents/CustomizedService';
import Contact from './LPComponents/Contact';
import SomethingRandom from './LPComponents/SomethingRandom';

export default class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <WeeklyProduct />
                <ProductStand />
                <CustomizedService />
                <Contact />
                <SomethingRandom />
            </React.Fragment>
        )
    }
}

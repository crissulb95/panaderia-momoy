import React, { Component, Fragment } from "react";
import Title from "./Title";
import { ConfiteriaConsumer } from "./context";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="la tienda" title="Confitería Momoy" />
            <div className="row">
              <ConfiteriaConsumer>
                {value => {                                
                  return value.productos.map(productos => {
                    return <Product key={productos.id} producto1={productos} />
                  });
                }}
              </ConfiteriaConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

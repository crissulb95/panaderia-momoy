import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { confiteriaConsumer } from "./context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.producto1;
    return (
      <ProductoCatalogo className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container "
            onClick={() => console.log("Hiciste click en la imagen")}
          >
            <Link to="/details">
              <img src={img} alt="Producto imagen" className="card-img-top" />
            </Link>
            <button
              className="card-btn"
              disabled={inCart}
              onClick={() => {
                console.log("Agregado al carrito");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {" "}
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          {/* Footer de cada articulo*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductoCatalogo>
    );
  }
}

Product.propTypes = {
  producto1: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductoCatalogo = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: black;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--normalBlue);
    border: none;
    color: var(--lightColor);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .card-btn {
    transform: translate(0, 0);
    transition: all 1s linear;
  }
  .card-btn:hover {
    color: var(--normalBlue);
    cursor: pointer;
  }
`;

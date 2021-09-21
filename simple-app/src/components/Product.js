import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart, rate, info } = this.props.product;
    return (
      <ProductWarpper className="my-3">
        <ProductConsumer>
          {(value) => (
            <div className="" onClick={() => value.handleDetail(id)}>
              {/* <Link to="/details">
                            <img src={img} alt="product" className="img-fluid img-responsive rounded product-image"/>
                        </Link> */}
                       
              <div className="row p-2 bg-white border rounded">
                <div className="col-md-3 mt-1">
                <Link to="/details">
                  <img
                    className="img-fluid img-responsive rounded product-image"
                    src={img}
                  />
                   </Link>
                </div>
               
                <div className="col-md-6 mt-1">
                  <h5>{title}</h5>
                  <div className="d-flex flex-row">
                    <div className="ratings mr-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span>{rate}</span>
                  </div>
                  <div className="mt-1 mb-1 spec-1">
                    <span>100% Original</span>
                  </div>
                  <div className="mt-1 mb-1 spec-1"></div>
                  <p className="text-justify text-truncate para mb-0">
                    {info}.<br></br>
                  </p>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                  <div className="d-flex flex-row align-items-center">
                    <h4 className="mr-1">Rp{price}</h4>
                  </div>
                  <h6 className="text-success">
                    Gratis Ongkkir Ke Seluruh Indonesia
                  </h6>
                  <div className="d-flex flex-column mt-4">
                  
                   
                  <Link to="/details" className="btn btn-primary btn-sm">
                  Details
                
                   </Link>
               
                    <button
                      className="btn btn-outline-primary btn-sm mt-2"
                      type="button" disabled={inCart ? true : false}
                      onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                      }}
                    >
                      <i className="fa fas-cart"></i>  {inCart ? (
                                <p className="text-capitalize" disabled>{" "} in cart</p>
                            ):(
                                <i className="fas fa-cart-plus"/>
                            )}
                    </button>
                  </div>
                </div>
              </div>
           
              {/* <button className="cart-btn" disabled={inCart ? true : false}
                            onClick={() => {
                                value.addToCart(id);
                                value.openModal(id);
                            }}
                        >
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>{" "} in cart</p>
                            ):(
                                <i className="fas fa-cart-plus"/>
                            )}
                        </button> */}
            </div>
          )}
        </ProductConsumer>
        {/* <div className="col-md-6 mt-1">
                      <h5>{title}</h5>
                          </div>
                          <div className="d-flex flex-row">
                        <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                  
                    </div> */}
        {/* Product Footer */}
        {/* <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">Rp.</span>{price}
                            </h5>
                </div> */}
      </ProductWarpper>
    );
  }
}

export default Product;
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWarpper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
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
  .img-container:hover card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transition: all 1s linear;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;

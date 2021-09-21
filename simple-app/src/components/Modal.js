import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-lg-12 text-capitalize"
                    >
                      <h5>Item Ditambahkan Ke Keranjang</h5>
                      <div className="row">
                        <div className="col-lg-3">
                          {" "}
                          <img
                            src={img}
                            className="img-fluid"
                            alt="product"
                          />{" "}
                        </div>
                        <div className="col-md-6 mt-1">
                          <h5>{title}</h5>
                          <h5 className="text-muted">price : Rp. {price}</h5>
                          <Link to="/" className="mr-2">
                        <ButtonContainer onClick={() => closeModal()}>
                          Lanjutkan Belanja
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Ke Keranjang
                        </ButtonContainer>
                      </Link>
                         
                        </div>
                      </div>

                      
                      
                    
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

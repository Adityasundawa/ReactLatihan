import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } =
            value.detailProduct;
          return (
            <div className="container-fluid">
              <div className="card card-body mt-4">
                {" "}
                <section className="mb-5">
                  <div className="row">
                    <div className="col-md-3 mb-4 mb-md-0">
                      <div id="mdb-lightbox-ui"></div>
                      <div className="mdb-lightbox">
                        <div className="mdb-lightbox">
                          <div className="row product-gallery mx-1">
                            <div className="col-12 mb-0">
                              <figure className="view overlay rounded z-depth-1">
                                <a href={img} data-size="710x823">
                                  <img
                                    src={img}
                                    className="img-fluid  z-depth-1"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5>{title}</h5>
                      <p className="mb-2 text-muted text-uppercase small">
                        {company}
                      </p>
                      <p>
                        <span className="mr-1">
                          <strong>Rp.{price}</strong>
                        </span>
                      </p>
                      <p className="pt-1">{info}.</p>
                      <Link to="/">
                        <button
                          type="button"
                          className="btn btn-primary btn-md mr-3 mb-2"
                        >
                          kembali
                        </button>
                      </Link>
                      
                      <button cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                        type="button"
                        className="btn btn-light btn-md mr-1 mb-2"
                      >
                        {inCart ? "Di Keranjang" : "Tambahkan Ke Keranjang"}
                      </button>
                    </div>
                  </div>
                </section>{" "}
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;

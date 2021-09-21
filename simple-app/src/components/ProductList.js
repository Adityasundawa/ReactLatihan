import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context';

class ProductList extends Component {
    render() {
        
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container-fluid">
                        <Title name="Produk" title="Kami"/>
                        
                        <div className="d-flex justify-content-center row">
                            <div className='col-md-10'>
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product=> {
                                        return <Product key={product.id} product={product}/>
                                    })
                                    
                                }}
                            </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;
import React, { Component } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';

class ProductList extends Component {
    render() {
        const { data, onAddToCart } = this.props;
        return (
            <div className='d-flex flex-wrap justify-content-around'>
                {
                    data.map((elem, index) => {
                        return <ProductListItem
                            key={index}
                            onAddToCart={()=> onAddToCart(elem.id)}
                            {...elem} />
                    })
                }
            </div>
        );
    }
}

export default ProductList;
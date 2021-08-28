import React, { Component } from 'react';
import './product.css'
class ProductListItem extends Component {
    render() {
        const {title, price, rebate, image, onAddToCart} = this.props;
        return (
            <div className="d-flex flex-column cart-product m-2 ">
                <img style ={{
                    width: '100%',
                    height: 200
                }} src={image}/>
                <div className="d-flex flex-column">
                    <span>title: {title}</span>
                    <span>price {price}$ </span>
                    <span>rebate {rebate}$</span>
                </div>
                <div>
                    <button onClick={onAddToCart}>add to cart</button>
                </div>
            </div>
        );
    }
}

export default ProductListItem;
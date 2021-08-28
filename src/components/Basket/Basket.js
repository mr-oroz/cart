import React, { Component } from 'react';

class Basket extends Component {
    render() {
        const { basket, onDelete } = this.props;
        if(basket.length === 0 ) {
            return <h1 style={{textAlign: 'center'}}>Корзина пустой</h1>
        }
        return (
            <div className="d-flex flex-wrap justify-content-around">
                {
                    basket.map((elem, index) => {
                        return (
                            <div className="d-flex flex-column cart-product ">
                                <img
                                    style={{
                                        width: '100%',
                                        height: 200
                                    }}
                                    src={elem.cart.image} />
                                <div className='d-flex flex-column'>
                                    <span>title: {elem.cart.title}</span>
                                    <span>price {elem.cart.price}$ </span>
                                    <span>rebate {elem.cart.rebate}$</span>
                                </div>
                                <div>
                                    <button onClick={() => onDelete(elem.cart.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Basket;
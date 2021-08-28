import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const {basket} = this.props;
        return (
            <div className="d-flex justify-content-around align-content-center">
                <Link to='/'><h2>Logo</h2></Link>
                <ul className='d-flex justify-content-around'>
                    <Link to='/menu'>
                        <li>Menu</li>
                    </Link>
                    <Link to='/basket'>
                        <li>Cart {basket.length}</li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default Header;
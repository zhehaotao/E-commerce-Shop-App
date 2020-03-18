import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: { imageUrl, price, name, quantity }}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' src={imageUrl} />
    </div>
    <div className='name'>{name}</div>
    <div className='quantity'>{quantity}</div>
    <div className='price'>{price}</div>
    <span className='remove-button'>&#10005;</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckoutItem);
import React from 'react'
import {CartItemContainer, CartItemImage, ItemDetailsContainer} from './cart-item.styles'

const cartItem = ({item:{imageUrl,price, name, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <span className='name'>
                {name}
            </span>
            <span className='price'>
                {quantity} x Rs.{price}
            </span>
        </ItemDetailsContainer>

    </CartItemContainer>
)

export default cartItem
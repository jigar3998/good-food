import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer} from './cart-dropdown.styles'



const CartDropdown = ({cartItems, history, dispatch}) =>(
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length?
                cartItems.map(cartItem => <CartItem key = {cartItem.id} item = {cartItem}/> )
                :
                <EmptyMessageContainer>Your Cart is Empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout') 
            dispatch(toggleCartHidden())
            }}>
            PROCEED TO ORDER
        </CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
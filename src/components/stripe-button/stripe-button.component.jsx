import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import FoodIcon from '../../assets/food.ico'

const StripeCheckoutButton=({price})=>{
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51HpxPcBqncQNMIhIUreXOWfNfJNstcdyjc6i7tWrmIlDNqANFPzqY1x994tQpQ5wOAuSXfYUGY90PB131YMP1jNh00JuLEhGPd'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='PAY NOW'
            name='Good-Food Ltd.'
            currency='INR'
            billingAddress
            shippingAddress
            image= {FoodIcon}
            description={`Your total is Rs.${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token = {onToken}
            stripeKey= {publishableKey}
        />
    )
}

export default StripeCheckoutButton
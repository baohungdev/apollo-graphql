import React from 'react'
import { flowRight as compose } from 'lodash'
import { graphql } from 'react-apollo'
import CheckoutComponent from './checkout.component'
import { gql } from 'apollo-boost'

export const GET_CART_ITEMS = gql`
   {
      cartItems @client
      cartTotal @client
   }
`

const CheckoutPageContainer = ({ data: { cartItems, cartTotal } }) => {
   console.log(cartItems)
   console.log(cartTotal)
   return <CheckoutComponent total={cartTotal} cartItems={cartItems} />
}

export default compose(graphql(GET_CART_ITEMS))(CheckoutPageContainer)

import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import CartDropdown from './cart-dropdown.component'
import { flowRight as compose } from 'lodash'

export const GET_CART_ITEMS = gql`
   {
      cartItems @client
   }
`

const TOGGLE_CART_HIDDEN = gql`
   mutation ToggleCartHidden {
      toggleCartHidden @client
   }
`

const CartDropDownContainer = ({ data: { cartItems }, toggleCartHidden }) => (
   <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
)

export default compose(
   graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' }),
   graphql(GET_CART_ITEMS)
)(CartDropDownContainer)

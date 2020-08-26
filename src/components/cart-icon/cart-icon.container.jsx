import React from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CartIcon from './cart-icon.component'
import { flowRight as compose } from 'lodash'

const TOGGLE_CART_HIDDEN = gql`
   mutation ToggleCartHidden {
      toggleCartHidden @client
   }
`

const GET_ITEM_COUNT = gql`
   {
      itemCount @client
   }
`

const CartIconContainer = ({ data: { itemCount }, toggleCartHidden }) => {
   console.log(itemCount)

   return <CartIcon itemCount={itemCount} toggleCartHidden={toggleCartHidden} />
}
export default compose(
   graphql(GET_ITEM_COUNT),
   graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' })
)(CartIconContainer)

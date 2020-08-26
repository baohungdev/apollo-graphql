import React from 'react'
import { graphql } from 'react-apollo'
import CollectionItem from './collection-item.component'
import { gql } from 'apollo-boost'
import { flowRight as compose } from 'lodash'

const ADD_ITEM_TO_CART = gql`
   mutation AddItemToCart($item: Item!) {
      addItemToCart(item: $item) @client
   }
`

const CollectionItemContainer = (props) => {
   const { addItemToCart } = props
   return (
      <CollectionItem
         {...props}
         addItem={(item) => addItemToCart({ variables: { item } })}
      />
   )
}

export default compose(graphql(ADD_ITEM_TO_CART, { name: 'addItemToCart' }))(
   CollectionItemContainer
)

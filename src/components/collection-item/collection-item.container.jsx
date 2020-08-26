import React from 'react'
import { Mutation } from 'react-apollo'
import CollectionItem from './collection-item.component'
import { gql } from 'apollo-boost'

const ADD_ITEM_TO_CART = gql`
   mutation AddItemToCart($item: Item!) {
      addItemToCart(item: $item) @client
   }
`

const CollectionItemContainer = (props) => (
   <Mutation mutation={ADD_ITEM_TO_CART}>
      {(addItemToCart) => (
         <CollectionItem
            {...props}
            addItem={(item) => addItemToCart({ variables: { item } })}
         />
      )}
   </Mutation>
)

export default CollectionItemContainer

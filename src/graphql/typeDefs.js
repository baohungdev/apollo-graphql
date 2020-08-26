import { gql } from 'apollo-boost'

export const typeDefs = gql`
   extend type Item {
      quantity: Int
   }
   extend type Mutation {
      ToggleCartHidden: Boolean!
      AddItemToCart(item: Item!): [Item]!
      RemoveItemFromCart(item: Item!): [Item]!
      ClearItemFromCart(item: Item!): [Item]!
   }
`

import React from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import Header from './header.component'
import { flowRight as compose } from 'lodash'

const GET_CART_HIDDEN = gql`
   {
      cartHidden @client
   }
`

const HeaderContainer = ({ data: { cartHidden } }) => (
   <Header hidden={cartHidden} />
)

export default compose(graphql(GET_CART_HIDDEN))(HeaderContainer)

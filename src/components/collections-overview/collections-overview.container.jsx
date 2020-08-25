import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Spinner from '../spinner/spinner.component'
import CollectionsOverview from './collections-overview.component'

const GET_COLLECTIONS = gql`
     {
          collections {
               id
               title
               items {
                    id
                    name
                    price
                    imageUrl
               }
          }
     }
`
const CollectionsOverViewContainer = () => (
     <Query query={GET_COLLECTIONS}>
          {({ data, loading, error }) => {
               if (loading) return <Spinner />
               return <CollectionsOverview collections={data.collections} />
          }}
     </Query>
)

export default CollectionsOverViewContainer

import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Spinner from '../../components/spinner/spinner.component'
import CollectionPage from './collection.component'

const GET_COLLECTION_BY_TITLE = gql`
   query getCollectionsByTitle($title: String!) {
      getCollectionsByTitle(title: $title) {
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

const CollectionPageContainer = ({ match }) => {
   return (
      <Query
         query={GET_COLLECTION_BY_TITLE}
         variables={{ title: match.params.collectionId }}
      >
         {({ loading, data }) => {
            if (loading) return <Spinner />
            return <CollectionPage collection={data.getCollectionsByTitle} />
         }}
      </Query>
   )
}

export default CollectionPageContainer

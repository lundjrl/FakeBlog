import { gql } from 'graphql-request'

export const POST_COLLECTION_FRAGMENT = gql`
  fragment postCollectionCommon on PostEntityResponseCollection {
    data {
      id
      attributes {
        Title
        Content
      }
    }
  }
`

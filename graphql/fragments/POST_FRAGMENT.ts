import { gql } from 'graphql-request'

export const POST_FRAGMENT = gql`
  fragment postCommon on PostEntityResponse {
    data {
      id
      attributes {
        Title
        Content
      }
    }
  }
`

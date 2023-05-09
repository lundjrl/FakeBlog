import { gql } from 'graphql-request'

import { POST_COLLECTION_FRAGMENT } from './fragments/POST_COLLECTION_FRAGMENT'

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      ...postCollectionCommon
    }
  }
  ${POST_COLLECTION_FRAGMENT}
`

import { gql } from 'graphql-request'

import { POST_FRAGMENT } from './fragments/POST_FRAGMENT'

export const GET_SINGLE_POST = gql`
  query getSinglePost($id: ID) {
    post(id: $id) {
      ...postCommon
    }
  }
  ${POST_FRAGMENT}
`

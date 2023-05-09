import { GET_ALL_POSTS } from '~/graphql/GET_ALL_POSTS'
import { GET_SINGLE_POST } from '~/graphql/GET_SINGLE_POST'
import type { POST_DATA_Type } from '~/schema/POST_SCHEMA'
import { POST_DATA_SCHEMA } from '~/schema/POST_SCHEMA'

import { parseStringToSanitizedMarkdown } from './ParsingService'
import { runQuery } from './SearchQueryService'

export const getPost = async (id: string): Promise<POST_DATA_Type> => {
  const data = await runQuery(GET_SINGLE_POST, { id })

  const postData = data?.['post'].data as POST_DATA_Type

  // Parse the post with Zod to make sure it fits our model
  const parsedData = POST_DATA_SCHEMA.parse(postData)
  const { Content } = parsedData.attributes
  parsedData.attributes.Content = parseStringToSanitizedMarkdown(Content)

  return parsedData
}

export const getAllPosts = async (): Promise<POST_DATA_Type[]> => {
  const data = await runQuery(GET_ALL_POSTS, {})

  const postData = data?.['posts'].data as POST_DATA_Type[]

  // Parse the post with Zod to make sure it fits our model
  return postData
    .filter(post => POST_DATA_SCHEMA.safeParse(post).success)
    .map(post => {
      const { Content } = post.attributes
      post.attributes.Content = parseStringToSanitizedMarkdown(Content)
      return post
    })
}

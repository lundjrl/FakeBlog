import type { RequestDocument, Variables } from 'graphql-request'
import { GraphQLClient } from 'graphql-request'

// Returns a GQL client for CRUD ops
export const initClient = () => {
  const url = process.env.CMS_URL ?? ''
  const token = process.env.CMS_TOKEN ?? ''
  const config = {
    // errorPolicy: 'all',
    headers: {
      authorization: `Bearer ${token}`,
    },
  }

  return new GraphQLClient(url, config)
}

export const runQuery = async (query: RequestDocument, variables: Variables): Promise<unknown | null> => {
  try {
    const data = await initClient().request(query, variables)

    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

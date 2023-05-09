import React from 'react'

import { Card } from '~/components/Card'
import type { POST_DATA_Type } from '~/schema/POST_SCHEMA'
import { getAllPosts } from '~/services/DataService'

export const revalidate = 60

const Page: () => Promise<JSX.Element> = async () => {
  const posts: POST_DATA_Type[] = await getAllPosts()

  return (
    <main className="flex flex-col items-center w-full min-h-screen p-24">
      <div className="flex flex-col w-full text-center gap-y-6">
        <h1>Welcome to the FakeBlog!</h1>
        <h2>All posts:</h2>
      </div>

      <div className="flex flex-row flex-wrap w-full gap-3">
        {posts.map(el => {
          const { attributes, id } = el
          const { Content, Title } = attributes
          const href = `/posts/${id}`
          return <Card key={id} id={id} content={Content} href={href} title={Title} />
        })}
      </div>
    </main>
  )
}

export default Page

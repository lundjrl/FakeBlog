import { CTAButton } from '~/components/CTAButton'
import { HTMLTextBlock } from '~/components/HTMLTextBlock'
import { getAllPosts, getPost } from '~/services/DataService'

interface Props {
  params: {
    id: string
  }
}

const Page: (props: Props) => Promise<JSX.Element> = async ({ params }) => {
  const { id } = params

  const data = await getPost(id)

  return (
    <article className="prose prose-headings:text-slate-300 text-slate-300 lg:prose-xl">
      <HTMLTextBlock content={data.attributes.Content} />
      <CTAButton href="/" text="Back To Home" />
    </article>
  )
}

export const generateStaticParams = async () => {
  const data = await getAllPosts()

  return data.map(el => ({ id: el.id }))
}

export default Page

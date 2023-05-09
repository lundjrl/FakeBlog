import Image from 'next/image'
import Link from 'next/link'

import { CTAButton } from './CTAButton'
import { HTMLTextBlock } from './HTMLTextBlock'

interface Props {
  id: string
  content: string
  href: string
  title: string
}

export const Card: React.FC<Props> = ({ id, content, href, title }) => (
  <Link className="max-w-2xl mx-auto no-underline" href={href}>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          className="w-full rounded-t-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt={title}
          height={300}
          width={300}
        />
      </a>
      <div className="p-5">
        <Link href={`/posts/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-3 dark:text-white">{title}</h5>
        </Link>
        <p className="mb-2 line-clamp-5 text-ellipsis">
          <HTMLTextBlock content={content} />
        </p>
        <CTAButton href={href} text="Read More" />
      </div>
    </div>
  </Link>
)

'use client'

import Image from 'next/image'

import { CTAButton } from './CTAButton'
import { HTMLTextBlock } from './HTMLTextBlock'

interface Props {
  content: string
  href: string
  title: string
}

export const Card: React.FC<Props> = ({ content, href, title }) => (
  <div className="relative max-w-sm mx-auto transition-all duration-200 ease-in-out delay-[10] bg-white border border-gray-200 rounded-lg shadow-md hover:-translate-y-6 dark:bg-gray-800 dark:border-gray-700">
    <Image
      className="w-full rounded-t-lg"
      src="https://flowbite.com/docs/images/blog/image-1.jpg"
      alt={title}
      height={300}
      width={300}
      priority
    />
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-3 dark:text-white">{title}</h5>
      <div className="mb-2 line-clamp-5 text-ellipsis">
        <HTMLTextBlock content={content} />
      </div>
      <CTAButton className="after:absolute after:inset-0" href={href} text="Read More" />
    </div>
  </div>
)

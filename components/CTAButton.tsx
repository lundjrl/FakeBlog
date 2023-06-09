import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface Props extends LinkProps {
  className?: string
  text: string
}

export const CTAButton: React.FC<Props> = ({ className = '', href, text }) => (
  <Link
    href={href}
    className={twMerge(
      'inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white no-underline bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      className,
    )}>
    {text}
    <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"></path>
    </svg>
  </Link>
)

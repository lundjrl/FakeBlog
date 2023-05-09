import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <section className="mx-4 my-4 md:mx-10 lg:mx-40 md:my-10 lg:my-20">{children}</section>
)

export default Layout

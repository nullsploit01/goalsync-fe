import { FC, ReactNode } from 'react'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <div className="h-screen">{children}</div>
}

export default Layout

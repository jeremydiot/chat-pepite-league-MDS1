import Navbar from './navbar'
import Sidebar from './sidebar'

function Layout ({ children }) {
  return (
    <div>
      <Sidebar />
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
import Navbar from './navbar'
import Sidebar from './sidebar'

function Layout ({ children }) {
  return (
    <layout>
      <Sidebar />
      <div style={{height:"100%", width:"100%", display:"flex", flexDirection:"column"}}>
        <Navbar />
        {children}
      </div>

    </layout>
  )
}

export default Layout
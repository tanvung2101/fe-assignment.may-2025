import { useState } from 'react'
import { FiGrid, FiHelpCircle, FiFileText, FiEdit3, FiDatabase } from 'react-icons/fi'
import { BsBoxes, BsLayers, BsStars } from 'react-icons/bs'

const menuItems = [
  { name: 'Overview', icon: <FiGrid /> },
  { name: 'Inquiries', icon: <FiHelpCircle /> },
  { name: 'Estimator', icon: <FiFileText /> },
  { name: 'Projects', icon: <FiEdit3 /> },
  { name: 'Settings', icon: <FiDatabase /> },
]

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <aside className={`bg-white shadow-md p-4 h-full transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex justify-between items-center mb-6">
        {!isCollapsed && <h2 className="text-xl font-bold">ABC Company</h2>}
        <button onClick={toggleSidebar} className="text-gray-600">
          {isCollapsed ? '➡️' : '⬅️'}
        </button>
      </div>

      <nav className="space-y-4">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="flex items-center gap-4 text-gray-600 hover:text-blue-600"
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span>{item.name}</span>}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4">
        <p className={`text-xs text-gray-500 ${isCollapsed ? 'hidden' : 'block'}`}>© River Flow Solutions</p>
      </div>
    </aside>
  )
}

export default Sidebar

import { useState } from 'react'
import layer from '../images/Layer_1.png'
import layer1 from '../images/Layer_1(1).png'
import BsPencilSquare from '../images/Vector(2).png'
import iconOverview from '../images/Vector.png'
import iconInquiries from '../images/Group.png'
import iconEstimator from '../images/Group(1).png'
import iconProjects from '../images/Vector(1).png'
import iconAdministrations from '../images/Vector(3).png'
import iconDocumentation from '../images/Group(2).png'
import iconDescription from '../images/Vector(4).png'
import logo from '../images/b8a5d69f3c86873d84374208c1a9cd636984f521.jpg'
import Sidebar from '../components/Sidebar'
import { useSidebar } from '../context/SidebarContext'

const menu = [
  {
    id: 1,
    name: "Overview",
    icon: iconOverview,
  },
  {
    id: 2,
    name: "Inquiries",
    icon: iconInquiries,
  },
  {
    id: 3,
    name: "Estimator",
    icon: iconEstimator,
  },
  {
    id: 4,
    name: "Projects",
    icon: iconProjects,
  },
  {
    id: 5,
    name: "Administrations",
    icon: iconAdministrations,
  },
  {
    id: 6,
    name: "Documentation",
    icon: iconDocumentation,
  },
]

export default function TicketName() {
 const { toggleSidebar } = useSidebar();
  return (
    <div class="flex h-screen flex-col md:flex-row">
      <Sidebar/>

      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        <button className="md:hidden mb-4 px-3 py-2 bg-blue-600 text-white rounded" onClick={toggleSidebar}>
          ☰ Menu
        </button>
        <div className="text-sm text-gray-500 mb-6">
          Project &gt; UrapidLoan Project &gt;{' '}
          <span className="font-medium text-gray-800">[Ticket name]</span>
        </div>
        <div className='w-full border-1 border-gray-500/20'></div>

        <div className="bg-white p-4 rounded mb-4">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <div className='flex gap-2'>
            <img className='w-2 h-2 mt-1' alt='iconDescription' src={iconDescription} />
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua...
            </p>
          </div>

          <div className='flex gap-2'>
            <img className='w-2 h-2 mt-1' alt='iconDescription' src={iconDescription} />
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua...
            </p>
          </div>
          <a href="#" className="text-blue-600 text-sm mt-2 inline-block">
            + Add sub-tickets
          </a>

          <div className="bg-white p-4 rounded md:mt-4">
            <h3 className="text-lg font-semibold mb-4">Activity</h3>
            <ul className="text-sm">
              <li className="flex items-center gap-2">
                <div>
                  <div className='flex gap-3'>
                    <span className="mt-[3px] w-3 h-2 md:h-3 bg-green-500 rounded-full"></span>
                    RFX Phu Nguyen Submitted to underwriting - 2025-04-04 13:00:38
                  </div>
                  <div className='hidden md:inline-block w-[2px] h-6 bg-gray-700 ml-1'></div>
                </div>
              </li>
              <li className="flex items-center gap-2 max-sm:mt-2">
                <div>
                  <div className='flex gap-3'>
                    <span className="mt-[3px] w-3 h-2 md:h-3 bg-blue-500 rounded-full"></span>
                    ABC Trang Nguyen approval - 2025-04-04 11:10:38
                  </div>
                  <div className='hidden md:inline-block w-[2px] h-6 bg-gray-700 ml-1'></div>
                </div>
              </li>
              <li className="flex items-center gap-2 max-sm:mt-2">
                <div>
                  <div className='flex gap-3'>
                    <span className="mt-[3px] w-3 h-2 md:h-3 bg-green-500 rounded-full"></span>
                    RFX Phu Nguyen Submitted to underwriting - 2025-04-04 08:00:00
                  </div>
                  <div className='hidden md:inline-block w-[2px] h-6 bg-gray-700 ml-1'></div>
                </div>
              </li>
              <li className="flex items-center gap-2 max-sm:mt-2">
                <div>
                  <div className='flex gap-3'>
                    <span className="mt-[3px] w-3 h-2 md:h-3 bg-blue-500 rounded-full"></span>
                    ABC Trang Nguyen create an issue - 2025-04-03 17:10:38
                  </div>
                  <div className='hidden md:inline-block w-[2px] h-6 bg-gray-700 ml-1'></div>
                </div>
              </li>
            </ul>
            <textarea placeholder="Leave a comment..." className="w-full mt-4 p-2 border rounded resize-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  
  )}
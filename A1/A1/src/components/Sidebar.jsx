import layer from '../images/Layer_1.png'
import layer1 from '../images/Layer_1(1).png'
import BsPencilSquare from '../images/Vector(2).png'
import iconOverview from '../images/Vector.png'
import iconInquiries from '../images/Group.png'
import iconEstimator from '../images/Group(1).png'
import iconProjects from '../images/Vector(1).png'
import iconAdministrations from '../images/Vector(3).png'
import iconDocumentation from '../images/Group(2).png'
// import iconDescription from '../images/Vector(4).png'
import logo from '../images/b8a5d69f3c86873d84374208c1a9cd636984f521.jpg'
import { useState } from 'react'
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

const Sidebar = () => {
   const { sidebarOpen, toggleSidebar } = useSidebar();
  return (
   <div className={`md:w-24 md:hover:w-64 group md:transition-all w-full bg-white p-6 flex flex-col justify-between md:static fixed z-50 top-0 left-0 h-full transform-all transition duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
           }`}>
           <div>
             <div className="flex justify-between items-center">
               <div className='flex gap-2 mb-4'>
                 <img className='w-12 h-12' alt='' src={logo}/>
                 <div className='md:hidden md:group-hover:inline-block hover:text-blue-500'>
                   <h2 className="text-lg font-bold mb-[2px] text-[#005B86]">ABC Company</h2>
                   <h5 className='text-sm text-[#005B86]'>Lisa Rose</h5>
                 </div>
               </div>
               <button className="md:hidden text-gray-600" onClick={toggleSidebar}>
                 ✖
               </button>
             </div>
             <nav className="space-y-5">
               {menu.slice(0, 4).map((item, idx) => (
                 <a
                   key={idx}
                   href="#"
                   className={`flex items-center gap-6 ${item.name === 'Projects' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
                     }`}
                 >
                   <img alt={item.name} src={item.icon} />
                   <span className='md:hidden md:group-hover:inline-block md:group-hover:text-black'>
                       {item.name}
                   </span>
                 </a>
               ))}
             </nav>
           </div>
           <div className=''>
             <div className="space-y-5">
               {menu.slice(4, 6).map((item, idx) => (
                 <a
                   key={idx}
                   href="#"
                   className={`flex items-center gap-6 ${item.name === 'Projects' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
                     }`}
                 >
                   <img alt={item.name} src={item.icon} />
                   <span className='md:hidden md:group-hover:inline-block'>{item.name}</span>
                 </a>
               ))}
             </div>
             <div className='space-y-5 mt-6 flex flex-col'>
               <div className='flex items-center gap-6 '>
                 <img className='w-7 h-7' src={layer} alt='layout' />
                 <img className='w-20 h7 md:hidden md:group-hover:inline-block' src={layer1} alt='layout' />
                 <div className='md:hidden md:group-hover:inline-block'>
                   <img className='w-5 h-5' src={BsPencilSquare} alt='icon BsPencilSquare' />
                 </div>
               </div>
             </div>
           </div>
  </div>
  );
};

export default Sidebar;

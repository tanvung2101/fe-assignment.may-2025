import iconSearch from '../images/Vector(5).png'
import iconCart from '../images/Vector(6).png'
import BhevronLeft from '../images/Group(3).png'


const workPackages = [
    { id: 1, title: 'Work package 1', description: 'Define system structure, technology stack, and integration flow. Includes do...' },
    { id: 2, title: 'Work package 2', description: 'Build a modern single-page application (SPA) using SvelteKit.' },
    { id: 3, title: 'Work package 3', description: 'Set up continuous integration and deployment pipeline using GitHub.' },
    { id: 4, title: 'Work package 4', description: 'Identify and document business processes, user roles, and key features.' },
    { id: 5, title: 'Work package 5', description: 'Define overall architecture, services layout, tech stack, and database strategy.' },
    { id: 6, title: 'Work package 6', description: 'Design complex data relationships, event flows (CQRS/Event Sourcing).' },
    { id: 7, title: 'Work package 7', description: 'Deliver wireframes and high-fidelity designs using Figma.' },
    { id: 8, title: 'Work package 8', description: 'Develop frontend using SvelteKit, integrated with a CMS like Directus.' },
    { id: 9, title: 'Work package 9', description: 'Implement domain-driven backend API with authentication, user roles, and ...' },
];

const categories = [
    'All Work Packages',
    'Architectural WPs',
    'Development WPs',
    'Operation WPs',
    'Basic',
    'Comprehensive',
    'Advanced',
];


const ItemPackages = () => {
    return (
        <div className="flex flex-col mt-4 md:pl-8 pb-10">
            <div className="text-2xl mb-6">Work Packages (WP)</div>
            <div className="flex flex-row gap-8 max-sm:flex-col">
                <div>
                    
                    <div className='p-1 flex justify-between gap-2 border-[1px] border-gray-200 rounded-sm'>
                        <button className='bg-blue-100 text-[14px] whitespace-nowrap py-2 px-4 rounded-sm'>RFX WPs</button>
                        <button className='text-[14px] whitespace-nowrap py-2 px-4 rounded-sm'>Custom WPs</button>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg hover:block">Categories</h3>
                        <ul className="mt-2 space-y-1">
                            {categories.map((cat) => (
                                <li key={cat} className="text-[14px] text-gray-700 hover:text-blue-600 cursor-pointer hover:block pb-2 border-b-[1px] border-b-gray-300/100">
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <input className="w-full p-1 border-[1px] border-[#D3D3D3] rounded-sm" />
                        <img className='absolute top-1/3 left-4' src={iconSearch} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {workPackages.map((wp) => (
                            <div key={wp.id} className="bg-white p-4 rounded-md shadow hover:shadow-lg transition">
                                <h2 className="text-lg font-semibold mb-2">{wp.title}</h2>
                                <p className="text-sm text-gray-600 line-clamp-2">{wp.description}</p>
                                <div className="mt-4 flex justify-between">
                                    <div className="flex space-x-2">
                                        <button className="bg-[#E2F5F9] p-1"><img src={BhevronLeft}/></button>
                                        <button className="bg-[#E2F5F9] p-1"><img src={BhevronLeft}/></button>
                                    </div>
                                    
                                </div>
                                <div className='flex justify-between items-center mt-4'>
                                    <button className="px-4 py-2 rounded-sm text-[16px] text-[#005B86] font-bold bg-[#F3F4F6]">View Detail</button>
                                    <img className='w-5 h-5' src={iconCart}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ItemPackages;

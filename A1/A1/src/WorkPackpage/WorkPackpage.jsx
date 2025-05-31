import Sidebar from "../components/Sidebar";
import ItemPackages from "../components/ItemPackages";
import iconView from '../images/Group(4).png'
import { useSidebar } from "../context/SidebarContext";
import { RxHamburgerMenu } from "react-icons/rx";


export default function WorkPackpage() {
    const { toggleSidebar } = useSidebar();
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-6">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex justify-between items-center gap-4 border-b-[2px] border-b-[#D3D3D3]">
                        <button className="md:hidden px-3 py-2 bg-blue-600 text-white rounded" onClick={toggleSidebar}>
                            ☰
                        </button>
                        <div className="text-sm text-gray-500 md:mb-6">
                            <div>Estimator &gt; <span className="text-[#005B86]">Work Packages</span> &gt;{' '}</div>
                        </div>
                    </div>
                    <button className="flex justify-between items-center gap-4 px-4 py-1 bg-[#005B86] text-white rounded-2xl hover:bg-blue-700">
                        <img className="w-4 h-4" src={iconView} />
                        View Summary
                    </button>
                </div>
                <ItemPackages />
                <div className="flex justify-between items-center mt-4 px-4 pb-8">
                    <div className='flex justify-center items-center mt-4'>
                        <RxHamburgerMenu className="text-[#005B86]"/>
                        <button className="px-4 py-2 rounded-sm text-[16px] text-[#005B86]">How to add custom WPs</button>
                    </div>
                    <button className="px-4 py-2 rounded-lg border-[1px] border-[#005A86] hover:bg-[#005A86] hover:text-amber-50 text-[#005A86]">
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
}

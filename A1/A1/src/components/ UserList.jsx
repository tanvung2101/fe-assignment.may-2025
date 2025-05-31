import { useState } from "react";
import UserPic from '../images/Userpic.png'
import { GoChevronLeft, GoChevronRight, GoChevronDown } from "react-icons/go";
import { PiArrowsClockwise } from "react-icons/pi";

const users = [
    { id: "L00001", image: UserPic, name: "David Nguyen", phone: '(322) 243-3452', email: 'david.nguyen@gmail.com', type: "Loan Officer", experience: "5 years", status: "Active" },
    { id: "UW00001", image: UserPic, name: "Ms. Jennie Pink", phone: '(322) 243-3452', email: 'jenniepink@gmail.com', type: "Underwriter", experience: "5 years", status: "Active" },
    { id: "LP00001", image: UserPic, name: "Mr. Pep Guardiola", phone: '(322) 243-3452', email: 'pepguardiola@gmail.com', type: "Loan Processor", experience: "5 years", status: "Active" },
    { id: "AD00001", image: UserPic, name: "Mr. Bruno Mar", phone: '(322) 243-3452', email: 'brunomors@gmail.com', type: "Admin", experience: "5 years", status: "Active" },
    { id: "ME00001", image: UserPic, name: "Mr. David Beckham", phone: '(322) 243-3452', email: 'davidbeckham@gmail.com', type: "Member", experience: "5 years", status: "Active" },
    { id: "L00001", image: UserPic, name: "David Nguyen", phone: '(322) 243-3452', email: 'david.nguyen@gmail.com', type: "Loan Officer", experience: "5 years", status: "Active" },
];

export default function UserList({ setSelectedUser }) {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 3;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex flex-col justify-between overflow-x-auto min-h-screen border-r-[1px] border-r-[#767676]">
                <div>
                    <h2 className="text-xl text-[#294172] font-bold p-4 flex gap-3 items-center">43 USERS
                        <PiArrowsClockwise className="text-2xl"/>
                    </h2>
                    <div className="grid grid-cols-12 gap-4 bg-[#DAE6EF] py-2 min-w-[850px]">
                        <div className="col-span-1 h-full">
                            <div className="w-full h-full">
                                <label className='block w-4 h-4 border-[2px] border-white bg-white rounded-sm m-auto mt-3.5'>
                                    <input className='hidden' type="checkbox" />
                                </label>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col justify-end">
                                <span className='text-[14px] font-medium text-[#111928]'>User Name</span>
                                <span className='text-[14px] font-medium text-[#111928]'>User Id</span>
                            </div>
                        </div>
                        <div className="col-span-3"> <span className='text-[14px] font-medium text-[#111928]'>Contact Info</span></div>
                        <div className="col-span-2">
                            <div className="">
                                <span className='text-[14px] font-medium text-[#111928]'>Type</span>
                            </div>
                        </div>
                        <div className="col-span-2"> <span className='text-[14px] font-medium text-[#111928]'>Experience</span></div>
                        <div className="col-span-1"> <span className='text-[14px] font-medium text-[#111928]'>Status</span></div>
                    </div>
                    {users.map((user, index) =>
                        <div class="grid grid-cols-12 gap-4 py-2 min-w-[850px]">
                            <div className="col-span-1 h-full">
                                <div className="w-full h-full">
                                    <label className='block w-4 h-4 border-[2px] border-gray-200 bg-white rounded-sm m-auto mt-3.5'>
                                        <input className='hidden' type="checkbox" />
                                    </label>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="flex items-center gap-4">
                                    <div className='w-8 h-8 rounded-full'>
                                        <img className="w-full h-full" src={UserPic} />
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <span className='text-[14px] font-medium text-[#111928]'>{user.name}</span>
                                        <span className='text-[14px] font-[400] text-[#637381]'>{user.id}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="flex flex-col justify-end">
                                    <span className='text-[14px] font-[400] text-[#111928]'>{user.phone}</span>
                                    <span className='text-[14px] font-[400] text-[#637381]'>{user.email}</span>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span className='text-[14px] font-[400] text-[#111928]'>{user.type}</span>
                            </div>
                            <div className="col-span-2">

                                <span className='text-[14px] font-[400] text-[#111928]'>{user.experience}</span>

                            </div>
                            <div className="col-span-1">

                                <span className='text-[14px] font-[400] text-[#43A047] bg-[#F6FFED] py-1'>{user.status}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between px-6 mb-4">
                    <div className="flex items-center justify-around gap-4">
                        <div className="px-3 py-1.5 text-[14px] border-[1px] rounded-sm border-gray-200 bg-[#ffffff] font-[400] text-center">
                            <GoChevronLeft className="text-[14px]" />
                        </div>
                        <div className="px-3 py-1.5 text-[14px] border-[1px] rounded-sm border-gray-200 bg-[#ffffff] font-[400] text-center">
                            <span>2</span>
                        </div>
                        <div className="px-3 py-1.5 text-[14px] border-[1px] rounded-sm border-gray-200 bg-[#ffffff] font-[400] text-center">3</div>
                        <div className="px-3 py-1.5 text-[14px] border-[1px] rounded-sm border-gray-200 bg-[#ffffff] font-[400] text-center">...</div>
                        <div className="px-3 py-1.5 text-[14px] border-[1px] rounded-sm border-gray-200 bg-[#ffffff] font-[400] text-center">10</div>
                        <div className="px-3 py-1.5 text-[14px] border-[1px] rounded-sm border-gray-200 bg-[#ffffff] font-[400] text-center">
                            <GoChevronRight className="text-[14px]" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-[16px] font-[400] text-gray-500 border-[1px] border-gray-200 rounded-sm px-3 py-1.5">
                        <span>05 items</span>
                        <GoChevronDown className="text-[16px]" />
                    </div>
                </div>
            </div>


        </div>

    );
}

import iconBinoculars from '../images/Vector(12).png'
import iconPercent from '../images/Vector(13).png'
import iconDocument from '../images/Vector(14).png'
import iconFile from '../images/Vector(15).png'
import iconRight from '../images/Vector(16).png'
import iconDocument1 from '../images/Vector(17).png'
import ArrowSquareOut from '../images/Vector(18).png'
import { PiArrowSquareOutThin } from "react-icons/pi";
import { VscTriangleRight } from "react-icons/vsc";
import { IoChevronDownOutline } from "react-icons/io5";

export default function UserDetailPanel() {
    return (
        <div className="w-full bg-white p-4 rounded-lg h-fit sticky top-4">
            <div className="flex items-center gap-4 border-b-[1px] border-b-gray-200 pb-2">
                <div className=''><img className='w-4 h-4 block' src={iconBinoculars} /></div>
                <div>
                    <span className="text-[16px] text-[#767676] font-medium mb-4">GENERAL INFORMATION</span>
                </div>
            </div>

            <div className='overflow-x-auto'>
                <div className='min-w-[700px]'>
                    <div className="mt-4">
                        <div className='grid grid-cols-12 gap-4'>
                            <div className='col-span-3'>
                                <span className='text-[16px] font-[600] text-[#0C0C0D]'>First Name</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[16px] font-[600] text-[#0C0C0D]'>Last Name</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[16px] font-[600] text-[#0C0C0D]'>Experience</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[16px] font-[600] text-[#0C0C0D]'>Personal Website</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className='grid grid-cols-12 gap-4'>
                            <div className='col-span-3'>
                                <span className='text-[14px] font-[400] text-[#4A4B57]'>David</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[14px] font-[400] text-[#4A4B57]'>Nguyen</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[14px] font-[400] text-[#4A4B57]'>5 years</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[14px] font-[400] text-[#4A4B57]'>david.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className='grid grid-cols-12 gap-4'>
                            <div className='col-span-3'>
                                <span className='text-[16px] font-[600] text-[#0C0C0D]'>First Name</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[16px] font-[600] text-[#0C0C0D]'>Last Name</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[16px] font-[600] text-[#0C0C0D]'>Experience</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[16px] font-[600] text-[#0C0C0D]'>Personal Website</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mb-2">
                        <div className='grid grid-cols-12 gap-4'>
                            <div className='col-span-3'>
                                <span className='text-[14px] font-[400] text-[#4A4B57]'>David</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[14px] font-[400] text-[#4A4B57]'>Nguyen</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[14px] font-[400] text-[#4A4B57]'>5 years</span>
                            </div>
                            <div className='col-span-3'>
                                <span className='text-[14px] font-[400] text-[#4A4B57]'>david.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="mt-8 flex items-center justify-between gap-4 border-b-[1px] border-b-gray-200 pb-2">
                <div className='flex items-center gap-4'>
                    <div className=''><img className='w-4 h-4 block' src={iconPercent} /></div>
                    <div>
                        <span className="text-[16px] text-[#767676] font-medium mb-4 uppercase">commission STRUCTURES</span>
                    </div>
                    <div>
                        <img src={iconRight} />
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <span className='px-3 py-1.5 bg-black rounded-sm text-gray-100 text-[14px] font-[400]'>You don’t have permission to open this link</span>
                        <VscTriangleRight className='text-sm -ml-1' />
                        <PiArrowSquareOutThin className='w-5 h-5' />
                    </div>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-between gap-4 border-b-[1px] border-b-gray-200 pb-2">
                <div className='flex gap-4 items-center'>
                    <div ><img className='w-4 h-4 block' src={iconDocument} /></div>
                    <div>
                        <span className="text-[16px] text-[#767676] font-medium mb-4">RECRUITMENT DOCUMENTS</span>
                    </div>
                    <div>
                        <img src={iconRight} />
                    </div>
                </div>
                <PiArrowSquareOutThin className='w-5 h-5 text-[#2979FF]' />
            </div>
            <div className="mt-8 flex items-center gap-4 border-b-[1px] border-b-gray-200 pb-2 uppercase">
                <div className=''><img className='w-4 h-4 block' src={iconFile} /></div>
                <div>
                    <span className="text-[16px] text-[#767676] font-medium mb-4 uppercase">RELATED CLIENTS & LOAN DOCUMENTS</span>
                </div>
                <IoChevronDownOutline className='w-5 h-5 text-gray-200'/>
            </div>

            <div className='overflow-x-auto'>
                <div className='min-w-[700px]'>
                    <div class="grid grid-cols-12 gap-4 bg-[#DAE6EF] py-2">
                        <div className="col-span-2">
                            <div className="">
                                <span className='text-[14px] font-medium text-[#111928] pl-4'>Index</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col justify-end">
                                <span className='text-[14px] font-medium text-[#111928]'>Borrower Name</span>
                                <span className='text-[14px] font-medium text-[#111928]'>Loan ID</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col justify-end">
                                <span className='text-[14px] font-medium text-[#111928]'>Lender</span>
                                <span className='text-[14px] font-medium text-[#111928]'>Interest Rate</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="">
                                <span className='text-[14px] font-medium text-[#111928]'>Process</span>
                            </div>
                        </div>
                        <div className="col-span-2"> <span className='text-[14px] font-medium text-[#111928]'>Status</span></div>
                        <div className="col-span-2"> <span className='text-[14px] font-medium text-[#111928]'>Action</span></div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 pb-2 min-w-[700px] mt-2">
                        <div className="col-span-2">
                            <div className="">
                                <span className='text-[14px] font-[400] text-[#111928] pl-4'>01</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col justify-end">
                                <span className='text-[14px] font-medium text-[#111928]'>Borrower Name</span>
                                <span className='text-[14px] font-[400] text-[#111928]'>#LA00001</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col justify-end">
                                <span className='text-[14px] font-medium text-[#111928]'>AD Mortgage</span>
                                <span className='text-[14px] font-medium text-[#111928]'>6% (6.168% APR)</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex gap-4 items-center">
                                <div className='w-[73px] h-[5px] rounded-sm bg-white border-[1px] border-[#294172]'>
                                    <div className='w-[68%] h-[5px] bg-[#294172] rounded-sm '></div>
                                </div>
                                <div>
                                    <span className='text-[14px] font-[400]'>68%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className='text-[14px] font-[400] text-[#2979FF] bg-[#E6F7FF] py-1 uppercase rounded-sm px-2'>in progress</span>
                        </div>
                        <div className="col-span-2">
                            <div>
                                <img src={iconDocument1} />
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 pb-2 min-w-[700px] mt-2">
                        <div className="col-span-2">
                            <div className="">
                                <span className='text-[14px] font-[400] text-[#111928] pl-4'>02</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col justify-end">
                                <span className='text-[14px] font-medium text-[#111928]'>Borrower Name</span>
                                <span className='text-[14px] font-[400] text-[#111928]'>#LA00001</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col justify-end">
                                <span className='text-[14px] font-medium text-[#111928]'>AD Mortgage</span>
                                <span className='text-[14px] font-medium text-[#111928]'>6% (6.168% APR)</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex gap-4 items-center">
                                <div className='w-[73px] h-[5px] rounded-sm bg-white border-[1px] border-[#294172]'>
                                    <div className='w-[68%] h-[5px] bg-[#294172] rounded-sm '></div>
                                </div>
                                <div>
                                    <span className='text-[14px] font-[400]'>68%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className='text-[14px] font-[400] text-[#2979FF] bg-[#E6F7FF] py-1 uppercase rounded-sm px-2'>in progress</span>
                        </div>
                        <div className="col-span-2">
                            <div>
                                <img src={iconDocument1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="mt-8 flex items-center gap-4 border-b-[1px] border-b-gray-200 pb-2">
                <div className=''><img className='w-4 h-4 block' src={iconPercent} /></div>
                <div>
                    <span className="text-[16px] text-[#767676] font-medium mb-4 uppercase">PERFORMANCE</span>
                </div>
                <div>
                    <img src={iconRight} />
                </div>
            </div>

            <div className="mt-4 flex items-center gap-4 border-b-[1px] border-b-gray-200 pb-2">
                <div className=''><img className='w-4 h-4 block' src={iconPercent} /></div>
                <div>
                    <span className="text-[16px] text-[#767676] font-medium mb-4 uppercase">to do</span>
                </div>

            </div>

            <div className="mt-3 flex items-center gap-4 pb-2">

                <div className='w-[20px] h-[20px] border-[2px] border-[#767676] bg-white rounded-sm'>
                    <input className='hidden' type="checkbox" />
                </div>

                <div>
                    <span className="text-[16px] text-[#767676] font-medium mb-4">Review Loan Applications</span>
                </div>
                <div>
                    <img src={ArrowSquareOut} />
                </div>
            </div>
            <div className="mt-2 flex items-center gap-4 pb-2">
                <div className='w-[20px] h-[20px] border-[2px] border-[#767676] bg-white rounded-sm'>
                    <input className='hidden' type="checkbox" />
                </div>
                <div>
                    <span className="text-[16px] text-[#767676] font-medium mb-4">Contact to Borrower</span>
                </div>
                <div>
                    <img src={ArrowSquareOut} />
                </div>
            </div>
            <div className="mt-2 flex items-center gap-4 pb-2">
                <div className='w-[20px] h-[20px] border-[2px] border-[#767676] bg-[#D9D9D9] rounded-sm'>
                    <input className='hidden' type="checkbox" />
                </div>
                <div>
                    <span className="text-[16px] text-[#D9D9D9] font-medium mb-4">Click to add new todo</span>
                </div>
            </div>


        </div>
    );
}

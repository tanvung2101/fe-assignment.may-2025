import iconFilter from '../images/Vector(11).png'
import Input from './Input';

export default function FilterSidebar() {
  return (
    <div className='min-w-64 min-h-screen flex flex-col justify-between items-center border-r border-r-[#767676]'>
      <div className="w-full p-4 bg-white h-full">
        <div className='flex justify-between items-center border-b-[1px] border-b-[#767676] pb-2.5'>
          <span className="text-sm font-medium text-[#767676] text-center">FILTER</span>
          <img className='h-3.5 w-4' src={iconFilter} />
        </div>
        <div className="space-y-4 mt-6">
          <Input name='User name' placeholder='Select'></Input>
          <Input name='User ID' placeholder='Input' icon={false}></Input>
          <Input name='User type' placeholder='Select' ></Input>
          <Input name='Phone number' placeholder='Input' ></Input>
          <Input name='Email address' placeholder='Input' ></Input>
          <div>
            <span className='text-[14px] font-semibold text-[#0C0C0D] mb-4'>Status</span>
            <div className="flex gap-4 mt-2">
              <label className='w-4 h-4 border-[2px] border-gray-200 rounded-sm'>
                <input className='hidden' type="checkbox" />
              </label>
              <span className='text-[14px] font-[400]'>All</span>
            </div>
            <div className="flex gap-4 mt-2">
              <label className='w-4 h-4 border-[2px] border-gray-200 rounded-sm'>
                <input className='hidden' type="checkbox" />
              </label>
              <span className='text-[14px] font-[400]'>Active</span>
            </div>
            <div className="flex gap-4 mt-2">
              <label className='w-4 h-4 border-[2px] border-gray-200 rounded-sm'>
                <input className='hidden' type="checkbox" />
              </label>
              <span className='text-[14px] font-[400]'>Inactive</span>
            </div>
          </div>
        </div>
      </div>
      <div className='py-1 px-12 rounded-sm border-1 border-gray-200 mb-4'>Export Data</div>
    </div>
  );
}

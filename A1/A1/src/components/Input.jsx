import iconDown from '../images/iconDown.png'

export default function Input({name, placeholder, icon = true}) {
    return (
        <div className='flex flex-col gap-2'>
            <span className='text-[14px] font-semibold text-[#0C0C0D]'>{name}</span>
            <div className='relative'>
                <input className="border border-[#767676] text-[14px] font-[400] rounded-lg px-4 py-2 w-full" placeholder={placeholder} />
                {icon && <img className='absolute top-1/3  right-1/12' src={iconDown} />}
            </div>
        </div>
    )
}

import iconHome from "../images/home.png";
import iconGears from "../images/gears.png";
import iconBell from "../images/iconBell.png";
import iconUser from "../images/user.png";
import iconDown from "../images/down.png";

export default function Header() {
  return (
    <header className="w-full bg-[#294172] text-white p-4 flex justify-between items-center shadow">
      
      <div className="flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-16">
        <div className="text-[10px] sm:text-xs md:text-sm font-medium text-[#00B25C] ml-2 sm:ml-4 md:ml-14">
          COMPANY LOGO XXX
        </div>

        <div className="flex items-center gap-1 sm:gap-3 md:gap-5">
          <img className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" src={iconHome} alt="home" />
          <div className="flex flex-col bg-[#DAE6EF] py-0.5 px-1.5 sm:py-1 sm:px-2 md:py-1 md:px-3 rounded-sm">
            <span className="text-[10px] sm:text-xs md:text-sm text-[#294172] font-normal">Module</span>
            <span className="text-[10px] sm:text-xs md:text-[14px] text-[#294172] font-bold">USER management</span>
          </div>
        </div>
      </div>

     
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 pr-2 sm:pr-4 md:pr-8">
  
        <div className="relative hidden sm:block">
          <img className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" alt="bell" src={iconBell} />
          <div className="rounded-full bg-[#E10E0E] w-3.5 h-3.5 sm:w-4 sm:h-4 text-[8px] sm:text-[10px] font-medium text-center absolute top-0 -right-1/4">
            1
          </div>
        </div>

        
        <img className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 hidden sm:block" alt="gears" src={iconGears} />

       
        <div className="flex items-center gap-1 sm:gap-2">
          <img
            src={iconUser}
            alt="User Avatar"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full border"
          />
          <div className="hidden sm:flex flex-col text-left">
            <p className="text-[10px] sm:text-xs md:text-sm font-bold">Mr. David Nguyen</p>
            <p className="text-[8px] sm:text-[10px] md:text-xs font-light">Home Company</p>
          </div>
        </div>

        
        <img className="w-2 h-1.5 sm:w-2.5 sm:h-2 md:w-3.5 md:h-2.5" alt="iconDown" src={iconDown} />
      </div>
    </header>
  );
}

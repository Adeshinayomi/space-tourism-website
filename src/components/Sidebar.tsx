import close from "../assets/shared/icon-close.svg";
import { Link,useLocation } from "react-router-dom";
export function Sidebar({menuIsVisble,setMenuIsVisible}:any) {
    const location=useLocation()
    function closeMenu(){
        setMenuIsVisible(false)
    }
  return (
    <nav
        className={`fixed top-0 ${menuIsVisble?'right-0':'-right-80'} h-screen w-[70%]
        bg-gradient-to-br from-black/70 via-slate-900/50 to-neutral-200/10
        backdrop-blur-2xl
        border-l border-white/10
        shadow-2xl text-white pt-10 flex flex-col gap-10 ease-in duration-300`}
    >

      <button onClick={closeMenu} className="flex justify-end font-bellefair">
        <img src={close} alt="close-icon" />
      </button>
      <ul className="mt-16 grid gap-7 pl-5">
        <Link to={'/'} className={`flex gap-2 text-xl ${location.pathname === '/'?'border-r-4':''} hover:border-r-4`}>
          <span className="text-White font-bold">00</span>
          HOME
        </Link>
        <Link to={'/destination'} className={`flex gap-2 text-xl ${location.pathname === '/destination'?'border-r-4':''} hover:border-r-4`}>
          <span className="text-White font-bold">01</span>
          DESTINATION
        </Link>
        <Link to={'/crew'} className={`flex gap-2 text-xl ${location.pathname === '/crew'?'border-r-4':''} hover:border-r-4`}>
          <span className="text-White font-bold">02</span>
          CREW
        </Link>
        <Link to={'/technology'} className={`flex gap-2 text-xl ${location.pathname === '/technology'?'border-r-4':''} hover:border-r-4`}>
          <span className="text-White font-bold">03</span>
          TECHNOLOGY
        </Link>
      </ul>
    </nav>
  );
}

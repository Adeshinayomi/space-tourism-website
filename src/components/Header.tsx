import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Link } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
export function Header(){
    const [menuIsVisible,setMenuIsVisible]=useState(false)

    function toggleMenu(){
        setMenuIsVisible(prev=>!prev)
    }
    return(
        <>
            <Sidebar menuIsVisble={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
            <header className='w-full grid py-10 relative z-10'>
                <nav className='w-5/6 mx-auto flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="logo icon" />
                    </div>
                    <hr className='hidden md:flex w-5/6 mx-auto'/>

                    <ul className='w-[40%] absolute border-0 right-0 hidden md:flex justify-between backdrop-blur-2xl border-l border-white/10 shadow-2xl px-4 text-white font-barlow text-sm pl-16'>
                         
                        <Link to={'/'} className='flex gap-2 border-b-2 py-5'>
                            <span className="text-White font-bold">00</span>
                            HOME
                        </Link>
                        <Link to={'/destination'} className='flex gap-2 py-5'>
                            <span className="text-White font-bold">01</span>
                            DESTINATION
                        </Link>
                        <Link to={'/crew'} className='flex gap-2 py-5'>
                            <span className="text-White font-bold">02</span>
                            CREW
                        </Link>
                        <Link to={'/technology'} className='flex gap-2 py-5'>
                            <span className="text-White font-bold">03</span>
                            TECHNOLOGY
                        </Link>
                    </ul>
                    <button onClick={toggleMenu} className='md:hidden'>   
                        <img src={hamburger} alt="hamburger icon" width={30}/>
                    </button>
                </nav>
            </header>
        </>
    )
}
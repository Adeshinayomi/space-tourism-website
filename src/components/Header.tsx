import { useState } from 'react'
import { Sidebar } from './Sidebar'
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
            <header className='w-full grid py-10'>
                <nav className='w-5/6 mx-auto flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="logo icon" />
                    </div>

                    <button onClick={toggleMenu}>   
                        <img src={hamburger} alt="hamburger icon" width={30}/>
                    </button>
                </nav>
            </header>
        </>
    )
}
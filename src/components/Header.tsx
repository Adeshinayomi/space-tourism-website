import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'


export function Header(){
    
    return(
        <header className='w-full grid py-10'>
            <nav className='w-5/6 mx-auto flex justify-between items-center'>
                <div>
                    <img src={logo} alt="logo icon" />
                </div>

                <div>   
                    <img src={hamburger} alt="hamburger icon" width={30}/>
                </div>
            </nav>
        </header>
    )
}
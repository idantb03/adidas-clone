import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const NavbarMobile = ({setShow}) => {
    const [onHover, setHover] = useState('')
    const [navshow, setNavShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) {
            setNavShow(false); 
        } else {
            setNavShow(true);  
        }
        setLastScrollY(window.scrollY); 
        }
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
        }
    }, [lastScrollY]);

    const styles = {
        active: {
          visibility: "visible",
          transition: "all 0.5s"
        },
        hidden: {
          visibility: "hidden",
          transition: "all 0.5s",
          transform: "translateY(-100%)"
        }
    }


    return ( 
        <div className=" fixed z-50 w-full lg:hidden " style={navshow === true ? styles.active: styles.hidden}>
            <div className=" navbar flex flex-row justify-between w-full px-4 py-2 h-auto bg-white ">
                <div className=" w-1/3 flex">
                    <button onClick={(e) => {setShow(true)}} className="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div className=" w-1/3 flex justify-center">
                    <img className=" w-16 h-auto my-auto" src="/adidas-logo.webp"/>
                </div >

                <div className=" w-1/3 flex flex-row text-black justify-end">
                    <button>
                        <img className="w-6 h-auto m-2" src="/flags/gb.svg" />
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 m-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 m-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </button>
                </div>
            </div> 
        </div>
    );
}
 
export default NavbarMobile;
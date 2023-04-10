import { useState, useEffect } from "react";
import Brands from "./Navbar/Brands";
import Kids from "./Navbar/Kids";
import Men from "./Navbar/Men";
import Sports from "./Navbar/Sports";
import Women from "./Navbar/Women";

const Navbar = () => {
    const [onHover, setHover] = useState('')
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) {
            setShow(false); 
        } else {
            setShow(true);  
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
        <div className=" fixed z-50 w-full hidden lg:block " style={show === true ? styles.active: styles.hidden}>
            <div className=" navbar flex flex-row justify-between w-full px-10 h-auto bg-white ">
            <div className=" xl:w-1/3 flex">
                <img className=" w-16 h-auto my-auto" src="/adidas-logo.webp"/>
            </div>
            <div className="w-1/2 lg:w-1/3 flex">
                <div className="flex flex-row mt-auto mb-0 bottom-0">
                    <button onMouseEnter={(e) => {setHover("Men")}} onMouseLeave={(e) => {setHover('')}} className="text-black border-b-2 border-transparent hover:border-black px-2 py-2 font-bold">MEN</button>
                    <button onMouseEnter={(e) => {setHover("Women")}} onMouseLeave={(e) => {setHover('')}} className="text-black border-b-2 border-transparent hover:border-black px-2 py-2 font-bold">WOMEN</button>
                    <button onMouseEnter={(e) => {setHover("Kids")}} onMouseLeave={(e) => {setHover('')}} className="text-black border-b-2 border-transparent hover:border-black px-2 py-2 font-semibold">KIDS</button>
                    <button onMouseEnter={(e) => {setHover("Sports")}} onMouseLeave={(e) => {setHover('')}} className="text-black border-b-2 border-transparent hover:border-black px-2 py-2">SPORTS</button>
                    <button onMouseEnter={(e) => {setHover("Brands")}} onMouseLeave={(e) => {setHover('')}}className="text-black border-b-2 border-transparent hover:border-black px-2 py-2">BRANDS</button>
                    <button className="text-black border-b-2 border-transparent hover:border-black px-2 py-2 font-bold">OUTLET</button>
                </div>
            </div >
            <div className="w-1/3 flex flex-col">
                <div className="text-gray-500 flex flex-row justify-end">
                    <button className="m-2 text-xs">order status</button>
                    <button className="m-2 text-xs">help</button>
                    <button className="m-2 text-xs">newsletter signup</button>
                    <button>
                        <img className="w-4 h-auto m-2" src="/flags/gb.svg" />
                    </button>
                    <button className="m-2 text-xs">login</button>
                </div>
                <div className="text-black flex flex-row justify-end px-4">
                    <div className="flex flex-row p-2">
                        <input type="search" class="bg-gray-200 h-10 p-3 m-auto" placeholder="Search" />
                        <button className=" text-black bg-gray-200 m-auto h-10 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                    <button className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            </div> 

            <Men onHover={onHover} setHover={setHover} />
            <Women onHover={onHover} setHover={setHover} />
            <Kids onHover={onHover} setHover={setHover} />
            <Sports onHover={onHover} setHover={setHover} />
            <Brands onHover={onHover} setHover={setHover} />
        </div>
    );
}
export default Navbar;
const SideTop = ({setShow, menu, setMenu}) => {
    if(menu !== "Main") {
        return(
            <div className=" fixed z-50 w-full border-b-2 ">
            <div className=" navbar flex flex-row justify-between w-full px-4 py-2 h-auto bg-white ">
                <div className="flex flex-row text-black justify-start">
                <button onClick={(e) => {setMenu("Main")}} className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <h1 className="p-2 font-bold text-lg">{menu}</h1>
                </div>
                <div className="flex flex-row text-black justify-end">
                    <button onClick={(e) => {setShow(false); setMenu("Main")}} className="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div> 
        </div>
        )
    } else {
        return (
            <div className=" fixed z-50 w-full border-b-2 ">
                <div className=" navbar flex flex-row justify-between w-full px-4 py-2 h-auto bg-white ">
                    <div className=" w-1/3"></div>
                    <div className=" w-1/3 flex justify-center">
                        <img className=" w-16 h-auto my-auto" src="/adidas-logo.webp"/>
                    </div >
                    <div className=" w-1/3 flex flex-row text-black justify-end">
                        <button onClick={(e) => {setShow(false)}} className="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                </div> 
            </div>
        );
    }
}
 
export default SideTop;
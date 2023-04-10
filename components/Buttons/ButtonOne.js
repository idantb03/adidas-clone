const ButtonOne = () => {
    return ( 
    <div className="relative">
        <div className="absolute left-1 top-1 w-36 h-10 border z-10 cursor-pointer"></div>
        <button className="bg-white text-black font-bold py-2 px-4 w-36 h-10 z-40 cursor-pointer flex flex-row justify-center align-middle">
            <p className="my-auto text-sm mr-2">SHOP NOW</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 my-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </button> 
    </div>
    );
}
 
export default ButtonOne;
const Footer = () => {
    return (
        <div className=" lg:px-60 xl::px-80 bg-gray-800 flex lg:flex-row flex-col text-center lg:justify-between py-3 ">
            <div className="flex flex-row justify-center"><img className="w-4 h-auto mr-1" src="/flags/id.svg" /><button className="text-sm hover:underline"> Indonesia</button></div>
            <div className="flex flex-col lg:flex-row text-sm">
                <div className="flex flex-row justify-center">
                <button className="hover:underline">Privacy Policy</button>
                <p className="px-2">|</p>
                <button className="mr-3 hover:underline">Terms and Conditions</button>
                </div>
                <button className="hover:underline">©2021 adidas indonesia</button>
            </div>
        </div>
    );
}

export default Footer;
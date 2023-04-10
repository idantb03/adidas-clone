const Men = ({onHover, setHover}) => {
    const featured = ["New Arrivals", "Exclusive at adidas", "Ultraboost", "NMD", "Forum", "Superstar"]
    const shoes = ["Originals", "Training", "Running", "Football", "Basketball", "Tennis", "Essentials", "Slides", "Outdoor"]
    const clothing = ["Shirts/Tops", "Jerseys", "Shorts/Bottoms", "Pants/Tights", "Jackets/Track Tops", "Hoodies/Sweatshirts"]
    const accessories = ["Bag", "Headwear", "Socks", "Balls", "Protection Gear", "Other Accessories"]
    const sports = ["Football", "Training", "Running", "Basketball", "Tennis", "Golf", "Outdoor", "All men's sports", "Cycling"]

    if(onHover !== "Men") return

    return (
        <div className="bg-white" onMouseEnter={(e) => {setHover("Men")}} onMouseLeave={(e) => {setHover('')}} >
            <div className="flex flex-row justify-around text-black border px-28">
                <div className=" w-1/5 py-6 flex flex-col text-start ">
                    <h1 className="mb-2 font-bold">FEATURED</h1>
                    {featured.map((data, index) => (
                        <button key={index} className="hover:underline text-start cursor-pointer">{data}</button>
                    ))}
                    <button className="hover:underline text-start font-semibold text-red-500 cursor-pointer">Sale</button>
                    <button className="hover:underline text-start font-semibold cursor-pointer">Last Chance</button>
                    <div className="h-6"></div>
                    <button className=" font-bold text-start cursor-pointer mt-auto bottom-0 ">All Men&apos;s</button>
                </div>
                <div className=" w-1/5 border-l py-6 pl-3 flex flex-col text-start">
                    <h1 className="mb-2 font-bold">SHOES</h1>
                    {shoes.map((data, index) => (
                        <p key={index} className="hover:underline text-start cursor-pointer">{data}</p>
                    ))}
                    <div className="h-6"></div>
                    <button className=" font-bold text-start cursor-pointer mt-auto bottom-0 ">All Men&apos;s shoes</button>
                </div>
                <div className=" w-1/5 py-6 flex flex-col text-start ">
                    <h1 className="mb-2 font-bold">CLOTHING</h1>
                    {clothing.map((data, index) => (
                        <p key={index} className="hover:underline text-start cursor-pointer">{data}</p>
                    ))}
                    <div className="h-6"></div>
                    <button className=" font-bold text-start cursor-pointer mt-auto bottom-0 ">All Men&apos;s clothing</button>
                </div>
                <div className=" w-1/5 py-6 flex flex-col text-start ">
                    <h1 className="mb-2 font-bold">ACCESSORIES</h1>
                    {accessories.map((data, index) => (
                        <p key={index} className="hover:underline text-start cursor-pointer">{data}</p>
                    ))}
                    <div className="h-6"></div>
                    <button className=" font-bold text-start cursor-pointer mt-auto bottom-0 ">All Men&apos;s accessories</button>
                </div>
                <div className=" w-1/5 py-6 flex flex-col text-start ">
                    <h1 className="mb-2 font-bold">SPORTS</h1>
                    {sports.map((data, index) => (
                        <p key={index} className="hover:underline text-start cursor-pointer">{data}</p>
                    ))}
                    <div className="h-6"></div>
                    <button className=" font-bold text-start cursor-pointer mt-auto bottom-0 ">All Men&apos;s sports</button>
                </div>
            </div>
        </div>
    );
}
 
export default Men;
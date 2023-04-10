const Kids = ({onHover, setHover}) => {
    const featured = ["New Arrivals", "Originals", "Lego", "Disney", "Marvel"]
    const shoes = ["New Arrivals", "Boys Clothing", "Girls Clothing", "Boys Shoes", "Girls Shoes"]
    const clothing = ["New Arrivals", "Boys Clothing", "Girls Clothing", "Boys Shoes", "Girls Shoes"]
    const accessories = ["New Arrivals", "Clothing", "Shoes"]
    const sports = ["Training", "Football", "Golf", "Running"]

    if(onHover !== "Kids") return

    return (
        <div className="bg-white" onMouseEnter={(e) => {setHover("Kids")}} onMouseLeave={(e) => {setHover('')}} >
            <div className="flex flex-row justify-around text-black border px-28">
                <div className=" w-1/5 py-6 flex flex-col text-start ">
                    <h1 className="mb-2 font-bold">FEATURED</h1>
                    {featured.map((data, index) => (
                        <button key={index} className="hover:underline text-start cursor-pointer text-sm">{data}</button>
                    ))}
                    <button className="hover:underline text-start font-semibold text-red-500 cursor-pointer text-sm">Sale</button>
                    <button className="hover:underline text-start font-semibold cursor-pointer text-sm">Last Chance</button>
                    <div className="h-6"></div>
                    <button className=" font-bold text-start cursor-pointer mt-auto bottom-0 text-sm ">All Boys</button>
                </div>
                <div className=" w-1/5 border-l py-6 pl-3 flex flex-col text-start">
                    <h1 className="mb-2 font-bold">YOUTH (8-16)</h1>
                    {shoes.map((data, index) => (
                        <p key={index} className="hover:underline text-start cursor-pointer text-sm">{data}</p>
                    ))}
                    <div className="h-6"></div>
                    <button className=" font-bold text-start cursor-pointer mt-auto bottom-0 text-sm ">All Youth&apos;s (8-16)</button>
                </div>
                <div className=" w-1/5 py-6 flex flex-col text-start ">
                    <h1 className="mb-2 font-bold">KIDS (4-8)</h1>
                    {clothing.map((data, index) => (
                        <p key={index} className="hover:underline text-start cursor-pointer text-sm">{data}</p>
                    ))}
                    <div className="h-6"></div>
                    <button className=" font-bold text-start cursor-pointer mt-auto bottom-0 text-sm ">All Kid&apos;s (4-8)</button>
                </div>
                <div className=" w-1/5 py-6 flex flex-col text-start ">
                    <h1 className="mb-2 font-bold">TODDLERS (1-4)</h1>
                    {accessories.map((data, index) => (
                        <p key={index} className="hover:underline text-start cursor-pointer text-sm">{data}</p>
                    ))}
                    <div className="h-6"></div>
                    <button className=" font-bold text-start cursor-pointer mt-auto bottom-0 text-sm ">All Toddler&apos;s (4-8)</button>
                </div>
                <div className=" w-1/5 py-6 flex flex-col text-start ">
                    <h1 className="mb-2 font-bold">SPORTS</h1>
                    {sports.map((data, index) => (
                        <p key={index} className="hover:underline text-start cursor-pointer text-sm">{data}</p>
                    ))}
                    <div className="h-6"></div>
                    <button className=" font-bold text-start cursor-pointer mt-auto bottom-0 text-sm ">All Kids sports</button>
                </div>
            </div>
        </div>
    )
}
 
export default Kids;
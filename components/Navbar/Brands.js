const Brands = ({onHover, setHover}) => {
    const originals = ["Shoes", "Clothing", "Accessories"]
    const sports = ["Shoes", "Clothing", "Accessories"]
    const stella = ["Clothing"]
    const plastic = ["All Sustainable"]

    if(onHover !== "Brands") return

    return ( 
    <div onMouseEnter={(e) => {setHover("Brands")}} onMouseLeave={(e) => {setHover('')}} className=" bg-white flex flex-row justify-around text-black border px-28 ">
        <div className=" w-1/4 flex flex-col p-5 ">
            <img className="mb-2" src="/brands/originals.webp" />
            {originals.map((data, index) => (
                <button key={index} className="hover:underline text-start cursor-pointer">{data}</button>
            ))}
        </div>
        <div className=" w-1/4 flex flex-col p-5 ">
            <img className="mb-2" src="/brands/block.jpg" />
            {sports.map((data, index) => (
                <button key={index} className="hover:underline text-start cursor-pointer">{data}</button>
            ))}
        </div>
        <div className=" w-1/4 flex flex-col p-5 ">
            <img className="mb-2" src="/brands/adidas_stella.webp" />
            {stella.map((data, index) => (
                <button key={index} className="hover:underline text-start cursor-pointer">{data}</button>
            ))}
        </div>
        <div className=" w-1/4 flex flex-col p-5 ">
            <img className="mb-2" src="/brands/plastic.webp" />
            {plastic.map((data, index) => (
                <button key={index} className="hover:underline text-start cursor-pointer">{data}</button>
            ))}
        </div>
    </div>
    );
}
 
export default Brands;
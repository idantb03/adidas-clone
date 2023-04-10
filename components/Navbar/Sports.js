const Sports = ({onHover, setHover}) => {
    const running = ["Shoes", "Clothing", "Accessories"]
    const football = ["Shoes", "Clothing", "Accessories", "Predator", "X", "Copa"]
    const othersports = ["Golf", "Tennis", "Swim", "Outdoor", "Cycling"]

    if(onHover !== "Sports") return

    return ( 
    <div onMouseEnter={(e) => {setHover("Sports")}} onMouseLeave={(e) => {setHover('')}} className=" bg-white flex flex-row justify-around text-black border px-28 ">
        <div className=" w-1/5 flex flex-col p-5 ">
            <h1 className=" font-bold mb-2 ">RUNNING</h1>
            <img className="mb-2" src="/sports/RUNNING.webp" />
            {running.map((data, index) => (
                <button key={index} className="hover:underline text-start cursor-pointer text-sm">{data}</button>
            ))}
        </div>
        <div className=" w-1/5 flex flex-col p-5 ">
            <h1 className=" font-bold mb-2 ">TRAINING</h1>
            <img className="mb-2" src="/sports/TRAINING.webp" />
            {running.map((data, index) => (
                <button key={index} className="hover:underline text-start cursor-pointer text-sm">{data}</button>
            ))}
        </div>
        <div className=" w-1/5 flex flex-col p-5 ">
            <h1 className=" font-bold mb-2 ">FOOTBALL</h1>
            <img className="mb-2" src="/sports/FOOTBALL.webp" />
            {football.map((data, index) => (
                <button key={index} className="hover:underline text-start cursor-pointer text-sm">{data}</button>
            ))}
        </div>
        <div className=" w-1/5 flex flex-col p-5 ">
            <h1 className=" font-bold mb-2 ">BASKETBALL</h1>
            <img className="mb-2" src="/sports/basketball-mini-banner-2023.webp" />
            {running.map((data, index) => (
                <button key={index} className="hover:underline text-start cursor-pointer text-sm">{data}</button>
            ))}
        </div>
        <div className=" w-1/5 flex flex-col p-5 ">
            <h1 className=" font-bold mb-2 ">OTHER SPORTS</h1>
            <img className="mb-2" src="/sports/OTHERSPORTS.webp" />
            {othersports.map((data, index) => (
                <button key={index} className="hover:underline text-start cursor-pointer text-sm">{data}</button>
            ))}
        </div>
    </div>
    );
}
 
export default Sports;
import { useEffect } from "react";

const BestOfAdidas = ({img, categories, title, price}) => {
    return ( 
    <div style={{height: "20rem"}} className="flex flex-col h-auto w-64 mb-0 border-2 border-transparent hover:border-gray-400">
        <button className="absolute right-0 text-white font-bold p-4 rounded">
            <img className=" w-6 " src="/heart.webp"/>
        </button>
        <img className="w-full h-auto object-cover" src={img}/>
        <div className="p-2">
            <p className=" font-light text-gray-700 text-xs mb-2 ">{categories}</p>
            <h1 className=" text-neutral-600 text-xs mb-1">{title.substring(0,32)}</h1>
            <p className="text-black text-xs mb-0 mt-auto">Rp. {new Intl.NumberFormat('en-DE').format(price)}</p>
        </div>
    </div> 
    );
}

export default BestOfAdidas;
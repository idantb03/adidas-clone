import ButtonTwo from "../Buttons/ButtonTwo";

const HotProducts = ({img, title, description, url}) => {
    return (
        <div style={{height: "29rem"}} className=" flex flex-col h-auto w-64 mb-0 " >
            <img className=" object-cover h-auto w-full mb-2 " src={img} />
            <h1 className=" text-black font-bold mb-1 text-sm ">{title}</h1>
            <p className=" text-black mb-5 text-sm ">{description}</p>
            <div className="bottom-0 absolute"><ButtonTwo text="SHOP NOW" /></div>
        </div>
    );
}
 
export default HotProducts;
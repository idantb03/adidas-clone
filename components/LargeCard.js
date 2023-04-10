import ButtonOne from "./Buttons/ButtonOne";

const LargeCard = ({bg, title, desc}) => {
    return (
        <div className=' w-full bg-slate-400 relative justify-end items-end'>
            <img className="w-full h-auto" src={bg}/>
            <div className=" absolute bottom-3 left-4 sm:bottom-10 sm:left-10 md:bottom-20 md:left-20 lg:bottom-36 lg:left-36">
                <h1 className=" font-bold text-4xl mb-2 ">{title}</h1>
                <p className=" text-lg mb-3 ">{desc}</p>
                <div className=" hidden sm:block ">
                <ButtonOne />
                </div>
            </div>
        </div>
    );
}
 
export default LargeCard;
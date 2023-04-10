import Men from "./Men";

const Main = ({menu, setMenu}) => {
    const styles = {
        active: {
          visibility: "visible",
          transition: "all 0.5s"
        },
        hidden: {
          visibility: "hidden",
          transition: "all 0.5s",
          transform: "translateX(-100%)"
        }
    }

    return (
        <div>
            <div style={ menu === 'Main' ? styles.active: styles.hidden}>
            <div className="flex flex-col text-black mt-16 border-b-2 py-3">
            <button onClick={(e) => {setMenu('MEN')}} className="flex justify-between align-middle px-8 py-2">
                <h1 className=" font-bold text-xl ">MEN</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button onClick={(e) => {setMenu('WOMEN')}} className="flex justify-between align-middle px-8 py-2">
                <h1 className=" font-bold text-xl ">WOMEN</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button onClick={(e) => {setMenu('KIDS')}} className="flex justify-between align-middle px-8 py-2">
                <h1 className=" font-bold text-xl ">KIDS</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button className="flex justify-between align-middle px-8 py-2">
                <h1 className=" text-xl ">SPORTS</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button className="flex justify-between align-middle px-8 py-2">
                <h1 className=" text-xl ">BRANDS</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
        <div className="flex flex-col text-black border-b-2 py-3">
            <button className="flex justify-between align-middle px-8 py-2 hover:underline">
                <h1 className="text-xl ">adidas Exclusive</h1>
            </button>
            <button className="flex justify-between align-middle px-8 py-2 hover:underline">
                <h1 className=" font-bold text-xl ">OUTLET</h1>
            </button>
            <button className="flex justify-between align-middle px-8 py-2 hover:underline">
                <h1 className=" text-xl ">My Profile</h1>
            </button>
            <button className="flex justify-between align-middle px-8 py-2 hover:underline">
                <h1 className=" text-xl ">newsletter signup</h1>
            </button>
        </div>
        </div>
        </div>
    );
}
 
export default Main;
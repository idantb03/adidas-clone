const Kids = ({menu}) => {
    const styles = {
        active: {
          visibility: "visible",
          transition: "all 0.5s"
        },
        hidden: {
          visibility: "hidden",
          transition: "all 0.5s",
          transform: "translateX(100%)"
        }
    }

    return (
        <div style={ menu === 'KIDS' ? styles.active: styles.hidden}>
            <div className="flex flex-col text-black mt-16 py-3">
            <button className="flex justify-between align-middle px-8 py-2">
                <h1 className=" text-xl ">Featured</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button className="flex justify-between align-middle px-8 py-2">
                <h1 className=" text-xl ">Youth (8-16)</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button className="flex justify-between align-middle px-8 py-2">
                <h1 className=" text-xl ">Kids (4-8)</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button className="flex justify-between align-middle px-8 py-2">
                <h1 className=" text-xl ">Toddlers (1-4)</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button className="flex justify-between align-middle px-8 py-2">
                <h1 className=" text-xl ">Sports</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button className="flex justify-between align-middle px-8 py-2">
                <h1 className=" text-xl ">All Kids</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            </div>
        </div>
    );
}
 
export default Kids;
import ButtonOneBlack from "../Buttons/ButtonOneBlack";

const Categories = ({img, text}) => {
    return ( 
    <div className=" w-full bg-black my-2 md:m-3 flex justify-center align-middle " style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", height: "26rem" }}>
        <div className=" mx-auto mt-auto mb-12"><ButtonOneBlack text={text} /></div>
    </div> 
    );
}
 
export default Categories;
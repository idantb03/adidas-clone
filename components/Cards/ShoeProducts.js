import ButtonTwo from "../Buttons/ButtonTwo";
import styles from '@/styles/Home.module.css'

const ShoeProducts = ({img, text}) => {
    return (
    <div className=" flex flex-col w-full h-auto bg-shoe ">
        <img className=" w-full object-none " src={img} />
        <div className=" w-full flex text-center m-auto pb-8 ">
        <ButtonTwo text={text} />
        </div>
    </div>
    );
}
 
export default ShoeProducts;
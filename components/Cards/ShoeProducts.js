import ButtonTwo from "../Buttons/ButtonTwo";
import styles from '@/styles/Home.module.css'

const ShoeProducts = ({img, text}) => {
    return (
    <div className=" flex flex-col w-full h-auto bg-shoe ">
        <img className=" w-full object-none " src={img} />
        <div className=" w-full flex justify-start px-4 md:justify-center m-auto pb-8 ">
            <div>
                <ButtonTwo text={text} />
            </div>
        </div>
    </div>
    );
}
 
export default ShoeProducts;
import { useEffect, useState } from "react";
import Men from "./Sidebar/Men";
import Main from "./Sidebar/Main";
import SideTop from "./Sidebar/SideTop";
import Women from "./Sidebar/Women";
import Kids from "./Sidebar/Kids";

const Sidebar = ({setShow, isShow}) => {
    const [menu, setMenu] = useState('Main')
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
    <div className=" w-full h-full z-50 bg-white fixed " style={ isShow === true ? styles.active: styles.hidden}>
        <SideTop setShow={setShow} menu={menu} setMenu={setMenu} />
        <div className=" absolute w-full ">
            <Main menu={menu} setMenu={setMenu}/>
        </div>
        {(menu == "MEN") ? 
        <div className=" absolute w-full ">
        <Men menu={menu}/>
        </div> : <></>}
        {(menu == "WOMEN") ? 
        <div className=" absolute w-full ">
        <Women menu={menu}/>
        </div> : <></>}
        {(menu == "KIDS") ? 
        <div className=" absolute w-full ">
        <Kids menu={menu}/>
        </div> : <></>}
    </div> 
    );
}
 
export default Sidebar;
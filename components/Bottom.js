import FooterCards from "./Footer/FooterCards";

const Bottom = () => {
    return ( 
    <div className="flex flex-row justify-between w-full text-black">
        <div className="w-25">
            <FooterCards title="PRODUCTS" buttons={["Shoes", "Apparels"]}/>
            <FooterCards title="FEATURED" buttons={["New Arrivals", "Impossible is Nothing", "Sale", "Last Chance"]}/>
        </div>
        <div className="w-25">
            <FooterCards title="SPORT" buttons={["Predator Football Boots", "X Football Boots", "Copa Football Boots", "Manchester United", "Juventus", "Real Madrid", "Arsenal", "Bayern Munchen", "Boost Shoes", "Ultraboost"]}/>
        </div>
        <div className="w-25">
        <FooterCards title="COLLECTIONS" buttons={["Stan Smith", "Superstar", "Ultraboost", "NMD", "adidas Exclusive"]}/>
        </div>
        <div className="w-25">
        <FooterCards title="LEGAL" buttons={["Privacy Policy", "Terms and Conditions"]}/>
        <FooterCards title="SUPPORT" buttons={["Contact Us", "Size Charts", "Ordering", "Promotions & Vouchers", "Payment", "Delivery", "Returns and Refunds", "About adidas Products", "Using Our Site", "Your Account", "Order Tracker"]}/>
        </div>
    </div>
    );
}
 
export default Bottom;
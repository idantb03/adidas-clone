const FooterCards = ({title, buttons}) => {
    return ( 
        <div className="flex flex-col mb-3">
                <h1 className=" font-bold text-start mb-2 ">{title}</h1>
                {buttons.map((name, index) => (
                    <button key={index} className="text-start hover:underline">{name}</button>
                ))}
        </div>
    );
}
 
export default FooterCards;
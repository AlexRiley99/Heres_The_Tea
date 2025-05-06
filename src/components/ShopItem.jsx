import '../styles/ShopItem.css';
import Price from './Price.jsx';
function ShopItem({ID, ShopItemImage, ShopItemName, ShopItemDescription, sizes=[], prices=[]}){
    return(
        <div className="shopItem">
            <img src={ShopItemImage} className="shopItemImage"/>
            <h2 className="shopItemName">{ShopItemName}</h2>
            <p className="shopItemDescription">{ShopItemDescription}</p>
            <div className="size">
                {sizes && sizes.map((size, index) =>(
                    <p key={`size-${index}`}>{size}</p>
                ))}
            </div>
            <div className="price">
                {prices && prices.map((price, index) => (
                    <Price key={`price-${index}`} amount={price}/>
                ))}
            </div>
        </div>
    );
}

export default ShopItem;
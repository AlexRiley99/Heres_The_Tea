import '../styles/MenuItem.css';
import Price from './Price.jsx';


function MenuItem({MenuItemName, MenuItemDescription, sizes = [], prices = []}){
    
    return(
        <div className="menuItem">
            <h2 className="menuItemName">{MenuItemName}</h2>
            <p className="menuItemDescription">{MenuItemDescription}</p>
            <div className="size">
                {sizes && sizes.map((size, index) => (
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

export default MenuItem;
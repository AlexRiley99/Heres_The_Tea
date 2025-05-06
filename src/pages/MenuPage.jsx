import MenuItem from '../components/MenuItem.jsx';
import Button from '../components/Button.jsx';
import '../styles/MenuPage.css';
import { useNavigate } from 'react-router-dom';

function MenuPage(){
    const navigate = useNavigate(); //Navigation
    const handleOrderNow = () => {
        navigate('/order');
    };

    //Arrays for sizes and menu items
    const sizes = ["12oz..............................", "16oz..............................", "20oz.............................."];
    const menuItems = [
        {
            MenuItemName: "Earl Grey",
            MenuItemDescription: "Bold black tea with hints of bergamot citrus",
            sizes,
            prices: ["$2.50", "$3.00", "$4.00"]
        },
        {
            MenuItemName: "Green Jasmine",
            MenuItemDescription: "Fragrant green tea infused with jasmine blossoms",
            sizes,
            prices: ["$2.75", "$3.25", "$4.25"]
        },
        {
            MenuItemName: "Chamomile",
            MenuItemDescription: "A calming herbal blend with a light floral flavor",
            sizes,
            prices: ["$2.25", "$2.75", "$3.75"]
        },
        {
            MenuItemName: "Chai Latte",
            MenuItemDescription: "Spiced black tea with steamed milk and a hint of sweetness",
            sizes,
            prices: ["$3.00", "$3.50", "$4.50"]
        },
        {
            MenuItemName: "Matcha Green Tea",
            MenuItemDescription: "Stone-ground Japanese green tea whisked to a froth",
            sizes,
            prices: ["$3.50", "$4.00", "$5.00"]
        },
        {
            MenuItemName: "Mint Herbal",
            MenuItemDescription: "Refreshing minty infusion to awaken the senses",
            sizes,
            prices: ["$2.25", "$2.75", "$3.75"]
        },
        {
            MenuItemName: "Honey Lavender",
            MenuItemDescription: "Delicate floral tea with notes of honey and lavender",
            sizes,
            prices: ["$2.75", "$3.25", "$4.25"]
        },
        {
            MenuItemName: "Thai Iced Tea",
            MenuItemDescription: "Sweet and creamy spiced black tea served over ice",
            sizes,
            prices: ["$3.25", "$3.75", "$4.75"]
        },
        {
            MenuItemName: "Oolong Rose",
            MenuItemDescription: "Smooth oolong tea with a subtle hint of rose petals",
            sizes,
            prices: ["$3.00", "$3.50", "$4.50"]
        }
    ];

    //Menu Page Code Begins
    return(
        <div>
            <h1>Menu</h1>
            <Button
                text="Order Now" 
                id="orderNowBtn"
                onClick={handleOrderNow}/>
            
            <div className="menuContainer">
            {menuItems && menuItems.map((item, index) => (
                <MenuItem
                    key={index}
                    MenuItemName={item.MenuItemName}
                    MenuItemDescription={item.MenuItemDescription}
                    sizes={item.sizes}
                    prices={item.prices}
                />
            ))}
            </div>
        </div>
    );
}

export default MenuPage;
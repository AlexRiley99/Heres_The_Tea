import ShopItem from '../components/ShopItem.jsx';
import '../styles/ShopPage.css'
import CategoryFilter from '../components/CategoryFilter.jsx';
import shopItemImage from '../assets/httLogo.png';

function ShopPage(){
    //Array for shop items
    const shopItems = [
        {
            ID: 1,
            Category: "Tea",
            ShopItemImage: shopItemImage,
            ShopItemName: "Loose Leaf Earl Grey",
            ShopItemDescription: "Bold black tea with hints of bergamot citrus",
            sizes: ["2oz", "4oz"],
            prices: ["$3.50", "$6.00"]
        },
        {   ID: 2,
            Category: "Tea",
            ShopItemImage: shopItemImage,
            ShopItemName: "Loose Leaf Green Jasmine",
            ShopItemDescription: "Fragrant green tea infused with jasmine blossoms",
            sizes: ["2oz", "4oz"],
            prices: ["$3.75", "$7.00"]
        },
        {   ID: 3,
            Category: "Tea",
            ShopItemImage: shopItemImage,
            ShopItemName: "Loose Leaf Chamomile",
            ShopItemDescription: "A calming blend with a light floral flavor",
            sizes: ["2oz", "4oz"],
            prices: ["$3.25", "$6.00"]
        }
    ];

    const allCategories = ["Tea", "Pots", "Cups", "Sets", ""]

    return(
        <div>
            <h1>Shop</h1>
        </div>
    );
}

export default ShopPage;
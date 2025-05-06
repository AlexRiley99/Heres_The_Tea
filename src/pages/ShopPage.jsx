import ShopItem from '../components/ShopItem.jsx';
import '../styles/ShopPage.css'
import CategoryFilter from '../components/CategoryFilter.jsx';
//Tea Bags
import TeaBags1 from '../assets/Bags/TeaBags1.jpg';
import TeaBags2 from '../assets/Bags/TeaBags2.jpg';

//Accessories
import TeaInfuser from '../assets/Accessories/TeaInfuser.jpg';

//Cups
import ClassicChinese from '../assets/Cups/ClassicChineseCup.jpg';
import MottledGray from '../assets/Cups/MottledGrayCup.jpg';
import PinkPurpleFloral1 from '../assets/Cups/PinkPurpleFloralCup1.jpg';
import PinkPurpleFloral2 from '../assets/Cups/PinkPurpleFloralCup2.jpg';
import PinkRoseCup from '../assets/Cups/PinkRoseCup.jpg';

//Loose Leaf
import LooseLeaf1 from '../assets/LooseLeaf/LooseLeaf1.jpg';
import LooseLeaf2 from '../assets/LooseLeaf/LooseLeaf2.jpg';
import LooseLeaf3 from '../assets/LooseLeaf/LooseLeaf3.jpg';
import LooseLeaf4 from '../assets/LooseLeaf/LooseLeaf4.jpg';
import Chamomile from '../assets/LooseLeaf/ChamomileTea.jpg';

//Pots
import ArtDeco from '../assets/Pots/ArtDecoPot.jpg';
import SpringButterfly from '../assets/Pots/SpringButterflyPot.jpg';

//Sets
import BlueFloral from '../assets/Sets/BlueFloralSet.jpg';
import GoldDragon from '../assets/Sets/GoldDragonSet.jpg';
import PinkRoseSet from '../assets/Sets/PinkRoseSet.jpg';
import PlainWhite from '../assets/Sets/PlainWhiteSet.jpg';
import SummerCitrus from '../assets/Sets/SummerCitrusSet.jpg';

function ShopPage(){
    //Array for shop items
    const shopItems = [
        {
            ID: 1,
            Category: "Bags",
            ShopItemImage: TeaBags1,
            ShopItemName: "Serene Sunrise",
            ShopItemDescription: "A calming blend of chamomile, lemongrass, and a hint of orange peel",
            sizes: ["15ct...............", "30ct..............."],
            prices: ["...............$3.50", "...............$6.00"]
        },
        {   ID: 2,
            Category: "Bags",
            ShopItemImage: TeaBags2,
            ShopItemName: "Midnight Ember",
            ShopItemDescription: "A rich fusion of Assam and Ceylon black teas, with a touch of smoked vanilla",
            sizes: ["15ct...............", "30ct..............."],
            prices: ["...............$3.75", "...............$7.00"]
        },
        {   ID: 3,
            Category: "Accessories",
            ShopItemImage: TeaInfuser,
            ShopItemName: "Classic Chain Infuser",
            ShopItemDescription: "A traditional stainless steel mesh ball with a secure clasp and chain hook",
            sizes: ['2"...............', '4"...............'],
            prices: ["...............$2.00", "...............$3.50"]
        }
    ];

    const allCategories = ["Tea", "Pots", "Cups", "Sets", ""]

    return(
        <div>
            <h1>Shop</h1>
            <div className="shopContainer">
                {shopItems && shopItems.map((item, index) => (
                    <ShopItem
                        key={index}
                        ID = {item.ID}
                        Category = {item.Category}
                        ShopItemImage = {item.ShopItemImage}
                        ShopItemName = {item.ShopItemName}
                        ShopItemDescription = {item.ShopItemDescription}
                        sizes = {item.sizes}
                        prices = {item.prices}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShopPage;
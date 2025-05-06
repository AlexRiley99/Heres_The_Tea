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
import PinkPurpleFloral from '../assets/Cups/PinkPurpleFloralCup.jpg';
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
        },
        {
            ID: 4, 
            Category: "Cups",
            ShopItemImage: ClassicChinese,
            ShopItemName: "Classic Chinese",
            ShopItemDescription: "A timeless white porcelain cup adorned with traditional blue artwork, inspired by classic Chinese tea culture. Lightweight yet sturdy, it’s ideal for sipping green or oolong teas with elegance and simplicity.",
            sizes: ["6oz...............", "8oz..............."],
            prices: ["...............$9.00", "...............$10.00"]
        },
        {
            ID: 5,
            Category: "Cups",
            ShopItemImage: MottledGray,
            ShopItemName: "Mottled Gray",
            ShopItemDescription: "A modern ceramic cup featuring a soft gray glaze with natural dark gray flecks. Earthy and understated, it offers a grounded aesthetic that complements any tea ritual—perfect for those who enjoy form and function in harmony.",
            sizes: ["6oz...............", "8oz..............."],
            prices: ["...............$7.00", "...............$7.50"]
        },
        {
            ID: 6,
            Category: "Cups",
            ShopItemImage: PinkPurpleFloral,
            ShopItemName: "Pink & Purple Floral",
            ShopItemDescription: "A delicate white porcelain cup adorned with soft pink and purple flowers and finished with a refined gold rim. Feminine, graceful, and perfect for hosting afternoon tea or enjoying a floral infusion in style.",
            sizes: ["6oz...............", "8oz..............."],
            prices: ["...............$8.00", "...............$8.50"]
        },
        {
            ID: 7,
            Category: "Cups",
            ShopItemImage: PinkRoseCup,
            ShopItemName: "Pink Rose",
            ShopItemDescription: "This vintage-inspired cup showcases vivid pink roses against a clean white background, accented with a luxurious gold rim. Romantic and classic, it’s ideal for black teas, breakfast blends, or a thoughtful gift.",
            sizes: ["6oz...............", "8oz..............."],
            prices: ["...............$9.50", "...............$10.50"]
        },
        {
            ID: 8,
            Category: "Loose Leaf",
            ShopItemImage: Chamomile,
            ShopItemName: "Chamomile Bloom",
            ShopItemDescription: "Whole chamomile blossoms with a sweet, apple-like aroma that soothes the senses and calms the mind. Naturally caffeine-free and ideal for evening relaxation.",
            sizes: ["2oz...............", "4oz..............."],
            prices: ["...............$4.50", "...............$8.00"]
        },
        {
            ID: 9,
            Category: "Loose Leaf",
            ShopItemImage: LooseLeaf1,
            ShopItemName: "Earl Grey Eclipse",
            ShopItemDescription: "A bold black tea blended with cold-pressed bergamot oil and subtle lavender. Perfect for morning clarity or a refined afternoon cup. Smooth, fragrant, and energizing.",
            sizes: ["2oz...............", "4oz..............."],
            prices: ["...............$5.00", "...............$9.50"]
        },
        {
            ID: 10,
            Category: "Loose Leaf",
            ShopItemImage: LooseLeaf2,
            ShopItemName: "Jasmine Whisper",
            ShopItemDescription: "Delicately scented green tea infused with jasmine blossoms. Light and floral, this tea offers a serene aroma and clean finish, perfect for quiet moments or meditative sipping.",
            sizes: ["2oz...............", "4oz..............."],
            prices: ["...............$5.25", "...............$10.00"]
        },
        {
            ID: 11,
            Category: "Loose Leaf",
            ShopItemImage: LooseLeaf4,
            ShopItemName: "Hibiscus Glow",
            ShopItemDescription: "Tart and vibrant hibiscus petals with a ruby red brew. Bursting with antioxidants and naturally caffeine-free, it makes a refreshing iced tea or zesty hot infusion.",
            sizes: ["2oz...............", "4oz..............."],
            prices: ["...............$4.75", "...............$9.00"]
        },
        {
            ID: 12,
            Category: "Loose Leaf",
            ShopItemImage: LooseLeaf3,
            ShopItemName: "Mint Revival",
            ShopItemDescription: "A cool, invigorating blend of peppermint and spearmint leaves. Cleansing and refreshing with a crisp finish—ideal as a digestive aid or brisk midday pick-me-up.",
            sizes: ["2oz...............", "4oz..............."],
            prices: ["...............$4.50", "...............$8.50"]
        },
        {
            ID: 13,
            Category: "Pots",
            ShopItemImage: ArtDeco,
            ShopItemName: "Art Deco Pot",
            ShopItemDescription: "A striking white porcelain teapot featuring a bold black and gold geometric design inspired by the elegance of the Art Deco era. Sleek lines, a smooth-glazed finish, and a comfortable handle make this piece both functional and stylish—perfect for entertaining or elevating your everyday tea ritual.",
            sizes: ["32oz..............."],
            prices: ["...............$28.00"]
        },
        {
            ID: 14,
            Category: "Pots",
            ShopItemImage: SpringButterfly,
            ShopItemName: "Spring Butterfly Pot",
            ShopItemDescription: "A charming white porcelain teapot adorned with soft pink roses and a delicate yellow butterfly. The lid is topped with a sculpted pink rose knob for a whimsical, garden-inspired finish. Romantic and timeless, this piece is ideal for floral teas and sunny afternoon gatherings.",
            sizes: ["28oz..............."],
            prices: ["...............$30.00"]
        },
        {
            ID: 15,
            Category: "Sets",
            ShopItemImage: BlueFloral,
            ShopItemName: "Blue Floral Set",
            ShopItemDescription: "A classic white porcelain set detailed with delicate blue floral motifs. This timeless design is perfect for traditional tea service, offering an air of refinement and grace for any table.",
            sizes: ["32oz teapot and 4 cups (6oz each)..............."],
            prices: ["...............$48.00"]
        },
        {
            ID: 16,
            Category: "Sets",
            ShopItemImage: GoldDragon,
            ShopItemName: "Gold Dragon Set",
            ShopItemDescription: "A striking red porcelain tea set emblazoned with a gold dragon—symbolizing strength, prosperity, and celebration. Ideal for festive occasions or as a bold statement piece in any collection.",
            sizes: ["32oz teapot and 4 cups (6oz each)..............."],
            prices: ["...............$52.00"]
        },
        {
            ID: 17,
            Category: "Sets",
            ShopItemImage: PinkRoseSet,
            ShopItemName: "Pink Rose Set",
            ShopItemDescription: "This romantic white porcelain set features sculpted pink roses wrapping delicately around the teapot and cups. Elegant and feminine, it’s perfect for weddings, gifts, or a quiet moment of floral bliss.",
            sizes: ["32oz teapot and 4 cups (6oz each)..............."],
            prices: ["...............$58.00"]
        },
        {
            ID: 18,
            Category: "Sets",
            ShopItemImage: PlainWhite,
            ShopItemName: "Plain White Set",
            ShopItemDescription: "Minimalist and versatile, this clean white porcelain set suits every setting—from modern kitchens to traditional tea ceremonies. A reliable go-to for daily use or understated elegance.",
            sizes: ["32oz teapot and 4 cups (6oz each)..............."],
            prices: ["...............$42.00"]
        },
        {
            ID: 19,
            Category: "Sets",
            ShopItemImage: SummerCitrus,
            ShopItemName: "Summer Citrus Set",
            ShopItemDescription: "Bright and whimsical, this vibrant set features a lemon-textured yellow teapot with a sculpted lemon knob, green accents, and a lid styled like a lemon slice. The white cups are trimmed in green with miniature lemons for a fresh, zesty touch. A perfect pick for spring and summer tea parties.",
            sizes: ["32oz teapot and 4 cups (6oz each)..............."],
            prices: ["...............$60.00"]
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
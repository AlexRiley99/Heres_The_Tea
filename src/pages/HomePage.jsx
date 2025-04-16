import '../styles/HomePage.css';
import ValueProp from '../components/ValueProp';
import CatchUpImg from '../assets/CatchUp.jpg';
import TeaAndBook from '../assets/TeaAndBook.jpg';

function HomePage(){
    return(
        <div>
            <div className="taglineContainer">
                <h2 className="tagline">Where Every Sip Tells A Story</h2>
            </div>
            <ValueProp 
                image={CatchUpImg} 
                text="Your cozy spot for meaningful moments. Sip handcrafted blends while reconnecting with friends in a welcoming space where every cup starts a conversation."
            />
            <ValueProp 
                image={TeaAndBook}
                text="Take a break and unwind over a warm cup of tea. Our handpicked blends are perfect for any moment, whether you're catching up, celebrating, or simply enjoying some quiet time."
            />
        </div>
        
    );
}

export default HomePage;
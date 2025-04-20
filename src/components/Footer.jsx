import '../styles/Footer.css';
import tea_socials from '../assets/tea_socials.png';

function Footer(){
    return(
    <footer>
        <div className="footerContents">
            <div className="hoursContainer">
                <p>Hours:</p>
                <p>6am - 5pm Daily</p>
            </div>
            <div className="locationAndPhone">
                <address className="location">217 Lavender Ln, Oakwood, OR 97621</address>
                <p>(980)-765-2134</p>
            </div>
            <div className="socialsContainer">
                <img src={tea_socials} alt="Social media favicons" className="socials"></img>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
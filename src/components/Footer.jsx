import '../styles/Footer.css';

function Footer(){
    return(
    <footer>
        <div className="hours">
            <p>Hours:</p>
            <p>6am - 5pm Daily</p>
        </div>
        <div className="locationPhoneContainer">
            <div className="locationContainer">
                <address className="location">217 Lavender Ln, Oakwood, OR 97621</address>
            </div>
            <div className="phoneContainer">
                <p>(980)-765-2134</p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
import '../styles/Newsletter.css';

function Newsletter(){
    return(
        <div className="newsletterSignup">
            <p>Subscribe to <i>The Tea</i> for exclusive deals, upcoming events, and the latest gossip steeping at the shop.</p>
            <form>
                <input type="email" placeholder="example@email.com"></input>
                <input type="submit" value="Subscribe"></input>
            </form>
        </div>
    );
}

export default Newsletter;
import '../styles/Price.css';

function Price({amount}){
    return(
        <div className="Price">
            <p className="amount">{amount}</p>
        </div>
    );
}
export default Price;
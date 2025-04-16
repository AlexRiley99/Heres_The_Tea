import '../styles/TeaCard.css';

function TeaCard({name, image, description, price}){
    return(
        <div className="teaCard">
            <h2 className="teaName">{name}</h2>
            <img className="teaImg" src={image}></img>
            <p className="teaDescription">{description}</p>
            <p className="teaPrice">{price}</p>
        </div>
    );
}

export default TeaCard;
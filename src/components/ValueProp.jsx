import '../styles/ValueProp.css';

function ValueProp({image, text}){
    return(
        <div className="valuePropContainer">
            <img src={image} className="valuePropImg"></img>
            <p className="valuePropText">{text}</p>
        </div>
    );
}

export default ValueProp;
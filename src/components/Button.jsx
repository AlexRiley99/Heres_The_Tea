function Button({text, id, onClick}){
    return(
        <div className="button">
            <button id={id} onClick={onClick}>
                {text}
            </button>
        </div>
    );
}

export default Button;
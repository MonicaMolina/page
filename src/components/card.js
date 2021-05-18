//const iconIMG = "./img/logog.png";
import iconIMG from "../img/logog.png";
import "./card.css";

function Card() {
    return <div className="row">
<div className="col-2">
<img id="Icon" src={iconIMG} alt=""/>
</div> 
<div id="text-card" className="col-8">
    <p className="fw-bold">Puesto:</p>
    <p>Fecha:</p>
    <p>
        <span className="fw-bold"> Empresa: </span> ... 
        <span className="fw-bold">Principales Actividades:</span>
        </p>
    <p className="fw-bold">...</p>
    <div>
        <div>
            <i>💻</i>
            <p>580.8K</p>
            <i>📞</i>
            <p>1208</p>
            <i>📨</i>
            <p></p>
        </div>
    </div>
</div> 
<div className="col-2">
    <button className="btn btn-outline-dark">More</button>
</div>
    </div>; //.row
}

export default Card;
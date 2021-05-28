import './Aboutme.css';
import yo from "../img/66991953-5F5C-45CD-B203-BD6896C84ED5.jpeg";

function Aboutme () {
    return (
    <div id="Aboutme" className="row">
        <div className="col-lg-2 col-md-2 col-sm-1"></div>
        <img id="imagen" className="col-lg-3 col-md-3 col-sm-2" src={yo} alt=""/>
        <div id="text" className="col-lg-5 col-md-5 col-sm-6">
        <p className="title">¡Hola! Soy Mónica Molina.</p>
        <p className="texto">Estudié Ciencia Política en el ITAM y me encanta trabajar con datos. Me gusta definirme como Cíentifica de Datos Sociales y creo que aunque no todo en la vida son números, conocer los errores en las generalidades nos pueden ayudar a distinguir lo particular.</p> 
        <p className="texto">Soy una entusiasta de la investigación y me gusta explorar nuevas posibilidades con datos en lenguajes como R, Python y JavaScript. Me especializo en temas electorales y finanzas públicas, pero sobretodo amo encontrar soluciones a problemas sociales y respuestas a lo que desconozco.</p>
        <p className="texto">Me he desempeñado como consultora, asistente de investigación y servidora pública.</p>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-1"></div>
    </div>
    );
}

export default Aboutme;
import './footer.css';
//import { faHome } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function footer() {
    return (
        <div id="contain-footer" className="row w-100">
            <a href="/artículos.html" className="enlaces col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12">Artículos</p>
                </div>
            </a>

            <a href="/plataforma.html" className="enlaces col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12">Plataforma Electoral</p>
                </div>
            </a>

            <a href="/encuestas.html" className="enlaces col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12">Encuestas</p>
                </div>
            </a>

            <a href="/datos.html" className="enlaces col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12">Datos Abiertos</p>
                </div>
            </a>

            <a href="https://twitter.com/MolinaConsult" target="_blank" className="contacts col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12"> <i className="fab fa-twitter fa-lg"></i> <span></span>@MolinaConsult </p>
                </div>
            </a>

            <a href="https://www.facebook.com/Molina-Consultores-106192191598828" target="_blank"
                className="contacts col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12"> <i className="fab fa-facebook-f fa-lg"></i> <span></span>Molina Consultores</p>
                </div>
            </a>

            <a href="tel:+523328343915" className="contacts col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12"> <i className="fas fa-phone-alt fa-lg"></i> <span></span>+52 33 2834 3915</p>
                </div>
            </a>

            <a href="mailto:wersocialscientists@gmail.com" className="contacts col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12"> <i className="far fa-envelope fa-lg"></i>
                        <span></span>wersocialscientists@gmail.com</p>
                </div>
            </a>

            <a href="" className="contacts col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12"> <i className="fab fa-linkedin fa-lg"></i> <span></span>Molina Consultores</p>
                </div>
            </a>

            <a href="https://github.com/MolinaConsulting" className="contacts col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12"> <i className="fab fa-github fa-lg"></i> <span></span>MolinaConsulting</p>
                </div>
            </a>

            <a href="https://www.google.com.mx/maps/search/tulipan+azul+55+sendas+residencial/@20.7224666,-103.4896158,12z/data=!3m1!4b1"
                className="contacts col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12"> <i className="fas fa-map-marker-alt fa-lg"></i> <span></span>Zapopan, Jalisco,
                        México.</p>
                </div>
            </a>

            <a href="https://github.com/MolinaConsulting" className="contacts col-12 col-md-6 col-lg-3">
                <div className="row p-3">
                    <p className="title col-12"> <i className="fas fa-magic fa-lg"></i> <span></span>Desing by Molina
                        Consultores.
                    </p>
                </div>
            </a>
        </div>);
    }
    
    export default footer;
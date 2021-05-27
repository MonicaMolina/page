import './footer.css';
//import { faHome } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function footer() {
    return (
        <div id="contain-footer" className="row w-100">

            <a href="https://twitter.com/monyemj" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <i className="fab fa-twitter fa-lg"></i> <span></span>@monyemj </p>
                </div>
            </a>

            <a href="tel:+523328343915" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <i className="fas fa-phone-alt fa-lg"></i> <span></span>+52 33 2834 3915</p>
                </div>
            </a>

            <a href="mailto:monicaesthermj@gmail.com" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <i className="far fa-envelope fa-lg"></i>
                        <span></span>monicaesthermj@gmail.com</p>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/monicaemolinaj/" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <i className="fab fa-linkedin fa-lg"></i> <span></span>Mónica Esther Molina Jasso</p>
                </div>
            </a>

            <a href="https://github.com/MonicaMolina" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <i className="fab fa-github fa-lg"></i> <span></span>MonicaMolina</p>
                </div>
            </a>

            <a href="#home" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <i className="fas fa-magic fa-lg"></i> <span></span>Desing by Mónica Molina.
                    </p>
                </div>
            </a>
        </div>);
    }
    
    export default footer;
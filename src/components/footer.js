import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMagic } from '@fortawesome/free-solid-svg-icons';

function footer() {
    return (
        <div id="contain-footer" className="row w-100">

            <a href="https://twitter.com/monyemj" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <FontAwesomeIcon icon={faTwitter}/> {" "}@monyemj </p>
                </div>
            </a>

            <a href="tel:+523328343915" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <FontAwesomeIcon icon={faPhone}/> {" "}+52 33 2834 3915</p>
                </div>
            </a>

            <a href="mailto:monicaesthermj@gmail.com" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <FontAwesomeIcon icon={faEnvelope}/> {" "}
                        <span></span>monicaesthermj@gmail.com</p>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/monicaemolinaj/" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <FontAwesomeIcon icon={faLinkedinIn}/> {" "}Mónica Esther Molina Jasso</p>
                </div>
            </a>

            <a href="https://github.com/MonicaMolina" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <FontAwesomeIcon icon={faGithub}/> {" "}MonicaMolina</p>
                </div>
            </a>

            <a href="#home" className="contacts col-12 col-md-6 col-lg-4">
                <div className="row p-3">
                    <p className="col-12"> <FontAwesomeIcon icon={faMagic}/> {" "}Desing by Mónica Molina.
                    </p>
                </div>
            </a>
        </div>);
    }
    
    export default footer;
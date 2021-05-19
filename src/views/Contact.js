import './Contact.css';
import Iframe from 'react-iframe';

function Contact() {
    return (
        <div className="container-fluid body-contact">
            <div className="row">
            <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                    width="450px"
                    height="450px"
                    position="relative"/>
            </div>
        </div>
    );
}

export default Contact;
import "./carde.css";

const  educacion = [
    {
        icon: require("../img/logo-itam.png").default,
        institution: "Instituto Tecnológico Autónomo de México",
        degree: "Licenciatura en Ciencia Política",
        period: "2013 - 2019 (en proceso de titulación)",
    },
    {
        icon: require("../img/logo-itam.png").default,
        institution: "Instituto Tecnológico Autónomo de México",
        degree: "Licenciatura en Economía",
        period: "2012 - 2015 (trunca)",
    },
    {   
        icon: require("../img/logo-itam.png").default,
        institution: "Instituto Tecnológico Autónomo de México",
        degree: "Licenciatura en Relaciones Internacionales",
        period: "2016 - 2017 (trunca)",
    },
    {  
        icon: require("../img/Imagen 27-05-21 a las 13.15.jpeg").default,
        institution: "Universitat Pompeu Fabra",
        degree: "Asuntos Económicos de la Unión Europea/Globalización",
        period: "Verano 2014",
    },
    {  
        icon: require("../img/LogoIPSA.jpg").default,
        institution: "IPSA-FLACSO Summer School",
        degree: "Quantitative Methods for Public Policy Analysis",
        period: "Verano 2016",
    },
]

function CardE() {
    return <div id="Card">
        {educacion.map((e, i) => {
    return <div id="card-each" key={i} className="row">
        <div className="col-2">
        <img id="icon-card" src={e.icon} alt=""/>
        </div> 
        <div id="text-card" className="col-10">
            <p className="fw-bold">{e.institution} </p>
            <p className="fw-bold"> {e.degree}</p>
            <p>Período: {e.period}</p>
        </div>
    </div> 
    })}
    </div>
}

export default CardE;
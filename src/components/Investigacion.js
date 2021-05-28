import "./carde.css";

const  ponencias = [
    {
        icon: require("../img/AMECIP.png").default,
        institution: "VIII Congreso Internacional de Ciencia Política. AMECIP.",
        topic: "Cultura política, disputa por los cargos de representación.",
        title: "Ponencia presentada: Metamorfosis del Sistema de Partidos Mexicano: El Efecto de las Candidaturas Independientes",
        date: "9 de diciembre de 2020",
    },
    {  
        icon: require("../img/1858-las-reformas-politicas-a-la-representacion-en-america-latina-detalle.jpeg").default,
        institution: "Segundo Seminario Internacional: “Las reformas políticas a la representación en América Latina. UNAM",
        topic: "Partidos y Sitemas de Partidos",
        title: "Ponencia aceptada: Metamorfosis del Sistema de Partidos Mexicano: El Efecto de las Candidaturas Independientes",
        date: "30 de septiembre al 2 de octubre de 2020 en la Ciudad de México",
    },
    {
        icon: require("../img/LID.jpg").default,
        institution: "4to Seminario de Investigación del Laboratorio de Innovación Democrática LID",
        topic: "Partidos y Sitemas de Partidos",
        title: "Ponencia presentada: Metamorfosis del Sistema de Partidos Mexicano: El Efecto de las Candidaturas Independientes",
        date: "20 de marzo 2020",
    },
    {   
        icon: require("../img/logo-coljal-header.png").default,
        institution: "III Coloquio Internacional de Gobernanza Metropolitana ReGobM2019. El Colegio de Jalisco.",
        topic: "Gobierno abierto y rendición de cuentas",
        title: "Ponencia presentada: Gobierno abierto y opacidad de cuentas. Estudio de la transparencia en los municipios de Jalisco.",
        date: "5 al 8 de noviembre de 2019",
    },
]

function CardI() {
    return <div id="Card">
        {ponencias.map((p, i) => {
    return <div id="card-each" key={i} className="row">
        <div className="col-2">
        <img id="icon-card" src={p.icon} alt=""/>
        </div> 
        <div id="text-card" className="col-10">
            <p className="fw-bold">{p.institution} </p>
            <p className="fw-bold"> {p.title}</p>
            <p>{p.topic}</p>
            <p>Fecha: {p.date}</p>
        </div>
    </div> 
    })}
    </div>
}

export default CardI;
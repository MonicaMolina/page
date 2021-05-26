import "./card.css";

const  jobs = [
    {
        icon: require("../img/Cuantrix.png").default,
        position: "Project Manager del Programa Cuantrix de Fundación Televisa",
        enterprise: "Learny Software",
        period: "Junio 2021 - presente",
        activities: "Coordinación de las actividades del proyecto, planificación e implementación del plan de trabajo y sus responsables, del cual se derivan las estrategias, actividades y alianzas estratégicas, análisis de los avances del proyecto,an del proyecto, tales como, coordinar reuniones con potenciales aliados, generar cartas de presentación del proyecto.",
        direction:"https://cuantrix.mx",
    },
    {
        icon: require("../img/logog.png").default,
        position: "Consultora político-electoral",
        enterprise: "Independiente",
        period: "Marzo 2021 - Junio 2021",
        activities: "Estrategia electoral de campo y posicionamiento de imagen. Ingeniería electoral basada en datos.",
        direction:"Jalisco, México.",
    },
    {   
        icon: require("../img/logog.png").default,
        position: "Asistente de investigación de la Dra. Antonella Bandiera",
        enterprise: "Instituto Tecnológico Autónomo de México",
        period: "Octubre 2020 - Abril 2021",
        activities: "Construcción de bases de datos.",
        direction:"ITAM, Río Hondo 1, Altavista, Álvaro Obregón, 01080 Ciudad de México, CDMX.",
    },
    {  
        icon: require("../img/Congreso.png").default,
        position: "Jefe de Departamento adjunta a la Coordinación de Administración y Finanzas",
        enterprise: "H. Congreso del Estado de Jalisco",
        period: "Julio 2020 - Marzo 2021",
        activities: "Funciones adminstrativas.",
        direction:"Hidalgo # 222 Guadalajara, Jalisco, México.",
    },
    {  
        icon: require("../img/Zapopan.png").default,
        position: "Miembro Honorario del Cómite de Participación Ciudadana",
        enterprise: "Sistema Municipal Anticorrupción de Zapopan, Jalisco",
        period: "Desde Enero 2020",
        activities: "Acceder sin ninguna restricción, por conducto de la Contraloría Ciudadana, a la información que genere el Sistema Municipal; Opinar y realizar propuestas sobre la política municipal y las políticas integrales; Proponer al Comité Coordinadorpara su consideración: Proyectos de bases de coordinación interinstitucional e intergubernamental en las materias de fiscalización y control de recursos públicos, de prevención, control y disuasión de faltas administrativas y hechos de corrupción, en especial sobre las causas que los generan; Proyectos de mejora a los instrumentos, lineamientos y mecanismos para la operación del Sistema Municipal y sus herramientas; entre otras atribuciones.",
        direction:"Zapopan, Jalisco.",
    },
    {  
        icon: require("../img/integralia.png").default,
        position: "Asistente de investigación en el área de Finanzas Públicas",
        enterprise: "Integralia Consultores",
        period: "Abril 2018 - 15 Septiembre 2018",
        activities: "Desarrollo de diversos proyectos de investigación y análisis de riesgo político. Recopilación de información y construcción de bases de datos para reportes legislativos y estudios sobre finanzas públicas.",
        direction:"Integralia Consultores Goldsmith 37 11560 Ciudad de México, CDMX. (Ahora en Insurgentes Sur)",
    },
    {  
        icon: require("../img/Consulado.jpg").default,
        position: "Becaria en los Departamentos de Asuntos Económicos y Documentación",
        enterprise: "Consulado General de México en Nueva York",
        period: "Julio 2017",
        activities: "Reporte del funcionamiento de la Ventanilla MAEX de la Condusef y atención en la emisión de pasaportes, credenciales de elector y otros documentos oficiales.",
        direction:"27 E 39th St, New York, NY 10016, Estados Unidos.",
    },
    {  
        icon: require("../img/Juanacatlan.jpg").default,
        position: "Consultora adjunta en la elaboración de la cuenta pública municipal de Juanacatlán, Jalisco",
        enterprise: "Independiente",
        period: "Junio 2015 - Diciembre 2015",
        activities: "Revisión de la cuenta pública y consultoría para la entrega ante la Auditoria Superior del Estado de Jalisco.",
        direction:"C. Independencia #1, Juanacatlán Centro, 45880 Juanacatlán, Jal.",
    },
    {  
        icon: require("../img/UnMillon.png").default,
        position: "Coordinadora del proyecto Medición de transparencia y rendición de cuentas a nivel municipal",
        enterprise: "Un Millón de Jóvenes Por México",
        period: "Diciembre 2014",
        activities: "Creación del cuestionario y coordinación del análisis de datos.",
        direction:"CDMX",
    },
    {  
        icon: require("../img/IPEA.png").default,
        position: "Organizadora del Panel de Análisis de la Ley de Competencia Económica",
        enterprise: "IPEA-ITAM",
        period: "Abril 2014",
        activities: "Presidenta del Capítulo IPEA-ITAM y coordinadora de actividades del grupo.",
        direction:"ITAM, Río Hondo 1, Altavista, Álvaro Obregón, 01080 Ciudad de México, CDMX.",
    },
    {  
        icon: require("../img/IPEA.png").default,
        position: "Coordinadora en la organización del Foro IPEA-ITAM: EL IMPACTO DE LAS REFORMAS ESTRUCTURALES ",
        enterprise: "IPEA-ITAM",
        period: "Marzo 2014",
        activities: "Presidenta del Capítulo IPEA-ITAM y coordinadora de actividades del grupo.",
        direction:"ITAM, Río Hondo 1, Altavista, Álvaro Obregón, 01080 Ciudad de México, CDMX.",
    },
    {  
        icon: require("../img/Lideres.png").default,
        position: "Asistente de Medios",
        enterprise: "Líderes Mexicanos",
        period: "Septiembre 2013",
        activities: "Asistente en el área de discursos y encargada de redes sociales durante la Comida Anual de Los 300 Líderes más influyentes de México 2013.",
        direction:"CDMX",
    },
]

function Card() {
    return <div id="Card">
        {jobs.map((job, i) => {
    return <div id="card-each" className="row" key={i} >
        <div className="col-2">
        <img id="icon-card" src={job.icon} alt=""/>
        </div> 
        <div id="text-card" className="col-10">
            <p className="fw-bold">Puesto: {job.position} </p>
            <p>Período: {job.period}</p>
            <p className="fw-bold"> {job.enterprise}</p>
            <p className="fw-bold">Principales Responsabilidades:</p>
            <p>{job.activities}</p>
            <div>
                <div>
                    <p>{job.direction}</p>
                </div>
            </div>
        </div>
    </div> 
    })}
    </div>
}

export default Card;
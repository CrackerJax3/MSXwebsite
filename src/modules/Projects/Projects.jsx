import "./styles/Projects.scss"
import { Link } from "react-router-dom"
import SiteFooter from "../Tools/SiteFooter"
import useSectionVisibility from "../Tools/useSectionVisibility"

const Projects = () => {
    const [isVisible, sectionRef] = useSectionVisibility(0.1);

    return <div className="projects-page">
        <div className="sticky-header">
            <Link to="/">SUBOTIX</Link>
        </div>
        <div className="project-section hero">
            <div ref={sectionRef(0)} style={{position: "absolute", width: "5px", height: "5px", top: "30%"}}></div>
            <h3 className={isVisible[0] ? "" : "hidden"}>Sawy the Camel</h3>
            <p className={isVisible[0] ? "" : "hidden"}>A 2 meter tall, 2 meter long 3D printed camel sculpture</p>
        </div>
        <div className="project-section bull">
            <div ref={sectionRef(1)} style={{position: "absolute", width: "5px", height: "5px", top: "30%"}}></div>
            <h3 className={isVisible[1] ? "" : "hidden"}>Barbacoa</h3>
            <p className={isVisible[1] ? "" : "hidden"}>Horns spanning 2 meters, a longhorn bull sculpture sporting the colors of the American flag</p>
        </div>
        <div className="project-section sawysawy">
            <div ref={sectionRef(2)} style={{position: "absolute", width: "5px", height: "5px", top: "30%"}}></div>
            <h3 className={isVisible[2] ? "" : "hidden"}>Burger Assembler</h3>
            <p className={isVisible[2] ? "" : "hidden"}>Full display of the capabilities of the Sawy-Sawy microcontroller</p>
        </div>
        <SiteFooter/>
    </div>
}

export default Projects;
import './styles/Experiences.scss';
import { Link } from "react-router-dom";
import img5 from "./images/5.webp";
import imgcenter from "./images/center.webp";
import img73 from "./images/73.webp";

const Experiences = () => {
    return <div className="page">
        <div className="skewed-bento left exp-bento">
            <Link to="/projects" className="grid-el grid-area-1 exp-grid slide-from-bottom delay-200">
                <img className="skewed-img left background-img" src={img5} alt="" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">PROJECTS</h3>
                </div>
            </Link>
            <Link to="/art#piano" className="grid-el grid-area-2 exp-grid slide-from-top delay-400">
                <img className="skewed-img left background-img" src={imgcenter} alt="" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">EVENTS</h3>
                </div>
            </Link>
            <Link to="/about#where" className="grid-el grid-area-3 exp-grid slide-from-bottom delay-600">
                <img className="skewed-img left background-img" src={img73} alt="" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">SPACES</h3>
                </div>
            </Link>
        </div>
    </div>
}

export default Experiences
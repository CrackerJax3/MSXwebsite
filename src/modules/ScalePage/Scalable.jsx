import "./styles/Scalable.scss";
import { Link } from "react-router-dom";
import img1 from "./bg-images/1.webp";
import img2 from "./bg-images/2.webp";

const Scalable = () => {
    return <div className="page">
        <div className="skewed-bento right scalable-bento">
            <Link to="/downloads" className="grid-el grid-area-1 scalable-el slide-from-top delay-200">
                <img className="skewed-img right background-img" src={img1} alt="" loading="lazy"/>
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">LEVERAGING <br/> RESOURCES</h3>
                </div>
            </Link>
            <Link to="/projects" className="grid-el grid-area-2 scalable-el slide-from-bottom delay-400">
                <img className="skewed-img right background-img" src={img2} alt="" loading="lazy"/>
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">TO REACH <br/> MILLIONS</h3>
                </div>
            </Link>
        </div>
    </div>
}

export default Scalable;
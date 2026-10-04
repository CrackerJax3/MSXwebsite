import './styles/Making.scss';
import { Link } from "react-router-dom";
import img17 from "./bg-images/17.webp";
import img53 from "./bg-images/53.webp";
import img22 from "./bg-images/22.webp";

const Making = () => {
    return <div className="page">
        <div className="skewed-bento left making-bento">
            <Link to="/about#what" className="grid-el grid-area-1 make-el slide-from-bottom delay-200">
                <img className="skewed-img left background-img" src={img17} alt="" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">STRATEGIZE</h3>
                </div>
            </Link>
            <Link to="/art#fibonacci" className="grid-el grid-area-2 make-el slide-from-bottom delay-400">
                <img className="skewed-img left background-img" src={img53} alt="" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">DESIGN</h3>
                </div>
            </Link>
            <Link to="/art#nosecone" className="grid-el grid-area-3 make-el slide-from-bottom delay-600">
                <img className="skewed-img left background-img" src={img22} alt="" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">EXECUTE</h3>
                </div>
            </Link>
        </div>
    </div>
}

export default Making;
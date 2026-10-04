import "./styles/Impact.scss"
import { Link } from "react-router-dom";

const Impact = () => {
    return <div className="page">
        <div className="skewed-bento right impact-bento">
            <Link to="/art" className="impact-bg1 grid-el grid-area-1 slide-from-left delay-400">
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">MIND BLOWING</h3>
                </div>
            </Link>
            <Link to="/about#where" className="impact-bg2 grid-el grid-area-2 slide-from-left delay-500">
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">TRANSFORMING <br/> COMMUNITIES</h3>
                </div>
            </Link>
            <Link to="/about#what" className="impact-bg3 grid-el grid-area-3 slide-from-bottom delay-400">
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">LIFE CHANGING</h3>
                </div>
            </Link>
        </div> 
    </div>
}

export default Impact;
import "./styles/Everyone.scss"
import { Link } from "react-router-dom";

const Everyone = () => {
    return <div className="page">
        <div className="skewed-bento right everyone-bento">
            <Link to="/about#what" className="everyone-bg1 grid-el grid-area-1 slide-from-top delay-200">
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">HORIZONTAL</h3>
                </div>
            </Link>
            <Link to="/about#contact" className="everyone-bg2 grid-el grid-area-2 slide-from-top delay-400">
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">COMMUNITY</h3>
                </div>
            </Link>
            <Link to="/about#where" className="everyone-bg3 grid-el grid-area-3 slide-from-top delay-600">
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">VERTICAL</h3>
                </div>
            </Link>
        </div> 
    </div>
}

export default Everyone;
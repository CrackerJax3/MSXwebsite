import "./styles/Art.scss"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import TypingEffect from "../Tools/TypingEffect"
import artPieces from "./artPieces"

const ArtPiece = ({ piece, visible, sectionRef }) => {
    const [active, setActive] = useState(0);

    return <div className="art-section" id={piece.id} ref={sectionRef}>
        {piece.images.map((image, index) => (
            <div key={index} className={"art-bg" + (index === active ? " active" : "")} style={{ backgroundImage: `url(${image.full})` }}/>
        ))}
        <div className="art-text">
            <h3 className={visible ? "" : "hidden"}>{piece.title}</h3>
            <h4 className={visible ? "" : "hidden"}>{piece.location}</h4>
            <p className={visible ? "" : "hidden"}>{piece.description}</p>
            <div className={"art-stats" + (visible ? "" : " hidden")}>
                {piece.stats.map((stat) => <span key={stat}>{stat}</span>)}
            </div>
        </div>
        {piece.images.length > 1 && <div className="art-thumbs">
            {piece.images.map((image, index) => (
                <button
                    key={index}
                    className={"grid-el art-thumb" + (index === active ? " active" : "") + (visible ? " slide-from-bottom delay-" + Math.min(200 + index * 100, 600) : " hidden")}
                    onClick={() => setActive(index)}
                    aria-label={`${piece.title} photo ${index + 1}`}
                >
                    <img className="skewed-img left background-img" src={image.small} alt="" loading="lazy"/>
                </button>
            ))}
        </div>}
    </div>
}

const Art = () => {
    const [isVisible, setIsVisible] = useState([]);
    const [showCaption, setShowCaption] = useState(false);
    const elementsRef = useRef([]);

    useEffect(() => {
        const timer = setTimeout(() => setShowCaption(true), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const elements = elementsRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = elements.indexOf(entry.target);
                    if (index !== -1) {
                        setIsVisible((prev) => {
                            const updatedVisibility = [...prev];
                            updatedVisibility[index] = entry.isIntersecting;
                            return updatedVisibility;
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        elements.forEach((element) => { if (element) observer.observe(element); });
        return () => observer.disconnect();
    }, []);

    return <div className="art-page">
        <header className="sticky-header">
            <Link to="/">MSX</Link>
        </header>
        <div className="art-intro" style={{ backgroundImage: `url(${artPieces[0].images[0].full})` }}>
            <h3>ART</h3>
            <div className="art-intro-caption">
                <TypingEffect words={["", "Large scale sculpture, installations and collaborations"]} index={showCaption ? 1 : 0} typeSpeed={40} delSpeed={20}/>
            </div>
            <nav className="art-index">
                {artPieces.map((piece) => (
                    <a key={piece.id} className="underline-anim" href={`#${piece.id}`} onClick={(e) => {
                        // HashRouter owns the URL hash, so scroll manually instead of following the anchor
                        e.preventDefault();
                        document.getElementById(piece.id).scrollIntoView({ behavior: "smooth" });
                    }}>{piece.title.toUpperCase()}</a>
                ))}
            </nav>
        </div>
        {artPieces.map((piece, index) => (
            <ArtPiece key={piece.id} piece={piece} visible={isVisible[index]} sectionRef={(el) => elementsRef.current[index] = el}/>
        ))}
        <div className="art-footer">
            <Link className="underline-anim" to="/">BACK TO MSX</Link>
        </div>
    </div>
}

export default Art;

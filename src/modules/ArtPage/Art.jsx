import "./styles/Art.scss"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import TypingEffect from "../Tools/TypingEffect"
import artPieces from "./artPieces"
import SiteFooter from "../Tools/SiteFooter"
import useSectionVisibility from "../Tools/useSectionVisibility"

const ArtPiece = ({ piece, visible, sectionRef }) => {
    const [active, setActive] = useState(0);

    return <div className="showcase-section" id={piece.id} ref={sectionRef}>
        {piece.images.map((image, index) => (
            <div
                key={index}
                className={"showcase-bg" + (index === active ? " active" : "")}
                style={{ backgroundImage: `url(${image.full})` }}
                role="img"
                aria-label={`${piece.title}, photo ${index + 1}`}
                aria-hidden={index !== active}
            />
        ))}
        <div className="showcase-text">
            <h2 className={visible ? "" : "hidden"}>{piece.title}</h2>
            <h3 className={visible ? "" : "hidden"}>{piece.location}</h3>
            <p className={visible ? "" : "hidden"}>{piece.description}</p>
            <div className={"showcase-stats" + (visible ? "" : " hidden")}>
                {piece.stats.map((stat) => <span key={stat}>{stat}</span>)}
            </div>
        </div>
        {piece.images.length > 1 && <div className="art-thumbs" role="group" aria-label={`${piece.title} photos`}>
            {piece.images.map((image, index) => (
                <button
                    key={index}
                    className={"grid-el art-thumb" + (index === active ? " active" : "") + (visible ? " slide-from-bottom delay-" + Math.min(200 + index * 100, 600) : " hidden")}
                    onClick={() => setActive(index)}
                    aria-label={`Show photo ${index + 1}`}
                    aria-pressed={index === active}
                >
                    <img className="skewed-img left background-img" src={image.small} alt="" loading="lazy"/>
                </button>
            ))}
        </div>}
    </div>
}

const Art = () => {
    const [isVisible, sectionRef] = useSectionVisibility();
    const [showCaption, setShowCaption] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowCaption(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return <div className="showcase-page art-page">
        <header className="showcase-header">
            <Link to="/">MSX</Link>
        </header>
        <main>
            <div className="showcase-intro" style={{ backgroundImage: `url(${artPieces[0].images[0].full})` }}>
                <h1>ART</h1>
                <div className="showcase-caption">
                    <TypingEffect words={["", "Large scale sculpture, installations and collaborations"]} index={showCaption ? 1 : 0} typeSpeed={40} delSpeed={20}/>
                </div>
                <nav className="art-index" aria-label="Art pieces">
                    {artPieces.map((piece) => (
                        <a key={piece.id} className="underline-anim" href={`#${piece.id}`}>{piece.title.toUpperCase()}</a>
                    ))}
                </nav>
            </div>
            {artPieces.map((piece, index) => (
                <ArtPiece key={piece.id} piece={piece} visible={isVisible[index]} sectionRef={sectionRef(index)}/>
            ))}
        </main>
        <SiteFooter/>
    </div>
}

export default Art;

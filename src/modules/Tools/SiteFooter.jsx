import { Link } from "react-router-dom"
import { youtube } from "./contact"

export default function SiteFooter() {
    return <footer className="site-footer">
        <nav aria-label="Site">
            <Link className="underline-anim" to="/">HOME</Link>
            <Link className="underline-anim" to="/about">ABOUT</Link>
            <Link className="underline-anim" to="/art">ART</Link>
            <Link className="underline-anim" to="/projects">PROJECTS</Link>
            <Link className="underline-anim" to="/downloads">DOWNLOADS</Link>
            <Link className="underline-anim" to="/about#contact">CONTACT</Link>
            <a className="underline-anim" href={youtube.href} target="_blank" rel="noreferrer">{youtube.label}</a>
        </nav>
        <p>MSX Maker Space Exploration · <Link to="/privacy">Privacy Policy</Link></p>
    </footer>
}

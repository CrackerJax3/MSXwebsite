import { Link } from "react-router-dom"
import SiteFooter from "../Tools/SiteFooter"
import useSectionVisibility from "../Tools/useSectionVisibility"
import { whatsapp, youtube } from "../Tools/contact"
import heroImage from "../DefaultBanner/res/bg-images/landing-images/32.webp"
import whatImage from "../DefaultBanner/res/bg-images/landing-images/21.webp"
import whereImage from "../DefaultBanner/res/bg-images/landing-images/12.webp"
import contactImage from "../DefaultBanner/res/bg-images/landing-images/62.webp"

const sections = [
    {
        id: "what",
        title: "What is MSX",
        subtitle: "Maker Space Exploration",
        image: whatImage,
        imageLabel: "Students building projects at an MSX maker space",
        text: "MSX builds maker spaces, projects and events that give people of every age hands-on experience: strategizing, designing and fabricating real things, together.",
        links: [{ label: "SEE THE ART", to: "/art" }, { label: "SEE THE PROJECTS", to: "/projects" }],
    },
    {
        id: "where",
        title: "Where We Work",
        subtitle: "Boca Chica, Texas · Saudi Arabia",
        image: whereImage,
        imageLabel: "The Nosecone sculpture at MSX Boca Chica",
        text: "MSX Boca Chica in Brownsville, Texas is home to the Starship Nosecone and Fibonacci sculptures. MSX Saudi Arabia has its own maker space and brings hands-on workshops and events to schools and communities.",
        links: [{ label: "NOSECONE SCULPTURE", to: "/art#nosecone" }, { label: "FLOOR PIANO", to: "/art#piano" }],
    },
    {
        id: "contact",
        title: "Get Involved",
        subtitle: "Workshops · Events · Builds",
        image: contactImage,
        imageLabel: "Families taking part in an MSX community event",
        text: "Want a workshop, an event or a large scale build for your school, company or community? Message us on WhatsApp.",
        external: [...whatsapp, youtube],
    },
];

const About = () => {
    const [isVisible, sectionRef] = useSectionVisibility();

    return <div className="showcase-page about-page">
        <header className="showcase-header">
            <Link to="/">MSX</Link>
        </header>
        <main>
            <div className="showcase-intro" style={{ backgroundImage: `url(${heroImage})` }}>
                <h1>ABOUT</h1>
                <div className="showcase-caption">
                    <p className="shadowed-text">Making impactful, scalable experiences for everyone</p>
                </div>
            </div>
            {sections.map((section, index) => {
                const hidden = isVisible[index] ? "" : "hidden";
                return <section key={section.id} id={section.id} className="showcase-section" ref={sectionRef(index)}>
                    <div className="showcase-bg active" style={{ backgroundImage: `url(${section.image})` }} role="img" aria-label={section.imageLabel}/>
                    <div className="showcase-text">
                        <h2 className={hidden}>{section.title}</h2>
                        <h3 className={hidden}>{section.subtitle}</h3>
                        <p className={hidden}>{section.text}</p>
                        <div className={"showcase-stats " + hidden}>
                            {section.links?.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
                            {section.external?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
                        </div>
                    </div>
                </section>
            })}
        </main>
        <SiteFooter/>
    </div>
}

export default About;

import './styles/Landing.scss';
import Banner from '../DefaultBanner/Banner';
import { useState, Fragment } from 'react';
import Making from '../MakePage/Making';
import Experiences from '../ExpPage/Experiences';
import Scalable from '../ScalePage/Scalable';
import Impact from '../ImpactPage/ImpactPage';
import Everyone from '../EveryonePage/Everyone';
import TypingEffect from '../Tools/TypingEffect';
import { Link } from 'react-router-dom';
import whatsappIcon from './res/whatsapp-svgrepo-com.svg';
import { whatsapp } from '../Tools/contact';

const LandingPage = () => {
  const toggleHeaderTrigger = (trigger) => { setHeaderTriggered(trigger) }
  const [headerTriggered, setHeaderTriggered] = useState(false);
  const [page, setPage] = useState(<Banner HeaderCallback={toggleHeaderTrigger}/>);
  const [pageKey, setPageKey] = useState(0);
  const [showNumber, setShowNumber] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNumber = () => {
    setShowNumber(!showNumber);
  }

  const pageChange = (changeKey) => {
    if(changeKey === pageKey) return;
    else setPageKey(changeKey);
    if(changeKey !== 0) setHeaderTriggered(true)
    if(changeKey === 0) {setHeaderTriggered(false); setPage(<Banner HeaderCallback={toggleHeaderTrigger}/>);}
    else if(changeKey === 1) setPage(<Making/>);
    else if(changeKey === 2) setPage(<Impact/>);
    else if(changeKey === 3) setPage(<Scalable/>);
    else if(changeKey === 4) setPage(<Experiences/>);
    else if(changeKey === 5) setPage(<Everyone/>);
  };

 
  const navItems = [[1, "MAKING"], [2, "IMPACTFUL"], [3, "SCALABLE"], [4, "EXPERIENCES"], [5, "EVERYONE"]];

  return (
    <div className="landing-page">
      <header className="sticky-header">
        <div>
          <h1 className={headerTriggered ? "animated" : ""}>
            <button className="home-button" onClick={() => pageChange(0)}>MSX</button>
          </h1>
          <TypingEffect words={["", "MAKER SPACE EXPLORATION"]} index={(headerTriggered ? 1 : 0)}  typeSpeed={50} delSpeed={20} flicker={false}/>
        </div>
        <nav className="header-links" aria-label="Pages">
          <Link to="/art" className="underline-anim">ART</Link>
          <Link to="/about" className="underline-anim">ABOUT</Link>
        </nav>
        <button className="whatsapp-icon" onClick={toggleNumber} aria-expanded={showNumber} aria-controls="whatsapp-links">
          <img src={whatsappIcon} alt="Contact MSX on WhatsApp"/>
        </button>
        <div id="whatsapp-links" className={"phone-number" + (showNumber ? "" : " collapsed")}>
          {whatsapp.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
        </div>
      </header>
      {page}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="landing-nav">
        {menuOpen ? "CLOSE" : "MENU"}
      </button>
      <nav id="landing-nav" className={"landing-nav" + (menuOpen ? " open" : "")} aria-label="Sections">
        {navItems.map(([key, label]) => <Fragment key={key}>
          {key === 5 && <p>FOR</p>}
          <button className="underline-anim nav-button" aria-current={pageKey === key} onClick={() => {pageChange(key); setMenuOpen(false)}}> {label} </button>
        </Fragment>)}
      </nav>
    </div>
  );
};

export default LandingPage;

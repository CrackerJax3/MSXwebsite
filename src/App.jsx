import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Landing from './modules/Landing/Landing'
import Projects from './modules/Projects/Projects';
import ScrollToTop from './modules/Tools/ScrollToTop'
import PageMeta from './modules/Tools/PageMeta';
import PrivacyPolicy from './modules/PrivacyPolicy/PrivacyPolicy';
import SawyDownloads from './modules/Downloads/SawyDownloads'
import Art from './modules/ArtPage/Art';
import About from './modules/AboutPage/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <PageMeta />
        <Routes>
          <Route path={"/"} element={<Landing/>}/>
          <Route path={"/projects"} element={<Projects/>}/>
          <Route path={"/privacy"} element={<PrivacyPolicy/>}/>
          <Route path={"/downloads"} element={<SawyDownloads/>}/>
          <Route path={"/art"} element={<Art/>}/>
          <Route path={"/about"} element={<About/>}/>
          <Route path={"*"} element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

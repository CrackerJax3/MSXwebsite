import { Link } from "react-router-dom";
import Accordian from "./Accordian";
import SiteFooter from "../Tools/SiteFooter";
import "./styles/Sawy.scss";
import defaultFirmware from "./res/files/default_firmware.zip?url";
import fingerRobot from "./res/files/finger_robot.zip?url";
import lineFollower from "./res/files/line_follower_robot.zip?url";

export default function SawyDownloads() {
    return <><main id="download-section">
        <header className="downloads-header">
            <Link to="/">MSX</Link>
            <h1>SAWY-SAWY DOWNLOADS</h1>
        </header>
        <div id="two-column-container">
            <div style={{display: "flex", flexDirection: "column", flex: " 2 1 0", marginBottom: "50px"}}>
                <Accordian contentHeight="1820px" label="the dito">
                    <div>
                        <h3 style={{margin: "20px", height: "40px", textAlign: "center"}}>upload code</h3>
                        <iframe
                            title="How to upload code"
                            className="embedded-slide"
                            height="500px" 
                            style={{width: "100%", margin: "0 auto 20px auto"}}
                            src="https://docs.google.com/presentation/d/e/2PACX-1vQJdEJ6zX6NixCrjQTAdcCCdA2ouCLl2hjiYQGp4HFjMNsDiIRhFwe36l0cff5A_i3EUquyIIznh4lR/embed?loop=true"
                            allowFullScreen={true}
                        />
                        <hr style={{margin: "10px"}}/>
                        <h3 style={{margin: "20px", height: "40px", textAlign: "center"}}>wiring diagram</h3>
                        <iframe
                            title="Wiring diagram"
                            className="embedded-slide"
                            height="500px" 
                            style={{width: "100%", margin: "0 auto 20px auto"}}
                            src="https://docs.google.com/presentation/d/e/2PACX-1vTdtoGy2skIJxsOCzhssWHuCg7SsrG4ia8iljzUE4nFrmJlzyJ928XZK8kdvy4hYxcsQmVr1CPPPX8O/embed?loop=true"
                            allowFullScreen={true}
                        />
                        <hr style={{margin: "10px"}}/>
                        <h3 style={{margin: "20px", height: "40px", textAlign: "center"}}>assembly video</h3>
                        <iframe
                            title="Assembly video"
                            className="embedded-slide"
                            height="500px" 
                            style={{width: "100%", margin: "0 auto 20px auto"}}
                            src="https://docs.google.com/presentation/d/e/2PACX-1vT0Uk2_Ug4vuMhfU8VNaO09ke1MBXFdCAopYe9DpfZ53KehL-AKtSJ-XFsZ1OhOJd_lrrKF3whQh9jR/embed?loop=true"
                            allowFullScreen={true}
                        />
                    </div>
                </Accordian>
            </div>
            <div style={{display: "flex", flexDirection: "column", flex: " 1 1 0"}}>
                <div style={{margin: "30px"}} className="link-table">
                    <div style={{backgroundColor: "#333"}} className="download-tab"><h2>file downloads</h2></div>
                    <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href={defaultFirmware}    download>default_factory_firmware</a></div>
                    <div style={{backgroundColor: "#f9f9f9"}} className="download-tab"><a className="download-link" href={fingerRobot}        download>sawy-sawy_claw_robot</a></div>
                    <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href={lineFollower} download>line_follower_code</a></div>
                </div>
                <div style={{margin: "30px"}} className="link-table">
                    <div style={{backgroundColor: "#333"}} className="download-tab"><h2>useful links</h2></div>
                    <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href="https://en.softonic.com/download/arduinodroid-arduinoesp8266/android/post-download" rel="noreferrer  noopener" target="_blank">Arduino_Droid</a></div>
                    <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href="https://www.arduino.cc/en/software" rel="noreferrer  noopener" target="_blank">Arduino_IDE</a></div>
                </div>
            </div>
        </div>  
        
        
    </main>
    <SiteFooter/>
    </>
}

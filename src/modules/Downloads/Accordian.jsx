import {useState, useId} from "react";

export default function Accordian(props) {
    const [collapsed, setCollapsed] = useState(true);
    const contentId = useId();

    function toggleCollapsed() {
        setCollapsed(!collapsed);
    }

    return <div style={{width: props.width}} className="accordian-fold">
        <button className="accordian-tab" onClick={toggleCollapsed} aria-expanded={!collapsed} aria-controls={contentId}>
            <span aria-hidden="true" className={(collapsed ? "collapsed " : "") + "accordian-icon"}>{"\u203a"}</span>
            <span className="accordian-label">{props.label}</span>
        </button>
        <div id={contentId} style={{height: props.contentHeight}} className={(collapsed ? "collapsed " : "") + "accordian-content"}>
            {props.children}
        </div>
    </div>
}
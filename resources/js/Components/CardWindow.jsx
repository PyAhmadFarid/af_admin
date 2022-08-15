import ArrowButton from "./ArrowButton";
import "./CardWindow.css";
import { useState } from "react";

const CardWindow = ({ title, children }) => {
    const [open, setOpen] = useState(true);
    return (
        <div className="cardwindow">
            <div className="cardwindownav">
                <div className="cardwindowtitle">{title}</div>
                <div className="cardwindowtool">
                    <button
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        <ArrowButton open={open} />
                    </button>
                </div>
            </div>

            <div className={"cardwindowbody " + (open ? "" : "close")}>
                <div style={{padding:"20px",paddingBottom:"40px"}}>{children}</div>
            </div>
        </div>
    );
};

export default CardWindow;

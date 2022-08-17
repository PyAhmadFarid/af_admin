import "./SideBar.css";
import Logo from "@/Icons/logo.png";
import Logo2 from "@/Icons/logo2.png";
import { useState } from "react";
import useClickOutside from "@/utility/useClickOutside";
import { Inertia } from "@inertiajs/inertia";
import ArrowButton from "./ArrowButton";

export const SideBarItem = ({ title, icon, children, active, min, href }) => {
    const [open, setOpen] = useState(false);

    let child = useClickOutside(() => {
        setOpen(false);
    });

    const click = () => {
        if (!children) {
            Inertia.get(href);
        }
        setOpen(!open);
    };
    return (
        <div className="sidebaritem" ref={child}>
            <div
                className={
                    "sidebarcotainer " +
                    (active ? "active " : "") +
                    (min ? "min" : "")
                }
            >
                <div
                    className={"sidebarbutton " + (min ? "min" : "")}
                    onClick={click}
                >
                    <div className="sidebartextlogo">
                        {icon || (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="30px"
                            >
                                <path
                                    fill="currentcolor"
                                    d="M17,2H7A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7A5,5,0,0,0,17,2Zm3,15a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4H17a3,3,0,0,1,3,3Z"
                                />
                            </svg>
                        )}

                        {!min && <span>{title || "Title"}</span>}
                    </div>
                    {!min && children && <ArrowButton open={open} />}
                </div>
            </div>
            <div
                className={
                    "sidebarchild " + (!open ? "close " : " ") + (min && "min")
                }
            >
                {children}
            </div>
        </div>
    );
};
export const SideBarXButton = ({ active, setActive }) => {
    return (
        <div
            className={"sidebarxbutton " + (active ? "" : "off")}
            onClick={() => {
                setActive(!active);
            }}
        >
            <span className="x1"></span>
            <span className="x2"></span>
            <span className="x3"></span>
        </div>
    );
};
export const SideBarSpan = ({ min, children }) => {
    return (
        <div className={"sidebarspan " + (min && "min")}>
            {children || "data"}
        </div>
    );
};

export const SideBar = ({ active, children }) => {
    return (
        <div className={"sidebar " + (active ? "off" : "")}>
            <div className={"sidebarlogo " + (active ? "off" : "")}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 383 383"
                    width="30px"
                >
                    <path
                        fill="currentcolor"
                        d="M151,171a14,14,0,0,0-14,14v38a14,14,0,0,0,28,0V185A14,14,0,0,0,151,171Z"
                    />
                    <path
                        fill="currentcolor"
                        d="M233,171a14,14,0,0,0-14,14v38a14,14,0,0,0,28,0V185A14,14,0,0,0,233,171Z"
                    />
                    <path
                        fill="currentcolor"
                        d="M288,0H95A95,95,0,0,0,0,95V288a95,95,0,0,0,95,95H288a95,95,0,0,0,95-95V95A95,95,0,0,0,288,0ZM192,320c-80.63,0-146-51.94-146-116,0-23.46,8.77-45.28,23.84-63.54L68.78,62.31l61.41,36.58a180.84,180.84,0,0,1,123.89.1L315,62.71,314,140.21C329.15,158.51,338,180.43,338,204,338,268.06,272.63,320,192,320Z"
                    />
                </svg>

                <span>Catmin</span>
                {/* <img src={active ? Logo2 : Logo} alt="" /> */}
            </div>
            {children}
        </div>
    );
};

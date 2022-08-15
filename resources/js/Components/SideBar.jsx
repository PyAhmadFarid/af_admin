import "./SideBar.css";
import Logo from "@/Icons/logo.png";
import Logo2 from "@/Icons/logo2.png";
import { useState } from "react";
import useClickOutside from "@/utility/useClickOutside";
import { Inertia } from "@inertiajs/inertia";

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
                                    fill="#454545"
                                    d="M17,2H7A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7A5,5,0,0,0,17,2Zm3,15a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4H17a3,3,0,0,1,3,3Z"
                                />
                            </svg>
                        )}

                        {!min && <span>{title || "Title"}</span>}
                    </div>
                    {!min && children && (
                        <svg
                            className={"sidebararrow " + (open && "open")}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30px"
                        >
                            <path
                                fill="#454545"
                                d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"
                            />
                        </svg>
                    )}
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
                <img src={active ? Logo2 : Logo} alt="" />
            </div>
            {children}
        </div>
    );
};

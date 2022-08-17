import "./Admin.css";
import Logo from "@/Icons/logo.png";
import Logo2 from "@/Icons/logo2.png";
import { useState } from "react";
import useClickOutside from "@/utility/useClickOutside";
import {
    SideBar,
    SideBarXButton,
    SideBarItem,
    SideBarSpan,
} from "@/Components/SideBar";

const SwitchButton = ({ status, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={"switchbutton " + (status ? "on" : "")}
        >
            <div className="circle">
                {!status ? (
                    <svg
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentcolor"
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                        />
                    </svg>
                ) : (
                    <svg
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentcolor"
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                        />
                    </svg>
                )}
            </div>
            <div></div>
        </div>
    );
};

const Admin = ({ title, children }) => {
    const [sideHide, setSideHide] = useState(false);
    const [navHide, setNavHide] = useState(true);

    const [darkMode, setDarkMode] = useState(false);

    let out = useClickOutside(() => {
        setNavHide(true);
    });

    const setDark = (e) => {
        setDarkMode(!darkMode);
        const body = document.getElementsByTagName("body");
        console.log(body);
        if (darkMode) {
            body[0].setAttribute("id", "dark");
        } else {
            body[0].setAttribute("id", "");
        }
    };
    // const [route,setRoute] = useState(route().current());

    return (
        <div className="contain">
            <SideBar active={sideHide}>
                <SideBarItem
                    active={route().current("dashboard")}
                    title="Dashboard"
                    href="/dashboard"
                    min={sideHide}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            width="30px"
                        >
                            <path
                                fill="currentcolor"
                                d="M12,5A10,10,0,0,0,3.34,20a1,1,0,0,0,1.74-1A7.92,7.92,0,0,1,4,15a8,8,0,1,1,14.93,4,1,1,0,0,0,.37,1.37A1,1,0,0,0,20.66,20,10,10,0,0,0,12,5Zm2.84,5.76L13.29,12.3A2.91,2.91,0,0,0,12,12a3,3,0,1,0,3,3,2.9,2.9,0,0,0-.3-1.28l1.55-1.54a1,1,0,0,0,0-1.42A1,1,0,0,0,14.84,10.76ZM12,16a1,1,0,0,1,0-2,1,1,0,0,1,.7.28v0h0A1,1,0,0,1,13,15,1,1,0,0,1,12,16Z"
                            />
                        </svg>
                    }
                />

                <SideBarItem
                    min={sideHide}
                    active={route().current("posts")}
                    title="Posts"
                    href="/posts"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30px"
                        >
                            <path
                                fill="currentcolor"
                                d="M17,11H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0,4H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM11,9h6a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2ZM21,3H7A1,1,0,0,0,6,4V7H3A1,1,0,0,0,2,8V18a3,3,0,0,0,3,3H18a4,4,0,0,0,4-4V4A1,1,0,0,0,21,3ZM6,18a1,1,0,0,1-2,0V9H6Zm14-1a2,2,0,0,1-2,2H7.82A3,3,0,0,0,8,18V5H20Zm-9-4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm0,4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Z"
                            />
                        </svg>
                    }
                />
                <SideBarItem
                    min={sideHide}
                    title="Pages"
                    active={route().current("pages")}
                    href="/pages"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30px"
                        >
                            <path
                                fill="currentcolor"
                                d="M19,2H9A3,3,0,0,0,6,5V6H5A3,3,0,0,0,2,9V19a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V18h1a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM16,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H16Zm0-9H4V9A1,1,0,0,1,5,8H15a1,1,0,0,1,1,1Zm4,5a1,1,0,0,1-1,1H18V9a3,3,0,0,0-.18-1H20Zm0-9H8V5A1,1,0,0,1,9,4H19a1,1,0,0,1,1,1Z"
                            />
                        </svg>
                    }
                />
                <SideBarItem
                    min={sideHide}
                    href="/media"
                    active={route().current("media")}
                    title="Media"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30px"
                        >
                            <path
                                fill="currentcolor"
                                d="M18,15V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H15A3,3,0,0,0,18,15ZM4,5A1,1,0,0,1,5,4H15a1,1,0,0,1,1,1V9.36L14.92,8.27a2.56,2.56,0,0,0-1.81-.75h0a2.58,2.58,0,0,0-1.81.75l-.91.91-.81-.81a2.93,2.93,0,0,0-4.11,0L4,9.85Zm.12,10.45A.94.94,0,0,1,4,15V12.67L6.88,9.79a.91.91,0,0,1,1.29,0L9,10.6Zm8.6-5.76a.52.52,0,0,1,.39-.17h0a.52.52,0,0,1,.39.17L16,12.18V15a1,1,0,0,1-1,1H6.4ZM21,6a1,1,0,0,0-1,1V17a3,3,0,0,1-3,3H7a1,1,0,0,0,0,2H17a5,5,0,0,0,5-5V7A1,1,0,0,0,21,6Z"
                            />
                        </svg>
                    }
                />
                <SideBarItem
                    min={sideHide}
                    title="Comments"
                    href="/comments"
                    active={route().current("comments")}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30px"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentcolor"
                                d="M12,9a1,1,0,1,0,1,1A1,1,0,0,0,12,9Zm7-7H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM8,9a1,1,0,1,0,1,1A1,1,0,0,0,8,9Zm8,0a1,1,0,1,0,1,1A1,1,0,0,0,16,9Z"
                            />
                        </svg>
                    }
                />

                <SideBarSpan min={sideHide}>Data</SideBarSpan>

                <SideBarItem active={false} min={sideHide}>
                    <SideBarItem title={"child title"} />
                    <SideBarItem title={"child title"} />
                    <SideBarItem title={"child title"} />
                </SideBarItem>
                <SideBarItem min={sideHide} />
                {/* <input type="text" name="" id="" /> */}
            </SideBar>
            <div className="content">
                <div className="navbar">
                    <div>
                        <SideBarXButton
                            active={sideHide}
                            setActive={setSideHide}
                        />
                        <div className="navbartitle">Admin P</div>
                    </div>
                    <div className="navtool">
                        <SwitchButton status={darkMode} onClick={setDark} />
                        <div className="bell">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                width="25px"
                            >
                                <path
                                    fill="currentcolor"
                                    d="M18,13.18V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,1-1V16A3,3,0,0,0,18,13.18ZM8,10a4,4,0,0,1,8,0v3H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20Zm6-3H6V16a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"
                                />
                            </svg>
                        </div>
                        <div ref={out} className="profilebody">
                            <button
                                className="profile"
                                onClick={() => {
                                    setNavHide(!navHide);
                                }}
                            >
                                <img src="/images/profile.jpg" alt="" />
                            </button>
                            <div
                                className={
                                    "profiledrop " + (navHide ? "hide" : "")
                                }
                            >
                                <SideBarItem title={"profile"} />
                                <SideBarItem title={"setting"} />
                                <SideBarItem title={"logout"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">{children}</div>
            </div>
        </div>
    );
};

export default Admin;

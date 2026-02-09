import * as links from "../../lib/Links.js"
import * as components from "../../lib/Components.js"
import {getScreenWidth, getScreenHeight, getNavbarHeight} from "../../Window.jsx";
import {useState} from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    const [dropNavOpen, setDropNavOpen] = useState(false);
    const [mobileNavOpacity, setMobileNavOpacity] = useState("opacity-0");

    const ls = "*:px-[1vw] *:text-black *:hover:text-dark-salmon-1 *:font-normal *:hover:font-bold *:dark:text-indigo-50 *:dark:hover:text-medium-salmon-1 *:font-outfit textColorTransition";

    return (
        <nav
            style = {{'--s-width': getScreenWidth(), '--s-height': getScreenHeight(), '--s-nvh': getNavbarHeight()}}
            className = "z-50 w-full fixed h-(--s-nvh) lg:h-(--s-nvh) top-0" >
            <div
                className = "absolute top-0 left-0 w-full h-full opacity-100 bg-navbar-light dark:bg-black hover:opacity-90 hover:bg-white"></div>
            <div className = "relative top-0 left-0 z-10 flex items-center justify-between h-(--s-nvh) lg:h-(--s-nvh) ">
                <div className = "h-full grow-0">
                    <a href = "/" className = "h-full w-full">
                        <img alt = "CTF logo"  className = "h-full grow-0" src = {"../assets/icons/site/logo/logo-no-bg-white.png"} />
                    </a>
                </div>
                <div className = "flex justify-between grow **:whitespace-nowrap">
                    <div className = "hidden lg:flex px-2 lg:items-center">
                        <ul className ={"flex items-center justify-between *:text-1.5xl " +ls}>
                            <li className = "routeLink"><Link to="/">Home</Link></li> {/*TODO*/}
                            <li className = "routeLink"><Link to = "/about">About Our Program</Link></li> {/*TODO*/}
                            <li className = "routeLink"><Link to= "/team">Our Team</Link></li> {/*TODO*/}
                        </ul>
                    </div>
                    <div className = "hidden lg:inline px-2">
                        <ul className = "flex *:px-[1vw]">
                            <li>
                                <components.LinkButton innerText = "Lessons sign up" linkTo = {links.classSignUpLink}/>
                            </li>
                            <li>
                                <components.LinkButton innerText = "Tutor sign up" linkTo = {links.tutorSignUpLink}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = "lg:hidden">
                    <div className = "mr-2">
                        <components.MenuBarsIcon onClickEvent={()=>{setDropNavOpen(!dropNavOpen); console.log(dropNavOpen)}} color={'white'}/>
                    </div>
                    {
                        dropNavOpen ?
                            <div className = "absolute top-(--s-nvh) dark:bg-none backdrop-blur-sm rounded-lg text-white font-lilex right-0" onMouseOver = {()=>{setMobileNavOpacity("opacity-15")}} onMouseOut = {() => {setMobileNavOpacity("opacity-0")}}>
                                <div className = {"w-full h-full bg-white absolute top-0 left-0 right-0 -z-10 rounded-lg opacityTransition " + mobileNavOpacity}></div>
                                <ul className = {ls + " *:py-0.5"}>
                                    <li onClick={() => setDropNavOpen(false)}><Link to="/">Home</Link></li> {/*TODO*/}
                                    <li onClick={() => setDropNavOpen(false)}><Link to = "/about">About Our Program</Link></li> {/*TODO*/}
                                    <li onClick={() => setDropNavOpen(false)}><Link to= "/team">Our Team</Link></li> {/*TODO*/}
                                    <li>
                                        <components.LinkButton innerText = "Lessons sign up" linkTo = {links.classSignUpLink}/>
                                    </li>
                                    <li>
                                        <components.LinkButton innerText = "Tutor sign up" linkTo = {links.tutorSignUpLink}/>
                                    </li>
                                </ul>
                            </div>
                            : null
                    }
                </div>
            </div>
        </nav>
    );
}
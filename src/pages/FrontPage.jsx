import React, { useState } from 'react'
import {createRoot} from "react-dom/client";
import * as components from "../lib/Components.js"
import * as links from "../lib/Links.js"
import * as images from "../lib/Images.js";
import * as text from "../lib/TextDescriptions.js";

import * as sections from "./sections/FrontPage/FrontPageSections.jsx";
import {getNavbarHeight, getScreenHeight, getScreenWidth, getScreenWidthNum} from "../Window.jsx";
import {CODE_BG_ALT} from "../lib/Images.js";

function FrontPage() {

    const circle = {
        radius: getScreenWidthNum()/6,
        opacity: 20
    }

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const mouseHoverBackground = (event) => {
        // console.log('HOVERING', event.clientX, event.clientY);
        setMouseX(event.clientX -circle.radius);
        setMouseY(event.clientY -circle.radius);
        // console.log(mouseX, mouseY);
    }

    return (
        <main
            style = {{'--s-width': getScreenWidth(), '--s-height': getScreenHeight()}}
            className = "w-(--s-width) text-dark-navbar-2 dark:text-white"
            onMouseMove = {(event) => mouseHoverBackground(event)}>
            <div className = 'h-screen bg-[url("../src/assets/bg/lotsofcode.png")] opacity-55 z-0 *:z-0 absolute top-0 left-0 right-0'>
                <div className = 'h-full bg-linear-to-b from-orange-500/20 dark:from-no-color from-0% to-60% to-white dark:to-black dark:to-80% '></div>
            </div>
            {/* <components.BackgroundCircle
                xpos = {mouseX + 'px'}
                ypos = {mouseY + 'px'}
                diameter = {2*circle.radius + 'px'}
                color = {`white/17`}
                opacity = {0.67}
                pos = {'fixed'}
                bgCustom={`bg-radial from-0% to-white/0 to-70% from-white/17`}
            /> */}
            {/*<components.BackgroundCircle xpos={'1350px'} ypos={'350px'} radius={'500px'} color={'var(--color-medium-salmon-1)'} opacity = {0.37} pos = {'absolute'}/>*/}
            {/*<components.BackgroundCircle xpos={'-100px'} ypos={'-100px'} radius={'550px'} color={'var(--color-dark-indigo-1)'} opacity={0.67}/>*/}
            <div className = '**:z-[5]'>
                <sections.AboutUsAnnouncementPanel/>
                <sections.YouCanLearnWhyUs/>
                <sections.MediaCarousel/>
                <sections.GettingStarted/>
                <sections.ImpactJoinUs/>
            </div>

        </main>
    );
}

export default FrontPage

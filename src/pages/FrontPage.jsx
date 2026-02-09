import React, { useState } from 'react'

import * as sections from "./sections/FrontPage/FrontPageSections.jsx";
import {getNavbarHeight, getScreenHeight, getScreenWidth, getScreenWidthNum} from "../Window.jsx";

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
            <div className = 'h-screen bg-[url("../assets/bg/lotsofcode.png")] opacity-55 z-0 *:z-0 absolute top-0 left-0 right-0'>
                <div className = 'h-full bg-linear-to-b from-orange-500/20 dark:from-no-color from-0% to-60% to-white dark:to-black dark:to-80% '></div>
            </div>
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

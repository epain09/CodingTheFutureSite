import { useState } from 'react'
import {createRoot} from "react-dom/client";
import * as components from "../../../lib/Components.js"
import * as links from "../../../lib/Links.js"
import * as images from "../../../lib/Images.js";
import * as text from "../../../lib/TextDescriptions.js";

import * as sections from "./SectionContents.jsx";
import {getNavbarHeight, getScreenHeight, getScreenWidth} from "../../../Window.jsx";

export function AboutUsAnnouncementPanel() {
    return (
        <div className = "">
            <sections.S1_1/>
        </div>
    );
}

export function YouCanLearnWhyUs() {
    return (
        <div className = "flex flex-col text-center items-center justify-center pb-15 relative from-white bg-linear-to-b from-50% to-(--color-navbar-light) dark:bg-none">
            <sections.S2_1 />
            <sections.S2_2 />
        </div>
    );
}

export function MediaCarousel() {
    return (
        <div className = "pt-5 pb-20 from-white bg-linear-to-t to-(--color-navbar-light) dark:bg-none">
            <sections.S3_1 />
            <sections.S3_2 />
        </div>
    );
}

export function GettingStarted() {
    return (
        <div className = "">
            <sections.S4_1 />
        </div>
    );
}

export function ImpactJoinUs() {
    return (
        <div className = "flex justify-center items-center">
            {/* <sections.S5_1/> */}
            <sections.S5_2/>
        </div>
    );
}

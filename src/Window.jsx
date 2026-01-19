import {createContext, useState, useLayoutEffect, useContext} from "react";

const WindowContext = createContext([document.documentElement.clientWidth, document.documentElement.clientHeight]);

export function Window({children}) {
    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);
    useLayoutEffect(() => {
        const updateDimensions = () => {
            setScreenWidth(document.body.clientWidth-0.5); // Clip by 0.5 to get rid of the fuckass bottom scrollbar
            setScreenHeight(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
            console.log(screenWidth);
            console.log(screenHeight);
        }
        window.addEventListener('resize', updateDimensions);
        updateDimensions();
    })
    return (
        <WindowContext.Provider value = {[screenWidth, screenHeight]}>{children}</WindowContext.Provider>
    );
}

export const getScreenWidth = () => {return useContext(WindowContext)[0]+'px'};
export const getScreenWidthNum = () => {return useContext(WindowContext)[0]};
export const getScreenHeight = () => {return useContext(WindowContext)[1]+'px'};
export const getScreenHeightNum = () => {return useContext(WindowContext)[1]};
export const getNavbarHeight = () => {return 0.09*useContext(WindowContext)[1]+'px'}; // TODO
export const getNavbarHeightNum = () => {return 0.09*useContext(WindowContext)[1]};
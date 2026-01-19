import {getNavbarHeightNum, getScreenHeight, getScreenHeightNum} from "../Window.jsx";

function AboutOurProgram() {

    const screenHeight = document.documentElement.clientHeight - getNavbarHeightNum();

    return (
      <div className = {"flex w-full items-center justify-center"}>
          <h1 className = "dark:text-white font-lilex dark:bg-black">
              About our program!
          </h1>
      </div>
    );
}

export default AboutOurProgram;
import {getNavbarHeight, getScreenHeight, getScreenWidth} from "../../Window.jsx";

export default function SectionContainer({children, style=''}) {
    return (
      <div
          style = {{'--s-width': getScreenWidth(), '--s-height': getScreenHeight(), '--s-nvh': getNavbarHeight()}}
          className ={"font-lilex flex flex-col w-full h-auto items-center justify-center text-center overflow-hidden " +style }>
          {children}
      </div>
    );
}
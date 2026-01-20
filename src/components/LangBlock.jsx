export default function LangBlock({languageName, languageIcon}) {
    const bg_s = {
        n: " bg-clip-border border rounded-3xl opacity-40 h-full w-full ",
        l: " bg-light-orange-1 bg-linear-to-b from-50% to--light-orange-1 border-white text-indigo-950",
        l_h: " hover:border-amber-300",
        d: " dark:bg-none dark:bg-indigo-900 dark:border-indigo-400 dark:text-white",
        d_h: " hover:dark:bg-red-400"
    }

    return (
        <div className = "langblockTransition shadow-none hover:shadow-lg w-9/10 h-full relative border-white dark:border-indigo-400 dark:hover:border-border-green-1 border hover:border-2 rounded-3xl text-wrap wrap-break-word hover:w-26/25 hover:h-26/25 ">
            <div className ={"langblockBg" + bg_s.n + bg_s.l + bg_s.l_h + bg_s.d + bg_s.d_h}></div>
            <div className= "text-wrap break-all absolute top-0 left-0 w-full h-full flex flex-row sm:flex-col lg:flex-row items-center text-center justify-start pl-[10px] sm:pl-0 lg:pl-[1.5vw] sm:justify-center lg:justify-start">
                <img className = "shrink-1 w-auto h-8/10 sm:w-8/10 lg:w-auto sm:h-auto lg:h-3/4 sm:mb-2 lg:mb-0 mr-2 sm:mr-0 lg:mr-4" alt = {languageName} src={languageIcon} />
                <label className = "dark:text-amber-50 text-wrap break-all font-lilex md:text-xl">{languageName}</label>
            </div>
        </div>
    );
}
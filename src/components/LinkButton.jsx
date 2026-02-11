export default function LinkButton({innerText, linkTo}) {
    return (
        <>
            <div className = "grow-0 shadow-md hover:shadow-xl text-xl md:text-base font-normal hover:font-extrabold buttonTransition rounded-2xl md:rounded-3xl dark:bg-(--color-medium-salmon-1) hover:dark:bg-(--color-dark-salmon-1) hover:bg-(--color-medium-salmon-1) bg-(--color-light-orange-3) dark:text-white w-auto px-6 py-2 h-auto md:h-[40px] flex justify-center items-center cursor-pointer">
                <a className = "linkTransition text-center text-wrap font-archivo" target="_blank" rel="noopener noreferrer" href = {linkTo}>
                    {innerText}
                </a>
            </div>
        </>
    );
}
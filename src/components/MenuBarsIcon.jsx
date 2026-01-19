function Bar({color}) {
    return (
        <div style = {{'--c':color}} className = "bg-[var(--c)] h-1/5 rounded-full">
        </div>
    );
}

export default function MenuBarsIcon({onClickEvent, color}) {
    const bars = [];
    for (let i=0; i<3; i++) {
        bars.push(<Bar key={i} color = {color} />);
    }
    return (
        <div className = "flex flex-col justify-between h-[25px] w-[30px] cursor-pointer hover:h-[27px] hover:w-[32px] sizeTransition" onClick={onClickEvent}>
            {bars}
        </div>
    );
}
export default function BackgroundCircle({xpos, ypos, diameter, color, opacity, pos='absolute', bgCustom = ''}) {
    return (
        <div
            style = {{'--xpos': xpos, '--ypos': ypos, '--diameter': diameter, '--c': color, '--o': opacity}}
            className ={pos + " top-(--ypos) left-(--xpos) right-0 bottom-0 overflow-hidden"}>
            <div className = {"w-(--diameter) h-(--diameter) overflow-hidden rounded-full bg-(--c) opacity-(--o) " + bgCustom}></div>
        </div>
    );
}
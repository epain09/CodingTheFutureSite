export default function SectionTitle({text}) {
    return (
        <h1 className = "font-normal hover:font-bold font-outfit flex items-center justify-center w-8/10 md:w-full text-5xl">
            <div className = "sectionTitle w-auto font-normal hover:font-bold">
                {text}
            </div>
        </h1>
    )
}
export default function InfoSection({question, answer, direction}) {
    return (
        <div className = "w-7/10 my-4 hover:bg-light-orange-1/50 px-6 py-2 rounded-2xl transition-colors">
            <h1 className = "font-bold font-lilex text-3xl hover:text-dark-salmon-1 ">{question}</h1>
            <p className="font-archivo">{answer}</p>
        </div>
    );
}
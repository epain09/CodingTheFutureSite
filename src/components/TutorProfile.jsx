export default function TutorProfile({tutor, tutorImg}) {
    return (
        <div className = "w-full flex items-center justify-center dark:text-white">
            <div className = "flex flex-col w-5/9 py-2 my-2 px-2 justify-center items-center hover:shadow-md  rounded-3xl hover:bg-light-orange-1/20 transition-shadow">
                <img alt = {tutor.name} src = {tutorImg} className = "hover:border hover:border-medium-salmon-1 rounded-3xl w-9/10 aspect-square object-cover"/>
                <h1 className = "text-2xl font-archivo mt-2">{tutor.name}</h1>
                <p>{tutor.location}</p>
                <p className = "text-xl font-asap text-center">{tutor.role}</p>
            </div>
        </div>

    );
}
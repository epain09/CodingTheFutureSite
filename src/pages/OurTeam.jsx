import OurTeamPage from "./sections/AboutTeam/OurTeamPage.jsx";

function OurTeam() {
    return (
        <div className = "h-full w-full flex flex-col items-center justify-center dark:text-white relative">

            <h1 className = "dark:text-white dark:bg-black text-4xl font-lilex mt-6">
                Our team
            </h1>
            <OurTeamPage />
            <div className = "w-full h-full absolute top-0 left-0 -z-10 bg-linear-to-b from-0% from-white dark:from-black to-light-orange-2 opacity-50 dark:opacity-40"></div>
        </div>
    );
}

export default OurTeam;
import TutorProfile from '../../../../src/components/TutorProfile.jsx';

const tutors = [
    {imgid: "alex", name: "Alex Berman", location: "NY, USA", role: "Co-Founder and Co-President"},
    {imgid: "shiv", name: "Shiv Topali", location: "NY, USA", role: "Co-Founder and Co-President"},
    {imgid: "hitanshee", name: "Hitanshee Sheth", location: "NJ, USA", role: "Co-president"},
    {imgid: "shreyas", name: "Shreyas Rajaram", location: "NY, USA", role: "Director of Curriculum Development"},
    {imgid: "shreya", name: "Shreya Ranjan", location: "NY, USA", role: "Co-director of Event Planning"},
    {imgid: "yusuf", name: "Yusuf Amin", location: "India", role: "Co-director of Event Planning"},
    {imgid: "kiran", name: "Kiran Maduraperuma", location: "NY, USA", role: "Co-director of Outreach"},
    {imgid: "elaine", name: "Elaine Huang", location: "CA, USA", role: "Co-director of Outreach"}
]

const TUTOR_PROFILES = {
    "alex": "alex.jpeg",
    "elaine": "elaine.jpg",
    "hitanshee": "hitanshee.png",
    "kiran": "kiran.jpg",
    "shiv": "shiv.jpg",
    "shreya": "shreya.png",
    "shreyas": "shreyas.jpeg",
    "yusuf": "yusuf.png"
}

export default function OurTeamPage() {
    return (
        <div className = "w-6/10 flex flex-col items-center justify-center mb-8">
            <div className = "md:flex md:flex-wrap justify-center w-full md:*:w-5/12 *:py-2">
                {
                    tutors.map((tutor, id) => (
                        <div>
                            <TutorProfile key={id} tutorImg = {"../assets/tutors/" + TUTOR_PROFILES[tutor.imgid]} tutor = {tutor}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
import * as components from "../../../lib/Components.js"
import * as links from "../../../lib/Links.js"
import * as text from "../../../lib/TextDescriptions.js";
import {getScreenWidth, getScreenHeight, getNavbarHeight, getNavbarHeightNum, getScreenHeightNum} from "../../../Window.jsx";
import {Link} from "react-router-dom";
import {DotLottieReact} from "@lottiefiles/dotlottie-react"
import React from "react";
import '../../../../public/assets/icons/languages/python.png'

export function S1_1() {
    return (
            <components.SectionContainer style = {'lg:flex-row-reverse'}>
                <div className = "w-full lg:w-1/2 flex justify-center relative">
                    <div className = "hidden lg:contents">
                        <div className = "bg-radial from-white/15 from-0% to-white/0 to-90% rounded-4xl w-full lg:w-7/8 -z-5 absolute top-0 h-full"></div>
                    </div>
                    <DotLottieReact
                        src="https://lottie.host/4880a809-7821-436a-9a55-9b16f3081aa1/hKpnJa4JrU.lottie"
                        loop
                        autoplay
                    />
                </div>
                <div className = "w-full lg:w-1/2 flex flex-col items-center justify-center relative">
                    <div className = "hidden lg:contents">
                        <div className = "bg-radial from-white/15 from-0% to-white/0 to-90% rounded-4xl w-full lg:w-7/8 -z-5 absolute top-0 h-full"></div>
                    </div>
                    <div className = " flex flex-col justify-center items-center lg:py-4 *:py-3 ">
                        <h2 className = "text-5xl md:text-6xl font-tourney font-semibold w-2/3">Free Virtual CS Classes & Tutoring</h2>
                        <div className  = "flex justify-center">
                            <components.LinkButton innerText = "Sign up today!" linkTo ={links.classSignUpLink} />
                        </div>
                        <p className = "font-outfit font-light lg:font-light text-xl text-justify w-3/4">{text.CTF_DESCRIPTION}</p>
                    </div>
                </div>
            </components.SectionContainer>
    );
}

export function S2_1() {

    const rows = [
            {nm: "Python", mg: "python.png"},
            {nm: "Java", mg: "java.png"},
            {nm: "HTML", mg: "html.png"},
            {nm: "Javascript", mg:  "javascript.png"},
            {nm: "C++", mg: "cpp.png"},
            {nm: "Robotics", mg: "robotics.png"},
            {nm: "Security", mg: "cyber.png"},
            {nm: "AI/ML", mg: "ml.png"}
    ];

    return (
            <components.SectionContainer>
                <div className= "font-inter flex flex-col w-full h-auto sm:h-auto lg:h-[88vh] items-center justify-center py-10 sm:py-16 lg:py-0 **:z-10">
                    <components.SectionTitle text={'With CTF, you could learn...'}/>
                    <div className = "space pb-6"></div>
                    <div className = "flex flex-wrap w-3/4 h-3/4 lg:h-1/2 items-center justify-center">
                        {
                            rows.map((lang, i) => (
                                <div key = {i} className = "w-1/2 sm:w-1/4 flex items-center justify-center h-[70px] sm:h-[25vw] lg:h-1/2 py-2">
                                    <components.LangBlock languageName= {lang.nm} languageIcon={"../assets/icons/languages/" + lang.mg}/>
                                </div>
                            ))
                        }
                    </div>
                    <h1 className = "pt-8 text-4xl cursor-pointer">..and <span className = "linkTransition font-normal hover:font-bold text-black hover:text-dark-salmon-1 dark:text-white dark:hover:text-medium-salmon-1"><u><Link to={"/about"}>so much more</Link></u></span>!</h1>
                </div>
            </components.SectionContainer>
    );
}

export function S2_2() {
    const values = [
        {val: "Effective instruction", p: text.VALUES_EFFECTIVE_INSTRUCTION},
        {val: "Accessibility", p: text.VALUES_ACCESSIBILITY},
        {val: "Student Leadership", p: text.VALUES_STUDENT_LEADERSHIP}
    ];
    return (
        <components.SectionContainer>
            <div className = "text-center flex flex-col justify-center items-center">
                <div className = "space pt-6"></div>
                <components.SectionTitle text={'Why Us?'}/>
                <div className = "md:flex w-8/10 md:pt-8">
                    {
                        values.map((value, i) => (
                                <div className = "text-left py-4 md:py-0 md:text-center w-full md:w-1/3 flex flex-col items-center" key = {i}>
                                    <h1 className = "font-lilex text-2xl pb-2 font-bold text-medium-salmon-1 dark:text-light-orange-1">{value.val}</h1>
                                    <div className = "w-8/10">
                                        <p className = "font-outfit font-light text-xl">{value.p}</p>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </components.SectionContainer>

    );
}

export function S3_1() {                       

    let imgs = [
    {url: "2048.png", desc: "Raphael B coded his own 2048 game in P5.js"},
    {url: "battlegame.png", desc: "Gerard S made a 2 player fighting game in P5.js"},
    {url: "gradecalculator.png", desc: "Anjali S made a grade calculator in Python"}
    ];

    for (let i=0; i<imgs.length; i++) {
        imgs[i].url = "../assets/demos/img/" + imgs[i].url;
    }

    const imgElements = () => {
        let imglist = [];
        imgs.forEach(img => {
            imglist.push(
                <div className = "w-full h-[70vh] flex flex-col items-center justify-center">
                    <div className = "h-3/10 w-6/10 flex flex-col items-center justify-center">
                        <p className = "text-normal md:text-2xl">{img.desc}</p>
                    </div>
                    <div className = "h-7/10 flex items-center justify-center">
                        <img src = {img.url} alt ={img.desc} className = 'w-full lg:w-auto h-auto lg:h-full ' role={'presentation'} onDragStart={(e)=>e.preventDefault()}/>
                    </div>
                </div>
            );
        })
        return imglist;
    }

    return (
        <components.SectionContainer>
            <components.SectionTitle text={"Here are some student demos!"} />
            <div className = "space pb-6"></div>
            <components.MediaCarousel mediaItems={imgElements()} />
        </components.SectionContainer>
    );
}

export function S3_2() {                         /*TODO*/

    let videos = [
        {url: "wikipedia.mp4", desc: "Weston G made a chrome extension that makes wikipedia look funny using HTML, CSS, and Javascript"},
        {url: "wordle.mp4", desc: "Aaradhya V made Wordle using Python"},
        {url: "math.mp4", desc: "Timmy C made a math trivia game using HTML, CSS, and JavaScript"}
    ]

    for (let i=0; i<videos.length; i++) {
        videos[i].url = "../assets/demos/videos/" + videos[i].url;
    }

    const videoElements = () => {
        let videolist = [];
        videos.forEach(video => {
            videolist.push(
                // <img src = {img} alt ={img} className = 'h-full'/>
                <div className = "w-full h-[70vh] flex flex-col items-center justify-center">
                    <div className = "h-2/10 w-6/10 flex flex-col items-center justify-center">
                        <p className = "text-normal md:text-2xl">{video.desc}</p>
                    </div>
                    <div className = "h-8/10 flex items-center justify-center">
                        <video controls autoPlay className = "h-full">
                            <source src={video.url} type={'video/mp4'} role={'presentation'} onDragStart={(e)=>e.preventDefault()} />
                            video not supported :(
                        </video>
                    </div>
                </div>
            );
        })
        return videolist;
    }

    return (
        <components.SectionContainer style = "mt-8">
            <components.SectionTitle text={"..and some more..."}/>
            <div className = "space pb-6"></div>
               <components.MediaCarousel mediaItems={videoElements()} /> 
        </components.SectionContainer>
    );
    /*Carousel of student demos (videos)*/
}

export function S4_1() {
    const cols = [
        {
            item: (<p>Fill out <a rel={"noreferrer noopenner"} target="_blank" href = {links.classSignUpLink} className = "linkTransition text-black hover:text-dark-salmon-1 dark:text-white dark:hover:text-medium-salmon-1 font-normal hover:font-bold"><u>this form</u></a>!</p>),
            alt: "sc for form",
            img: "form_sc.png",
            desc: text.START_FORM
        },
        {
            item: (<p>The Email</p>),
            alt: "email",
            img: "emailsc.png",
            desc: text.START_EMAIL
        },
        {
            item: (<p>That's it!</p>),
            alt: "classes start!",
            img: "coding.jpg",
            desc: text.START_BEGIN
        }
    ];
    return (
        <div className = "flex flex-col items-center w-full pb-10" style = {{'--c-h': (getScreenHeightNum()-getNavbarHeightNum())/3 +'px'}}>
            <components.SectionTitle text={'Getting Started'} />
            <div className = "w-8/10 py-10 md:flex">
                {
                    cols.map((col, index) => (
                        <div className = "w-full py-4 flex flex-col items-center px-2 lg:blur-xs lg:hover:blur-none blurTransition" key = {index}>
                            <div className = "text-2xl font-lilex py-2">{col.item}</div>
                            <div className = "md:h-auto h-1/2 overflow-y-clip flex flex-col items-center justify-center py-2">
                                <div className = "w-full h-full overflow-y-clip md:h-(--c-h) py-2">
                                    <img alt = {col.alt} src={"../assets/other/" + col.img} className = "w-full h-auto overflow-y-clip"/>
                                </div>
                                <p className = "mt-2 w-8/10 font-outfit text-xl font-light text-center">{col.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className = "flex flex-around *:mx-4">
                <div>

                </div>
                <components.LinkButton innerText="Sign up for lessons!" linkTo={links.classSignUpLink}/>
                <components.LinkButton innerText="Learn more about classes!" linkTo="/react-gh-pages/about"/> {/*TODO*/}
            </div>
        </div>
    );
}

export function S5_1() {

    const geoUrl =
        "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

    return (
        <div className = "flex flex-col items-center w-full py-10 font-lilex  text-white">
            {/* <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
            </ComposableMap> */}
            <components.WorldMap/>
            <div>
                <p>{text.WORLD_IMPACT}</p>
                <p>{text.WORLD_STATS}</p>
            </div>
        </div>
    );
}

export function S5_2() {
    return (
        <div className = "relative flex justify-around items-center w-9/10 py-10 h-8/10 mb-5 font-lilex rounded-4xl bg-dark-salmon-1 px-4 ">
            <div className = "-z-10 absolute top-0 left-0 opacity-80 hover:opacity-70 opacityTransition dark:bg-black bg-white h-full w-full rounded-4xl"></div>
            <h1 className = "text-2xl text-medium-salmon-1 shrink-0 grow-0">Join us!</h1>
            <p className = "text-sm md:px-2 px-4">{text.JOIN_US}</p>
            <div className = "shrink-0 grow-0">
                <components.LinkButton innerText="Join us!" linkTo={links.tutorSignUpLink}/>
            </div>
        </div>
    )
}
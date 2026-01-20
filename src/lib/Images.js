/*
LANG ICONS
 */

export const LANG_PY_ICON = "../src/assets/icons/languages/python.png";
export const LANG_JAVA_ICON = "../src/assets/icons/languages/java.png";
export const LANG_HTML_ICON = "../src/assets/icons/languages/html.png";
export const LANG_JS_ICON = "../src/assets/icons/languages/javascript.png";
export const LANG_CPP_ICON = "../src/assets/icons/languages/cpp.png";
export const LANG_CYBER_ICON = "../src/assets/icons/languages/cyber.png";
export const LANG_ML_ICON = "../src/assets/icons/languages/ml.png";
export const LANG_ROBO_ICON = "../src/assets/icons/languages/robotics.png";

/*
VALUES ICONS
 */

export const VALUES_EFFECTIVE_INSTRUCTION = "/";                // TODO
export const VALUES_ACCESSIBILITY = "/";                    // TODO
export const VALUES_STUDENT_LEADERSHIP = "/";                // TODO

/*
START ICONS
 */

export const START_FORM = "../src/assets/other/form_sc.png";                               //TODO
export const START_EMAIL = "../src/assets/other/emailsc.png";                                  //TODO
export const START_BEGIN = "../src/assets/other/coding.jpg";                                 //TODO

/*
MISC
 */
export const LOGO = "../src/assets/icons/site/logo/logo-no-bg-white.png";
export const WORLD_MAP_IMPACT = "/"; //TODO

/*
BG
 */
export const CODE_BG = "../src/assets/bg/code.png";
export const CODE_BG_ALT = "../src/assets/bg/lotsofcode.png";

/*
DEMOS
 */

//STILL

export const imageDemos = () => {
    let imgs = [
        {url: "2048.png", desc: "Raphael B coded his own 2048 game in P5.js"},
        {url: "battlegame.png", desc: "Gerard S made a 2 player fighting game in P5.js"},
        {url: "gradecalculator.png", desc: "Anjali S made a grade calculator in Python"}
    ];

    for (let i=0; i<imgs.length; i++) {
        imgs[i].url = "../src/assets/demos/img/" + imgs[i].url;
    }

    return imgs;
}

//VIDEO
export const videoDemos = () => {
    let videos = [
        {url: "wikipedia.mp4", desc: "Weston G made a chrome extension that makes wikipedia look funny using HTML, CSS, and Javascript"},
        {url: "wordle.mp4", desc: "Aaradhya V made Wordle using Python"},
        {url: "math.mp4", desc: "Timmy C made a math trivia game using HTML, CSS, and JavaScript"}
    ]

    for (let i=0; i<videos.length; i++) {
        videos[i].url = "../src/assets/demos/videos/" + videos[i].url;
    }

    return videos;
}

/*
UI
 */

export const ARROWS = {
    FORWARD: "../src/assets/icons/site/ui/arrow_forward.png",
    BACK: "../src/assets/icons/site/ui/arrow_back.png"
};

/*
TUTORS
 */
export const TUTOR_PROFILES = {
    "alex": "alex.jpeg",
    "elaine": "elaine.jpg",
    "hitanshee": "hitanshee.png",
    "kiran": "kiran.jpg",
    "shiv": "shiv.jpg",
    "shreya": "shreya.png",
    "shreyas": "shreyas.jpeg",
    "yusuf": "yusuf.png"
}
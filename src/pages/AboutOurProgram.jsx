import {getNavbarHeightNum, getScreenHeight, getScreenHeightNum} from "../Window.jsx";
import InfoSection from "../components/InfoSection.jsx";

function AboutOurProgram() {

    const screenHeight = document.documentElement.clientHeight - getNavbarHeightNum();

    const qas = [

        {q: "What is the class schedule?", a: ("Coding classes are run weekly for around 4 months in the Fall, Spring, and Summer. Sessions beginning the week of September 8, January 15, and June 1; however, schedules can be adjusted to match the tutee" +
                "'s availability. Classes are once a week and are 40 minutes long."), d: "left"},
        {q: "What types of classes are offered?", a: ("We offer both one-on-one and group tutoring lessons. In the coding classes, high school and university students provide instruction to groups of 5-10 students on a topic of common interest. These classes are aimed at middle and high school students with all levels of computer science knowledge. Cohorts of students will be broken up by skill level, availability, and coding language. One-on-one tutoring can offer more individualized support for students who are interested in assistance on a passion project or learning a niche topic."), d: "left"},
        {q: "How are these classes free?", a: ("We are able to offer this service for free because our tutors are student volunteers who are passionate about computer science and teaching. Our tutors are high school and university students who are eager to share their knowledge and help others learn."), d: "left"},
        {q: "What can I learn in these classes?", a: ("We offer instruction in a variety of coding languages, including Python, Java, C++, Arduino, FTC Robotics, Algorithms, Web Engineering, Machine Learning, Cyber Security, Competitive Programming, and more. Instructors are able to teach students these topics comprehensively, and also help tutees develop passion projects. When you sign up for our programs you can indicate which of these languages you are interested in learning"), d: "left"},
    ]

    return (
      <div className = {"flex flex-col w-full items-center justify-center pb-10 dark:text-white"}>
          <h1 className = "dark:text-white dark:bg-black text-4xl font-lilex mt-6">
              About our program
          </h1>
          <h2 className = "font-asap dark:text-white text-2xl py-6">
              FAQ
          </h2>
          <div className = "w-full flex flex-col items-center justify-center">
              {
                  qas.map((question, index) => (
                      <InfoSection question={question.q} answer={question.a} />
                  ))
              }
          </div>
          <div>
              <div>
              </div>
          </div>
      </div>
    );
}

export default AboutOurProgram;
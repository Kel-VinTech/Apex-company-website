import peopleAgree from "../../src/assets/image/people_agree.jpg"
import manTeaching from "../../src/assets/image/man_teaching.jpg"
import school from "../../src/assets/image/class.jpg"

;




export const HeroSlides = [
  {
    id: 1,
    image: peopleAgree,
    main: "At Apex we offer",
    title: "Job Recruitment",
    highlight: "Job Recruitment", // colored part
    description:
      "Connecting reputable employers and companies with reliable talent.",
    highlightColor: "text-orange-400",
    buttons: [
      {
        text: "Contact Us",
        style:
          "px-6 py-3 font-bold bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition",
      },
      {
        text: "Learn More",
        style:
          "px-6 py-3 border font-bold border-white text-white rounded-lg hover:bg-white hover:text-black transition",
      },
    ],
  },
  {
    id: 2,
    image: manTeaching,
    main: "At Apex we offer",
    title: "Customer Service Training",
    highlight: "Customer Service Training",
    description:
      "Equipping teams with the skills to deliver outstanding customer experiences.",
    highlightColor: "text-blue-400",
    buttons: [
      {
        text: "Contact Us",
        style:
          "px-6 py-3 font-bold bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition",
      },
      {
        text: "Learn More",
        style:
          "px-6 py-3 border font-bold border-white text-white rounded-lg hover:bg-white hover:text-black transition",
      },
    ],
  },
  {
    id: 3,
    image: school,
    main: "At Apex we offer",
    title: "General HR Services",
    highlight: "General HR Services",
    description:
      "Providing expert HR support from onboarding to employee development for long-term growth.",
    highlightColor: "text-orange-400",
    buttons: [
      {
        text: "Contact Us",
        style:
          "px-6 py-3 font-bold bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition",
      },
      {
        text: "Learn More",
        style:
          "px-6 py-3 border font-bold border-white text-white rounded-lg hover:bg-white hover:text-black transition",
      },
    ],
  },
];

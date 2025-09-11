import peopleAgree from "../../src/assets/image/people_agree.jpg"
import manTeaching from "../../src/assets/image/man_teaching.jpg"
import school from "../../src/assets/image/class.jpg"




export const HeroSlides = [
  {
    id: 1,
    image: peopleAgree,
    title: "Effortless Business Structuring Right Here with Apex.",
    highlight: "Business Structuring", // the part we want colored
    description:
      "Providing expert recruitment, structuring, and intensive training tailored for sustainable growth.",
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
    title: "Empowering Talents & Businesses for Lasting Success.",
    highlight: "Talents & Businesses",
    description:
      "We bridge the gap between top talents and employers through customized strategies.",
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
    title: "Apex Training & Support Built for Growth.",
    highlight: "Training & Support",
    description:
      "Delivering customer service training, employee appraisals, and onboarding support.",
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

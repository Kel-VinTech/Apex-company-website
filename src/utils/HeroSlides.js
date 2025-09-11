import peopleAgree from "../../src/assets/image/people_agree.webp"
import manTeaching from "../../src/assets/image/customer_services.webp"
import school from "../../src/assets/image/showing_hand.jpg"

;



export const HeroSlides = [
  {
    id: 1,
    image: peopleAgree,
    main: "At Apex we offer",
    title: "Job Recruitment",
    highlight: "Job Recruitment",
    description:
      "Connecting reputable employers and companies with reliable talent.",
    highlightColor: "text-orange-400",
    imageStyles:
      "bg-center sm:bg-[position:60%_center] md:bg-[position:70%_center] lg:bg-[position:80%_center]", // focuses more to the right on larger screens
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
    highlightColor: "text-blue-300",
    imageStyles:
      "bg-[position:45%_center] sm:bg-[position:30%_center] md:bg-[position:40%_center] lg:bg-left", // keeps teacher in focus
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
    imageStyles:
      "bg-center sm:bg-[position:55%_center] md:bg-[position:60%_center] lg:bg-[position:65%_center]", // shows handshake clearly
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

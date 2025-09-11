// import { useState } from "react";

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What does our recuitment process entail?",
//       answer:
//             "At Apex, our recruitment process includes selecting, interviewing and placing applicants in roles they are skilled and qualifed for. " 
// },
//     {
//       question: "What type of companies do we recruit for?",
//       answer:
//         `The type of organisation we cater To includes:
//             Hospitality- Hotel,Bars, lounges,restaurants,Laundromat
//             Retail- supermarket, pharmacies
//             Education- Montessori, Primary and Secondary Schools
//             Finance- micro finance bank,isurance companies and finance houses`,
//     },
//     {
//       question: "What is the cost of our services?",
//       answer: "Cost of registration is 2,000 Naira.",
//     },
//     {
//       question: "After an Applicant's registration, how soon would the applicant get a job?",
//       answer: "We always strive to make sure applicants get their desired job. The timeframe therefore, does not usually exceed a week or two.",
//     },
//     {
//       question: "What type of postions do we recruit applicants for?",
//       answer: "We recruit both full-time, part-time staff and internship staff",
//     },
//     {
//       question: "What is required to become an Apex applicant?",
//       answer: "Cost of registration is 2,000 Naira.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-2xl lg:max-w-4xl mx-auto py-20">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         Frequently Asked Questions
//       </h2>
//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div key={index} className="border rounded-lg p-4 shadow-sm">
//             <button
//               onClick={() => toggleFAQ(index)}
//               className="w-full text-left font-medium flex justify-between items-center"
//             >
//               {faq.question}
//               <span>{openIndex === index ? "-" : "+"}</span>
//             </button>
//             {openIndex === index && (
//               <p className="mt-3 text-gray-600">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

// answer: [
//         "We provide recruitment, onboarding, policy handbook writing.",
//         "We also offer customer service training, company rebranding, and structuring."
//       ],

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What does our recuitment process entail?",
      answer:
            `At Apex, our recruitment process includes interviewing, selecting and documenting of prospective employee's information. 
           Only successful applicants proceed to the final stage of interview with the hiring company. `
},
    {
      question: "After an Applicant's registration, how soon would the applicant get a job?",
      answer: "We always strive to make sure applicants get their desired job. The timeframe therefore, does not typically exceed a week or two.",
    },
    {
      question: "Do we recruit part-time positions?",
      answer: "Yes, We recruit both full-time, part-time and internship staff",
    },
    {
      question: "What is required to become an Apex applicant?",
      answer:   [
            "In order to become an Applicant at Apex Recruitment Agency, You have to",
            "Submit a copy of your curriculum vitae/Résumé.",
            "Submit one passport photograph.",
           "Submit a photocopy of your NIN slip.",
           "Submit your guanrantor's details (a photocpy of NIN slip, a passport photograph)"

        ],
    },
    {
      question: "What is the cost of our services?",
      answer: "Cost of registration is 2,000 Naira.",
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="max-w-2xl px-6 lg:max-w-4xl mx-auto pt-10 pb-20">
      <h2 className="text-xl md:text-3xl font-bold mb-10 text-center text-blue-900">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 md:text-lg">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-blue-900 rounded-lg p-6 shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-medium flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">
  {Array.isArray(faq.answer)
    ? faq.answer.map((line, i) => (
        <span key={i} className="block mb-2">
          {line}
        </span>
      ))
    : faq.answer}
                </p>

            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;



import React from 'react'
import Header from '../shared/header'
import AboutComponent from './about'
export default function About() {





  const neuromoralitySentences = [
    "Neuromorality explores the relationship between brain function and moral decision-making.",
    "Understanding neuromorality can shed light on how our brains process ethical dilemmas.",
    "The field of neuromorality investigates the neural basis of moral intuitions and judgments.",
    "Researchers use brain imaging techniques to study the neural correlates of moral cognition.",
    "Neuromorality challenges traditional views of ethics by highlighting the role of biology.",
    "The study of neuromorality has ethical implications for criminal justice and personal responsibility.",
    "It's a complex field, and experts debate the extent to which our brains determine moral behavior.",
    "Some argue that neuromorality can help us develop more compassionate and understanding societies.",
    "Neuromoral research may one day influence public policy related to healthcare, education, and criminal justice.",
    "As we learn more about the brain's role in morality, discussions about ethics may become increasingly nuanced and informed."
  ];


  return (
    <div className='bg-[var(--secondoryColor)] pb-6' >

<Header title="About Us"/>
<br/>
<br/>
<div className='container mx-auto '>

  <AboutComponent/>
<br/><br/>
  <div className="py-4">
      {/* <h1 className="text-3xl text-white font-bold mb-4">Neuromorality </h1> */}
      <ul className="space-y-1">
        {neuromoralitySentences.map((sentence, index) => (
          <li key={index}>
            <div className="p-4  rounded-lg shadow-md bg-[var(--brandColor)] text-gray-200">
             <p className="text-md"> {index +1}. {sentence}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

</div>

    </div>
  )
}

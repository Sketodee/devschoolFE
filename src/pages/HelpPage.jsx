import MovingCircles from '../components/Home/MovingCircles'
import React, { useState } from 'react'


const AccordionItem = ({ title, description, isOpen, onToggle }) => (
    <div className="border-b border-gray-200">
        <button
            onClick={onToggle}
            className="w-full text-left flex justify-between items-center px-4 py-6 bg-gray-100 hover:bg-purple-100 focus:outline-none"
        >
            <span className="font-semibold">{title}</span>
            <span>{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && (
            <div className="px-4 py-6 bg-white">
                <p>{description}</p>
            </div>
        )}
    </div>
);

const HelpPage = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const accordions = [
        { 
            title: 'How do I enroll into Kodexar?', 
            description: 'To register, please visit our website, sleect any school of your choice and click on the apply button. You will be required to put i a valid email address before you proceed to the application form' 
        },
        {
             title: 'Do I get access to courses after class?', 
             description: 'Yes, all course materials are uploaded before your class comences and available to you after your learning has ended' 
            },
        { 
            title: 'Do I need a degree to start any course?', 
            description: "No, you don't need a degree to start any course, we guide you to build your portfolio at the end of the program to win any job interview"
        },
        { 
            title: 'What are the requirements to start a class?', 
            description: "You need a working system and a note to help you have a good experience through the classes"
        },
        { 
            title: 'How long are my classes?', 
            description: "Classes at Kodexar takes up to 12 weeks depending on the school"
        },
        { 
            title: 'Do I get a certification after my trainings?', 
            description: "Yes, you get a certification in any course you enroll into"
        },
        {
            title: 'Have more questions',
            description: "Send a mail to support@kodexar.com"
        }

    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className='raleway-500 relative'>
            <div className='px-3 sm:px-0 w-full md:w-[70%] mx-auto py-8 sm:py-14 relative'>
                <h2 className='platypi-400 text-4xl lg:text-5xl py-5 text-center'>
                    Frequently <span className='text-purple-600'>Asked Questions</span>
                </h2>
                

                <div className="w-full md:w-[70%] mx-auto mt-8">
                    {accordions.map((accordion, index) => (
                        <AccordionItem
                            key={index}
                            title={accordion.title}
                            description={accordion.description}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>


                {/* <div className='relative bottom-32 h-full '>
                    <MovingCircles />
                </div> */}

            </div>
        </div>
    )
}

export default HelpPage
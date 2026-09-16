import React, {useState} from "react"

const Accordion = () =>{
     const [openIndex, setOpenIndex]= useState(0)
    const toggleAccordion =(ind)=>{
        setOpenIndex(openIndex==ind ?null:ind)
    }


    const items = [
        {
            title: "What is Flowbite?",
            description: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS."
        },
         {
            title: "What are the difference between Tailwind CSS andFlowbite?",
            description: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds."
        },
         {
            title: "Is there a Figma available ?",
            description: "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite."
        }

    ]
    return (
         <div className="w-3/4 m-auto mt-2">

            {
                items.map((itemsList, ind) => {
                    return <div key={ind}>
                        <h2 id={ind} onClick={()=>toggleAccordion(ind)}>
                            <button  type="button" className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border ${ind === 0 ? "rounded-t-xl" : ""}
      ${ind === items.length - 1 ? "rounded-b-xl" : ""} border-gray-200  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}>
                                <span>{itemsList.title}</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openIndex==ind ?`rotate-360`:`rotate-180`} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div>
                            {openIndex === ind && <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                {itemsList.description}
                            </div>
                }
                        </div>
                    </div>
                })
            }






        </div>
    )
}

export default Accordion
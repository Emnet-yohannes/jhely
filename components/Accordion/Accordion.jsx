import React,{useState} from 'react'

const Accordion = () => {
  const [accordionState, setAccordionState] = useState(false);
  const handleClick = () =>{
    setAccordionState(!accordionState)
  }
  return (
    <div>
        <div className="group outline-none accordion-section" >
    <button onClick={handleClick} className="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
      <div className="group-focus:text-white transition ease duration-500">
        first
      </div>
      <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
        <i className="fas fa-chevron-down"></i>
      </div>
    </button>
    {
      accordionState ? <div className="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
      <p className="p-2 text-gray-400 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
        repellat amet doloribus consequuntur eos similique provident
        tempora voluptates iure quia fuga dicta voluptatibus culpa
        mollitia recusandae delectus id suscipit labore?
      </p>
    </div> :
    null
    }
    
  </div>
    </div>
  )
}

export default Accordion
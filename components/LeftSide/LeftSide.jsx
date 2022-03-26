import React, { useState } from 'react'
import downArrow from '../../public/images/downArrow.png'
import optionIcon from '../../public/images/optionIcon.png'
import Vector1 from '../../public/images/vector1.png'
import Vector2 from '../../public/images/Vector2.png'
import Vector3 from '../../public/images/Vector3.png'
import Vector4 from '../../public/images/Vector4.png'
import Image from 'next/image';
const LeftSide = () => {
  const [accordionState, setAccordionState] = useState(true);
  const handleClick = () => {
    setAccordionState(!accordionState)
  }
  if (typeof window !== "undefined") {
    document.getElementById('accordion0').onclick = handleClick
  }
  return (
    <div className='bg-[#0D0D0D] opacity-50'>
      <div id='accordion0' className='flex justify-between px-[15px] py-[26px]' >
        <div className='flex justify-around'>
          <div className='h-3 w-3'>
            <Image src={optionIcon}>

            </Image>
          </div>

          <h1 className='pl-2'>
            Lorem Ipsum
          </h1>
        </div>
        <div>
          <Image src={downArrow}>

          </Image>
        </div>


      </div>
      {
        accordionState ?
          <div className='pb-[53px] w-96'>
            <p className="mb-[42px] text-white text-sm pl-[28px] pr-[92px] font-manrope h-[109px] " >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </p>
            <div className='grid grid-rows-2 grid-flow-col gap-y-[19px] '>
              <div className='flex justify-start pl-8'>
              <div className='w-5 h-5'>
              <Image src={Vector1}>

                </Image>
              </div>
                
                <h1 className='text-[#FC364C] pl-4'>
                  Lorem ipsum
                </h1>
              </div>
              <div className='flex justify-start pl-8'>
              <div className='w-5 h-5'>
              <Image src={Vector2}>

                </Image>
              </div>
                
                <h1 className='text-[#FC364C] pl-4'>
                  Lorem ipsum
                </h1>
              </div>
              <div className='flex justify-start pl-0'>
              <div className='w-5 h-5'>
              <Image src={Vector3}>

                </Image>
              </div>
                
                <h1 className='text-[#FC364C] pl-4'>
                  Lorem ipsum
                </h1>
              </div>
              <div className='flex justify-start pl-0'>
              <div className='w-5 h-5'>
              <Image src={Vector4}>

                </Image>
              </div>
                
                <h1 className='text-[#fff] pl-4'>
                  Lorem ipsum
                </h1>
              </div>
            </div>
          </div> :
          null
      }



    </div>
  )
}

export default LeftSide
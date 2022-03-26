import React, { useState } from 'react'
import downArrow from '../../public/images/downArrow.png'
import optionIcon from '../../public/images/optionIcon.png'
import Image from 'next/image'
const RightSide = () => {
  const [accordionState1, setAccordionState1] = useState(true);
  const [accordionState2, setAccordionState2] = useState(false);
  const handleClick1 = () => {
    setAccordionState1(!accordionState1)
  }
  const handleClick2 = () => {
    setAccordionState2(!accordionState2)
  }
  if (typeof window !== "undefined") {
    document.getElementById('accordion1').onclick = handleClick1
    document.getElementById('accordion2').onclick = handleClick2
  }
  return (
    <div >
      <div className='bg-[#0D0D0D] opacity-50 '>
      <div id='accordion1' className='flex justify-between p-4' >
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
          accordionState1 ?
            <div>

              <div className='grid grid-cols-2 gap-x-[12px] gap-y-[10px] bg-[#0D0D0D] opacity-50 overflow-y-auto  h-[360px] ml-[30px] scrollbar   md:grid-cols-3  '>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
                <div className='px-[15px] py-[26px] text-center bg-[#000]  h-[99px]  w-[162px] rounded-lg'>
                  <h3 className='text-[#8E8B8F] text-xs'>
                    Accessories and Ears
                  </h3>
                  <h1 className='font-extrabold text-base'>
                    Lorem Ipsum
                  </h1>
                  <p className='text-[#8E8B8F] text-xs'>
                    9%
                  </p>
                </div>
              </div>
            </div> :
            null
        }

      </div>
      <div className='bg-[#0D0D0D] opacity-50'>

      <div id='accordion2' className='flex justify-between p-4 mt-4 '>
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
        accordionState2 ? 
        <div className='p-8 text-xs'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>:null
      }
    </div>
    </div>

  )
}

export default RightSide
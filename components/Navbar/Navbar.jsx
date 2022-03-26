import Logo from '../../public/images/image3.png'
import MainBodyImage from '../../public/images/image125.png'
import Ellipse37 from '../../public/images/Ellipse37.jpg'
import SearchBar from '../SearchBar/SearchBar'
import Image from 'next/image'
const Header = () => (
    <div>

    
    <div className='flex items-center py-[12px]'>
        <div className='w-[195px] h-[23px] ml-[40px]'>
        <Image src={Logo}  >

        </Image>
        </div>
    <div className=' hidden md:block w-[657px] h-[45px] rounded-lg ml-[5%]'>
          <SearchBar />
        </div>
        <div className='flex justify-evenly ml-[41px] mr-[40px]    '>
            <button className='text-white w-[47px] h-[20px]'>
                Lorem
            </button>
            <button className='text-white w-[47px] h-[20px] ml-[53px]'>
            Lorem
            </button>
            <button className='text-white w-[47px] h-[20px] ml-[38px]'>
            Lorem
            </button>
        </div>
    </div>
    <div className='h-[27px] border-none'> 
    <hr className='bg-gradient-to-r h-[6px] border-none from-[#665AEF]  to-[#FC364C]'/>

    </div>

    <div >
        <div >
        </div>
    </div>
    </div>
  );
  
  export default Header;

import Image from 'next/image'
const SearchBar = () => (
<div className="flex items-center justify-center w-[100%] h-[20px] bg-[#1F1F1F] rounded-lg">
  <form method="GET" className='w-[100%] rounded-2xl'>
    <div className="relative text-gray-600  focus-within:text-gray-400 w-full ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline ">
          <svg fill="none" stroke="currentColor"  viewBox="0 0 24 24" className="w-6 "><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" className=" w-full py-[4px] text-sm text-[#A2A2A2] bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Lorem Ipsum" />
    </div>
  </form>
</div>
  );
  
  export default SearchBar;
import { useState } from 'react'
import Carousel from './components/Carousel'
import Ovelay from './components/Ovelay';
import ReactSimplyCarousel from 'react-simply-carousel';
import { BsXLg } from "react-icons/bs";
import './App.css'

function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <div className='h-[100vh] w-[100%] relative'>
      <div className='h-[100%] w-[100%] absolute z-1'>
      <div className='bg-[#1f262d] w-[100%] h-[8%] text-white flex justify-between items-center px-[1%] sm:px-[5%]'>
        <BsXLg size={20}/>
        <h1>My Ticket</h1>
        <div></div>
      </div>
      <div className='w-[100%] flex justify-center mt-[10%]'>
        <div className='w-[25%] flex flex-row overflow-x-auto scrollbar-hide sm:w-[85%]'>
          <div className='mx-[2%] w-[19rem]'>
        <Carousel seat={"8"} />
        </div>
        <div className='mx-[2%] w-[19rem]'>
        <Carousel seat={"9"} />
        </div>
        </div>
      
      </div>
      <div className='w-[100%] flex justify-center my-[1.5%] pr-[13%] pb-[4%]'>
        <div className='flex flex-row w-[100%] pl-[0.7%] justify-center'>
        <div className='h-[9px] w-[9px] mx-[0.25%] rounded-[50%] bg-[#00000070]'></div>
        <div className='h-[9px] w-[9px] mx-[0.25%] rounded-[50%] bg-[#00000040]'></div>
        </div>
      </div>
      <div className='w-[100%] flex px-[10.5%]'>
        <div className='w-[70%] flex flex-row justify-between'>
      <button className='bg-[#026cdf] text-white px-[2.7rem]  py-[0.35rem] rounded-[5px]' onClick={() => setActive(!active)}><h2 className='text-[0.8rem]'>Transfer</h2></button>
      <button className='bg-[#00000020] text-white px-[3.8rem] ml-[4%] py-[0.39rem] rounded-[5px]'><h2 className='text-[0.8rem]'>Sell</h2></button>
      </div>
      </div>
      </div>
      {active? 
      <div className='bg-[#00000050] h-[100%] w-[100%] m-0 absolute z-3 flex flex-col items-stretch '>
        <div className='h-[40%] w-[100%] sm:h-[45%]' onClick={() => setActive(!active)} ></div>
      <Ovelay />
      </div> : null}
    </div>
  )
}

export default App

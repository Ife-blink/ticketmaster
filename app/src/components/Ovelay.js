import React,{useState} from 'react'
import { BsCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion"
import { IoTicket, IoChevronForwardOutline } from "react-icons/io5";
import { FcNext } from "react-icons/fc";
// import Ai from '../assets/i.svg';


function Ovelay({ tickets }) {
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [count, setCount] = useState(0);

  const handleCheck = () => {
      setCheck(!check);
      if(check == true){
        setCount(count - 1)
      } else{
        setCount(count + 1)
      }
    
  }

  const handleCheck1 = () => {
    setCheck1(!check1);
    if(check1 == true){
      setCount(count - 1)
    } else{
      setCount(count + 1)
    }
  
}


    const Seats = (props) => {
      return(
        <>
        <div className='h-[6rem] w-[6rem] mr-[4%] border-[1px] border-[#00000020] rounded-[10px] overflow-hidden'>
          <div className='h-[40%] w-[100%] bg-[#155fc8] text-white flex justify-center items-center'>
            <h2>SEAT {tickets?.seatOne}</h2>
          </div>
          <div className='w-[100%] flex justify-center items-center my-[13%]'>
         <div className='h-[25px] w-[25px] border-[2px] rounded-[50%] flex justify-center items-center' onClick={props.click}>
          {check ? <BsCheckCircleFill size={23} color="#155fc8" />  : null }
         </div>
          </div>
        </div>
        </>
      )
    }

    const Seats1 = (props) => {
      return(
        <>
        <div className='h-[6rem] w-[6rem] border-[1px] border-[#00000020] rounded-[10px] overflow-hidden'>
          <div className='h-[40%] w-[100%] bg-[#155fc8] text-white flex justify-center items-center'>
            <h2>SEAT {tickets?.seatTwo}</h2>
          </div>
          <div className='w-[100%] flex justify-center items-center my-[13%]'>
         <div className='h-[25px] w-[25px] border-[2px] rounded-[50%] flex justify-center items-center' onClick={props.click}>
          {check1 ? <BsCheckCircleFill size={23} color="#155fc8" />  : null }
         </div>
          </div>
        </div>
        </>
      )
    }

    

  return (
    <motion.div 
    initial={{y: "50%", opacity: 0, scale: 0.5 }}
    animate={{y: 0, opacity: 1, scale: 1}}
    transition={{ duration: 0.2, }}
    className='w-[100%] bg-white'>
        <div className='flex flex-col items-center justify-center '>
            <h1 className='py-[0.8%] text-black'>SELECT TICKETS TO TRANSFER</h1>
            <div className='w-[100%] h-[1px] bg-[#00000050]'></div>
        </div>
        <div className='border-[1px] border-black mt-[3%] bg-[#00000007] px-[2%]  mx-[1%] rounded-[5px] flex flex-row  py-[6%] sm:mx-[2%] sm:py-[3%]'>
        <div className='h-[6rem] w-[6rem] bg-[#00000060] rounded-[50%] flex justify-center items-center sm:h-[30px] sm:w-[30px] px-[3%] mr-[5%]'>
          <img src='i.svg' className='h-[50%] w-[50%] sm:h-[60%]' />
        </div>
        <div className=' '>
        <h2 className='text-[1rem] text-black'>Only transfer tickets to people you know and trust to ensure everyone stays safe and socially distanced.</h2>
        </div>
        </div>
        <div className='flex flex-row justify-between w-[100%] px-[1%] my-[1%] sm:px-[2%] py-[5%]'>
          <div><h1 className='text-[#00000080]'>Cat {tickets?.catNumber}, Sec {tickets.sec}, Row {tickets?.row}</h1></div>
          <div className='flex flex-row items-center'><IoTicket color="#00000060"/>{" "}<h2 className=' text-[#00000080]'>2 tickets</h2></div>
        </div>
        <div className='px-[1%] flex flex-row sm:px-[2%]'>
        <Seats click={handleCheck} className='mx-[2%]'/>
        <Seats1 click={handleCheck1}/>
        </div>
        <div className='w-[100%] h-[1px] bg-[#00000050] my-[2%] mt-[6%] mb-[6%]'></div>
        <div className='h-[5rem] w-[100%] bg-[#00000010] px-[1%] flex flex-row justify-between mt-[2%] sm:px-[2%]'>
          <div className='flex items-center flex-row'><h2>{`${count} selected`}</h2> </div>
          <button className='flex flex-row items-center text-[#155fc8]'><h1>TRANSFER TO</h1> <IoChevronForwardOutline size={25} color={"#155fc8"}/></button>
        </div>
    </motion.div>
  )
}

export default Ovelay
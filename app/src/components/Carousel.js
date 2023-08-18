import React from 'react'


function Carousel({seat, tickets}) {

    console.log(tickets)
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
      }
    
      const slideRight = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
      }
  
  console.log()

  return (
    <div>
        <div className={`border-[1px] border-[#00000010] w-[18rem] m-[2%] rounded-[10px] overflow-hidden `}>
        <div className='flex justify-center items-center bg-[#155fc8] py-[2%] text-white'>
            <h2>Standard Ticket</h2>
        </div>
        <div className='flex flex-row justify-between px-[13%] py-[3%] bg-[#026cdf] text-white'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-[0.8rem]'>SEC</h2>
                <h1>{tickets?.sec}</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-[0.8rem]'>ROW</h2>
                <h1>{tickets?.row}</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-[0.8rem]'>SEAT</h2>
                <h1>{seat}</h1>
            </div>
        </div>
        <div className='relative'>
            <img src={`${tickets?.image.url}`} className='absolute z-1 h-[150px] w-[100%] object-stretch' />
            <div className='w-[100%] flex flex-col  bg-gradient-to-t from-[#000000] to-[#00000000] absolute z-3 text-white justify-center px-[10%] pt-[20%]'>
                <h2 className='text-center pt-[17%]'>{tickets?.artistName}</h2>
                <h2 className='text-center text-[0.8rem] pb-[5%]'>{tickets?.dayOfTheWeekDate},{tickets?.date} {tickets?.time} -{tickets?.venue}</h2>
            </div>
        </div>
        <div className='mt-[70%] mb-[10%] text-white w-[100%] px-[7%]'>
            <img src='Apple.png' />
        </div>
        <div className='text-[#026cdf] w-[100%] mb-[7%] px-[7%] flex justify-between'>
           <button><h1>View Barcode</h1></button>
           <button><h1>Ticket Details</h1></button>
        </div>
        <div className='flex justify-center items-center bg-[#155fc8] text-white'>
          <img src='verified.jpg'/>
        </div>
        </div>
    </div>
  )
}

export default Carousel
import data from '../helpers/data.json'
import { useState } from 'react'

const ImageComponent = () => {
  const [detailData, setDetailData] = useState(data)

  return (
    <div className='flex flex-col md:my-auto md:flex-row md:rounded-3xl  shadow-2xl'>
      <div className=" font-hanken bg-gradient-to-b from-violet-600 to-indigo-600 w-[350px] h-[300px] mx-auto m-auto flex flex-col items-center justify-center rounded-b-3xl md:my-auto md:mr-0 md:h-[420px] md:rounded-3xl">
        <h2 className="pb-6 text-sm text-[#C7C6FF] font-semibold">Your Result</h2>
        <div className="mt-0 bg-gradient-to-b from-indigo-600 to-violet-600 rounded-full w-[120px] h-[120px] flex flex-col justify-center items-center">
            <span className="my-2 font-bold text-white text-6xl">76</span>
            <span className="text-[#C7C6FF] text-xs">of 100</span>
        </div>
        <h1 className="text-white text-lg font-semibold mt-6 mb-1">Great</h1>
        <p className="text-[#C7C6FF] text-center text-xs mx-20">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <section className=" font-hanken w-[350px] h-[420px] mx-auto mb-auto md:my-auto md:ml-0 ">
    <div className=' text-left mt-5 mb-6 mx-5'>Summary</div>
    <article className='px-5'>
      {detailData.map((item, index) => (
        <div key={index} className={item.category}>
            <div className='flex justify-between items-center my-4 mx-3'>
              <div className='flex gap-3 my-3'>
                <img src={item.icon} className='block' alt="" />
                <span>{item.category}</span>
              </div>
              <div className='flex gap-x-2 text-[#46547e]'>
                <div className=' font-bold'>{item.score}</div>
                <div className=' text-gray-400'>/ 100</div>
              </div>
            </div>
        </div> 
      ))}
    </article>
    <div className='flex justify-center'>
      <button className='bg-[#46547e] text-white text-sm mt-3 py-3 w-[300px] rounded-3xl hover:bg-gradient-to-b from-violet-600 to-indigo-600'>Continue</button>
    </div>
</section>
    </div>
    
  )
}

export default ImageComponent

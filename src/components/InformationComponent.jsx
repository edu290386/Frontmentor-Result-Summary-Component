import data from '../helpers/data.json'
import { useState } from 'react'


const InformationComponent = () => {
  const [detailData, setDetailData] = useState(data)

  return (
    <section className=" font-hanken w-[350px] h-[420px] mx-auto ">
    <div className=' text-left mt-5 mb-6'>Summary</div>
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
      <button className='bg-[#46547e] text-white text-sm mt-3 py-3 w-[300px] rounded-3xl '>Continue</button>
    </div>
</section>
)
}

export default InformationComponent
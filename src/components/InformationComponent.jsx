import data from './data.json'


const InformationComponent = () => {


  return (
    <section className=" font-hanken w-[350px] h-[420px] mx-auto  border">
        <div className=' text-left my-6'>Summary</div>
        <article className='px-5 py-4 rounded-xl border '>
            <div className={data[0].category}>
            <div className='flex justify-between '>
                <div><img src={data[0].icon} alt="" /><span>Reaction</span></div>
                <div className='text-green-600'>{data[0].score}/100</div>
            </div>
            </div>
           
           
        </article>
    </section>
  )
}

export default InformationComponent
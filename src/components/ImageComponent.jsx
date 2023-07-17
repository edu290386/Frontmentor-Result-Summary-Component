

const ImageComponent = () => {
  return (
    <div className=" font-hanken bg-gradient-to-b from-violet-600 to-indigo-600 w-[350px] h-[300px] mx-auto flex flex-col items-center justify-center rounded-b-3xl ">
        <h2 className="pb-6 text-sm text-[#C7C6FF] font-semibold">Your Result</h2>
        <div className="mt-0 bg-gradient-to-b from-indigo-600 to-violet-600 rounded-full w-[120px] h-[120px] flex flex-col justify-center items-center">
            <span className="my-2 font-bold text-white text-6xl">76</span>
            <span className="text-[#C7C6FF] text-xs">of 100</span>
        </div>
        <h1 className="text-white text-lg font-semibold mt-6 mb-1">Great</h1>
        <p className="text-[#C7C6FF] text-center text-xs mx-20">You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}

export default ImageComponent


const VideoTitle = ({title,overview}) => {
  return (
    <div className='pl-10 pt-[15%] absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
        <h1 className="text-5xl font-bold ">{title}</h1>
        <p className="w-1/4 font-medium italic mt-5">{overview}</p>
        <div className='mt-10'>
            <button className=' bg-white/75 px-6 py-4 text-black rounded-lg text-2xl cursor-pointer'>▶ Play</button>
             <button className=' mx-2 bg-gray-500/75 px-6 py-4 text-amber-50 rounded-lg text-2xl cursor-pointer'>ℹ️ Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
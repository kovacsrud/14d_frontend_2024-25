

function Vonat({vonat}) {
  return (
    <div
        className="m-2 sm:w-[70%] w-[94%] mx-auto dark:bg-gray-300 bg-gray-700 p-4 rounded-md flex sm:gap-4 gap-2 items-center justify-center">
        <img src="https://cdn-icons-png.flaticon.com/512/2855/2855692.png" alt="profile" className="w-[5rem] object-cover h-[5rem] outline outline-2 outline-blue-400 dark:outline-teal-400/20 rounded-full" />
        <div className="w-[80%] flex flex-col gap-1">
            <div className="text-lg font-semibold font-serif text-white dark:text-black">{}</div>
            <p className="text-sm dark:text-gray-600 text-gray-300">Indulás: {vonat.starttime}</p>
            <p className="text-sm dark:text-gray-600 text-gray-300">Érkezés: {vonat.destinationtime}</p>
            <p className="text-sm dark:text-gray-600 text-gray-300">Menetidő: {vonat.totaltime}</p>
            <p className="text-sm dark:text-gray-600 text-gray-300">Távolság: {vonat.distance}</p>            
        </div>
    </div>
  )
}

export default Vonat
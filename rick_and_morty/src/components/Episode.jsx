
function Episode({episode}) {
  return (
    <div className="m-5 w-96 mx-auto mockup-window bg-sky-300 border">
      <div className="bg-sky-200 flex justify-center px-4">{episode.name}</div>
      <div className="bg-sky-200 flex justify-center px-4">Air date:{episode.air_date}</div>
      <div className="bg-sky-200 flex justify-center px-4">Episode:{episode.episode}</div>
    </div>
  )
}

export default Episode
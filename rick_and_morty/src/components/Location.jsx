

function Location({location}) {
  return (
    <div className="m-5 w-96 mx-auto mockup-window bg-sky-300 border">
    <div className="bg-sky-200 flex justify-center px-4">{location.name}</div>
    <div className="bg-sky-200 flex justify-center px-4">Type:{location.type}</div>
    <div className="bg-sky-200 flex justify-center px-4">Dimension:{location.dimension}</div>
  </div>
  )
}

export default Location
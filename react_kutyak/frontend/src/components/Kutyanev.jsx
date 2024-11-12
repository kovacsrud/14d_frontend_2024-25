

function Kutyanev({kutyanev}) {
  return (
    <div className="m-5 card card-side bg-sky-300 shadow-xl">
  <figure>
    <img className="w-16"
      src="https://www.svgrepo.com/show/434054/dog.svg"
      alt="kutyanev" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{kutyanev.kutyanev}</h2>
    <p>Azonosító:{kutyanev.Id}</p>
    <div className="card-actions justify-end">
        <button className="btn btn-primary">Módosítás</button>
        <button className="btn btn-primary">Törlés</button>
    </div>
  </div>
  </div>
  )
}

export default Kutyanev
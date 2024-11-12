

function Kutyafajta({kutyafajta}) {
  return (
    <div className="m-5 card card-side bg-sky-300 shadow-xl">
    <figure>
      <img className="w-16"
        src="https://www.svgrepo.com/show/405227/dog.svg"
        alt="kutyanev" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{kutyafajta.nev}</h2>
      <h2 className="card-title">{kutyafajta.eredetinev}</h2>
      <p>Azonosító:{kutyafajta.Id}</p>
      <div className="card-actions justify-end">
          <button className="btn btn-primary">Módosítás</button>
          <button className="btn btn-primary">Törlés</button>
      </div>
    </div>
    </div>
  )
}

export default Kutyafajta
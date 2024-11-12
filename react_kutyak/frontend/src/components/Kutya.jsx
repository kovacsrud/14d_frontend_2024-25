

function Kutya({kutya}) {
  return (
    <div className="m-5 card card-side bg-sky-300 shadow-xl">
    <figure>
      <img className="w-16"
        src="https://www.svgrepo.com/show/405231/dog-face.svg"
        alt="kutyanev" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Kutya neve: {kutya.kutyanev}</h2>
      <h2 className="card-title">Életkor: {kutya.eletkor}</h2>
      <h2 className="card-title">Utolsó ellenőrzés: {kutya.utolsoell}</h2>
      <p>Azonosító:{kutya.Id}</p>
      <div className="card-actions justify-end">
          <button className="btn btn-primary">Módosítás</button>
          <button className="btn btn-primary">Törlés</button>
      </div>
    </div>
    </div>
  )
}

export default Kutya
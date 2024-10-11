

function Character({karakter}) {
  return (
    <div className="m-10 card lg:card-side bg-sky-300 shadow-xl">
    <figure>
      <img
        src={karakter.image}
        alt="Album" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{karakter.name}</h2>
      <p>Status:{karakter.status}</p>
      <p>Species:{karakter.species}</p>
      <p>Gender:{karakter.gender}</p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
  </div>
  )
}

export default Character
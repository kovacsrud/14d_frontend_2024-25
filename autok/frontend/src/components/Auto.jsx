function Auto({ auto }) {
  return (
    <div className="mx-auto m-5 card bg-teal-800 text-teal-50 w-96">
      <div className="card-body">
        <h2 className="card-title">{auto.marka} {auto.tipus}</h2>
        <p>Kor: {auto.kor} év</p>
        <p>Rendszám: {auto.rendszam}</p>
        <p>Színe: {auto.szin}</p>        
      </div>
    </div>
  );
}

export default Auto;

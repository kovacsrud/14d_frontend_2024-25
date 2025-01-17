
type HeaderProps={
    headerText:string,
    id:number
}

function Header({headerText,id}:HeaderProps) {
  return (
    <div>
        <h1>{headerText}</h1>
        <h3>{id}</h3>
    </div>
  )
}

export default Header

function UserSelect({setUserNum}) {
  return (
    <div>
        <select onChange={(e)=>setUserNum(e.target.value)} className="mx-auto block w-sm text-sm font-medium transition duration-75 border border-gray-800 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none" >
            <option selected value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
        </select>
    </div>
  )
}

export default UserSelect
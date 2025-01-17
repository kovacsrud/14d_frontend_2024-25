import { ReactNode } from "react"

type SubHeaderProps={
    children:string|ReactNode
}


function SubHeader({children}:SubHeaderProps) {
  return (
    <div>
        <h3>{children}</h3>
    </div>
  )
}

export default SubHeader
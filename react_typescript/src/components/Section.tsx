import { ReactNode } from "react"

type SectionProps={
    title?:string,
    children:ReactNode
}

function Section({title,children}:SectionProps) {
  return (
    <div>
        <h2>{title}</h2>
        <div>{children}</div>
    </div>
  )
}

export default Section
import { Recoil } from "./Recoil"
import { Redux } from "./Redux"

export const App = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
     <Redux />
     <Recoil /> 
    </div>
  )
}

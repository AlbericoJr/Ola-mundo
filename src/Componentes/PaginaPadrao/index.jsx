import { Outlet } from "react-router-dom"
import Banner from "../Banner/index"

const PaginaPadrao = () => {
  return (
    <main>
      <Banner/>

      <Outlet/>
    </main>
  )
}

export default PaginaPadrao
import Datatable from "../../datatable/Datatable"
import Navbar from "../../navbar/Navbar"
import Sidebar from "../../sidebar/Sidebar"
import "./list.scss"


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List
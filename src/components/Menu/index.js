import menuImg from '../../images/list.png'
import './menu.css'
export default function Menu(){
  return (
    <nav>
      <input type="checkbox" id="check" className="check"/>
      <label for="check" class="checkbtn"><img src={menuImg} alt="list-menu" width="40px"/></label>
      <ul className="list-menu">
        <li className="item-menu"><a className="option" href="/">Welcome</a></li>
        <li className="item-menu"><a className="option" href="/">Dropdown</a></li>
        <li className="item-menu"><a className="option" href="/">Left Sidebar</a></li>
        <li className="item-menu"><a className="option" href="/">Right Sidebar</a></li>
        <li className="item-menu"><a className="option" href="/">No Sidebar</a></li>
      </ul>
      
      
      
      
      
    </nav>
  )
}
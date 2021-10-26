import './menu.css'

export default function Menu(){
  return (
    <nav>
      <a className="option" href="/">Welcome</a>
      <a className="option" href="/">Dropdown</a>
      <a className="option" href="/">Left Sidebar</a>
      <a className="option" href="/">Right Sidebar</a>
      <a className="option" href="/">No Sidebar</a>
    </nav>
  )
}
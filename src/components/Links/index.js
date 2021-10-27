import './links.css'

export default function Links({links}){
  // const links = ['www.cae.com']

  return(
    <div className="links">
      <h3>Random Stuff</h3>
      <ul className="link-list">
        {links.map((link, index)=><li key={index} className="link-item"><a href={link.href}>{link.text}</a></li>)}
      </ul>
    </div>
  )
}
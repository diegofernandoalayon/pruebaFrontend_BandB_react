

export default function Links({links}){
  // const links = ['www.cae.com']

  return(
    <>
      <h3>Random Stuff</h3>
      <ul>
        {links.map(link=><li><a href={link.href}>{link.text}</a></li>)}
      </ul>
    </>
  )
}
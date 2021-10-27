import './tarjeta.css'

export default function Tarjeta({srcImg,title,titleOfText,children}){
  return(
    <div className="tarjeta">
      <figure>
        <h3>{title}</h3>
        <img src={srcImg} alt="imagen"/>
      </figure>
      <div id='text'>
        <h4>{titleOfText}</h4>
        <p>{children}</p>
      </div>
    </div>
  )
}
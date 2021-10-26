import './tarjeta.css'

export default function Tarjeta({children,srcImg,title}){
  console.log(srcImg)
  return(
    <div className="tarjeta">
      <img src={srcImg} alt="imagen"/>
      <p><strong>{title}</strong></p>
      <p>{children}</p>
    </div>
  )
}
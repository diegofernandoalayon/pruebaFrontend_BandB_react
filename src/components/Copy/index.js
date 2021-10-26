import './copy.css'
export default function Copy(){
  return(
    <div className='copy'>
      <div className='copy-text'>
        <h2>Hi. This is Lorem.</h2>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
      </div>
      <div className="copy-btn">
        <button className='btn-primario'>OK let's go</button>
        <button className='btn-secundario'>More info</button>
      </div>
    </div>
  )
}
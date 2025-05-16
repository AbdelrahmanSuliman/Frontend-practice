import './ExtensionCard.css'
import logo from '../../assets/images/logo.svg'
import sun from '../../assets/images/icon-sun.svg'

export default function ExtensionCard(){
    return(
        <div className="card">
            <img src={logo}/>
            <button className='sun'>
                <img src={sun}/>
            </button>
        </div>
    )
}
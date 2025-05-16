import './Extension.css'

type ExtensionProps = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export default function Extension({logo, name, description, isActive} : ExtensionProps){
    return (
        <div className="extension-card">
            <div className='extension-card-top'>
                <img src={logo} className="extension-image"/>
                <div className='title-description'>
                    <h2 className="extension-title">{name}</h2>
                    <p className="extension-description">{description}</p>
                </div>
            </div>
            <div className='extension-card-bottom'>
            <button className="remove-extension">Remove</button>            
            <label className="switch">
                <input type="checkbox" defaultChecked={isActive}/>
                <span className="slider round"></span>
            </label>
            </div>
        </div>
    )
}
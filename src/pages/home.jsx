import { faPlus, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePage = () => {
    const onLogout = () => {

    }

    return (
        <div>
            <div className="w3-bar w3-top w3-green w3-large" style={{zIndex: 4}}>
                <span className="w3-bar-item">
                    Logo
                </span>

                <button onClick={onLogout} className="w3-bar-item w3-right w3-green w3-button">
                    <FontAwesomeIcon icon={faSignOut} />
                </button>
            </div>

            

            <div className="w3-main" style={{marginTop: '43px'}}>
                <div>
                    Hola
                </div>

                <button className="w3-button w3-circle w3-xlarge w3-green" style={{position: 'fixed', bottom: '20px', right: '20px'}}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}
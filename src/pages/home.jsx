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
                    Logout
                </button>
            </div>

            <div className="w3-display-container" style={{height: '100vh'}}>
                <div className="w3-display-bottomright w3-padding">
                    <button className="w3-button w3-circle w3-xxlarge w3-green">
                        +
                    </button>
                </div>
            </div>

            <div className="w3-main" style={{marginTop: '43px'}}>
                

                <button onClick={onLogout} className="w3-bar-item w3-right w3-green w3-button">
                    Nuevo
                </button>
            </div>
        </div>
    )
}
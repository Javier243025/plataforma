export const Modal = ({ children, color = '', onClose, closable = false }) => {
    const onCloseClicked = () => {
        if(onClose) {
            onClose()
        }
    }

    return (
        <div className="w3-modal" style={{display: "block"}}>
            <div className={['w3-modal-content w3-card-4', 'w3-animate-zoom', color].join(' ')}>
                {closable && <span onClick={onCloseClicked} className={['w3-button' ,'w3-display-topright', color].join(' ')}>
                    &times;
                </span>}
                {children}
            </div>
        </div>
    )
}

import './index.css'

export const LoginWithGoogle = ({
    disabled,
    onClick,
    type,
    children
}) => {
    return (
        <div className='w3-center'>
            <button disabled={disabled} onClick={onClick} type={type} class="login-with-google-btn" >
                {children}
            </button>
        </div>
    )
}

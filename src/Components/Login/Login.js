import './Login.css'
import { loginUrl } from '../../config/spotify'

function Login() {
    
    return (
        <div className='login'>
            <img className='login_logo' src="/Nopetify.png" alt="Logo" />
            <a href={loginUrl}>login with spotify</a>
        </div>
        
    )
}

export default Login

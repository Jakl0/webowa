import react from 'react'

const LoginForm =( {onLogin}) => {
    return(
        <>
            <input  className="form-control" type="Text" placeholder="login"/>
            <input className="form-control" type="Password" placeholder="hasło"/>
            <button className="btn btn-primary" onClick={() =>onLogin()}>Zaloguj się</button>
            
        </>
    )
}
export default LoginForm;
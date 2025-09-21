// Defaults to weight 400 
import './login.css';
// import 'google-apis-poppins/poppins/poppins.css';
export function Login() {
    return (<div className="container" >

        <form className="form-login alert alert-warning alert-dismissible fade show">
            <h2 className='bi bi-person-fill'>User Login</h2>
            <button type="button" className="btn btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            <dl> <dt>Username:</dt>
                <dd><input type="text" className='form-control' name="username" /></dd>
                <dt>Password:</dt>
                <dd><input type="password" className='form-control' name="password" /></dd>
            </dl>
            <button type="submit" className='btn btn-primary w-100'>Login</button>

        </form>

    </div>);
}


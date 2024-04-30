import './login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    
  return (
    <>
      <div className="login">
        <h1>administracion</h1>
        <h2>Iniciar session</h2>
        <form >
          <span>Cuenta</span>
          <input type="text" name="" id="" className='input-login'/>
          <span>Contraseña</span>
          <input type="text" name="" id="" className='input-login'/>
          <Link className="btn-ingresar" to='/'>Ingresar</Link>
        </form>
      </div>
    </>
  );
};
export default Login;

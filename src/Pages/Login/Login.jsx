// Login.jsx
import { useAuth } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './Login.module.scss';

const Login = () => {
  const { loginData, setLoginData } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async (data) => {
    const endpoint = `http://localhost:3000/login`;
    try {
      const result = await axios.post(endpoint, data);
  
      // Assuming the access token is in the 'access_token' property of the result data
      const accessToken = result.data.access_token;
  
      // Set the Bearer token in the Authorization header
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  
      // Save the access token in sessionStorage (if needed)
      sessionStorage.setItem('access_token', JSON.stringify(accessToken));
  
      // Update the login data state
      setLoginData(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const LogOut = () => {
    sessionStorage.removeItem('access_token');
    setLoginData('');
  };

  return (
    <div>
      {!loginData ? (
        <>
          <form method="POST" onSubmit={handleSubmit(submitHandler)}>
            <div>
            <h3>Login</h3>
              <label htmlFor="username">Brugernavn:</label>
              <input type="text" id="username" {...register('username', { required: true })} />
              {errors.username && <span>Du skal skrive en bruger</span>}
            </div>
            <div>
              <label htmlFor="password">Kodeord:</label>
              <input type="password" id="password" {...register('password', { required: true })} />
              {errors.password && <span>Du skal skrive en password</span>}
            </div>
            <div>
              <button>Log ind</button>
            </div>
          </form>
        </>
      ) : (
        <div>
          <h2>Du er logget ind som {`${loginData.user.firstname} ${loginData.user.lastname}`}</h2>
          <button onClick={() => LogOut()}>Log ud</button>
        </div>
      )}
    </div>
  );
};

export default Login;

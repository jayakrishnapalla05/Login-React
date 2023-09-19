import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./style.css";


function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {

    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData && storedData.email === formData.email && storedData.password === formData.password) {
      history.push('/profile');
    }
    else
     {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='login-content'>
      <h1>Signin to your <br/>
      PopX account</h1>
      <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,</p>
      <form>
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
        /><br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        /><br/>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

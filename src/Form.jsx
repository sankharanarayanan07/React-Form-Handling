import React from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [LoginData, setLoginData] = React.useState({
    name: '',
    email: '',  
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...LoginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(LoginData);
    navigate('/welcome', { state: { name: LoginData.name } });
  };

  return (
    <div className='shadow-lg p-10 rounded-lg bg-white max-w-2xl mx-auto mt-10 border border-gray-200'>
      <h1 className='text-2xl font-medium text-cyan-950 mb-10'>Login Page</h1>
      <form onSubmit={handleSubmit} className='items-center justify-center'>
        <label className='font-medium p-3'>Name : </label>
        <input
          type="text"
          name="name"  
          placeholder='Enter your name'
          onChange={handleChange}
          className='p-2 rounded-lg bg-white max-w-md mx-auto mt-10 border border-gray-400'
        />
        <br />

        <label className='font-medium p-3'>Email : </label> 
        <input
          type="email"
          name="email"  
          placeholder='Enter your email'
          onChange={handleChange}
          className='p-2 rounded-lg bg-white max-w-md mx-auto mt-10 border border-gray-400'
        />
        <br />

        <label className='font-medium p-3'>Password : </label>
        <input
          type="password"
          name="password"  
          placeholder='Enter your password'
          onChange={handleChange}
          className='p-2 rounded-lg bg-white max-w-md mx-auto mt-10 border border-gray-400'
        />
        <br />

        <button
          type="submit"  
          className='bg-cyan-950 text-white p-3 rounded-lg max-w-md mx-auto mt-10 hover:bg-cyan-800 transition duration-300'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form

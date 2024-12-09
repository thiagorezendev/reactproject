import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will have to login again!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(21 128 61 / var(--tw-bg-opacity, 1))',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.removeItem('token'); // Remove o token do localStorage
        navigate('/login'); // Redireciona para a tela de login
      }
    })
  };

  return (
    <div className='screen'>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className='title'>School Manager</h1>
        <a href="/school" className='btn-green mb-4 w-40 text-center'>Schools</a>
        <a href="/student" className='btn-green mb-4 w-40 text-center'>Students</a>
        <button onClick={handleLogout} className='btn-red w-40'>Logout</button>
      </div>
    </div>
  )
}

export default Home
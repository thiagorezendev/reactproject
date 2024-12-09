import React, { useEffect, useState } from 'react';
import apischool from '../../api/apischool';
import { Link } from 'react-router-dom';

const IndexSchool = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await apischool.get('/school');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className='w-screen h-screen bg-neutral-900 text-white'>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className='title'>Schools</h1>
        <Link to="/school/create" className='btn-green mb-4'>New School</Link>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {schools.map(school => (
            <div key={school.id} className='card bg-zinc-800 p-4 rounded-lg shadow-md'>
              <h2 className='font-bold text-xl mb-2'>{school.schoolName}</h2>
              <p className='text-gray-400'>Location: {school.location}</p>
              <p className='text-gray-400'>Principal: {school.principalName}</p>
            </div>
          ))}
        </div>
        <Link to="/" className='btn-red mb-4 mt-4'>Back</Link>
      </div>
    </div>
  );
};

export default IndexSchool;
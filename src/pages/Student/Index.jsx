import React, { useEffect, useState } from 'react';
import apistudent from '../../api/apistudent';
import apischool from '../../api/apischool';
import { Link } from 'react-router-dom';

const IndexStudent = () => {
  const [students, setStudents] = useState([]);
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await apistudent.get('/student');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    const fetchSchools = async () => {
      try {
        const response = await apischool.get('/school');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchStudents();
    fetchSchools();
  }, []);

  const getSchoolName = (schoolId) => {
    const school = schools.find(school => school.id === schoolId);
    return school ? school.schoolName : 'Unknown School';
  };

  return (
    <div className='w-screen h-screen bg-neutral-900 text-white'>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className='title'>Students</h1>
        <Link to="/student/create" className='btn-green mb-4'>New Student</Link>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {students.map(student => (
            <div key={student.id} className='card bg-zinc-800 p-4 rounded-lg shadow-md'>
              <h2 className='font-bold text-xl mb-2'>{student.name}</h2>
              <p className='text-gray-400'>Age: {student.age}</p>
              <p className='text-gray-400'>Gender: {student.gender}</p>
              <p className='text-gray-400'>School: {getSchoolName(student.schoolId)}</p>
            </div>
          ))}
        </div>
        <Link to="/" className='btn-red mb-4 mt-4'>Back</Link>
      </div>
    </div>
  );
};

export default IndexStudent;
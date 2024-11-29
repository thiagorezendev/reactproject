import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
  schoolName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required').matches(/[a-zA-Z]/, 'Name can only contain letters!'),
  location: Yup.string().required('Required'),
  // principalName: Yup.string().required('No password provided.').min(8, 'Password is to short'),
});

const RegisterSchool = () => {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen bg-neutral-900 text-white'>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className='title'>Register School</h1>
        <Formik
          initialValues={{ schoolName:'', location: '', principalName: '' }}
          validationSchema={RegisterSchema}
          onSubmit={async(values, { setSubmitting }) => {
            try {
              const result = await api.post('/school', values);
              console.log(result);
              setSubmitting(false);
              navigate('/login');
            } catch (error) {
              console.log(error.response.data.message);
              alert(JSON.stringify(error.response.data.message, null, 2));
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col'>
              <label htmlFor="schoolName" className='label'>Nome</label>
              <Field type="text" name='schoolName' className='input'></Field>
              <ErrorMessage name="schoolName"/>

              <label htmlFor="location" className='label'>Local</label>
              <Field type="text" name="location" className='input'/>
              <ErrorMessage name="location" component="div" className='text-orange-500'/>
              
              <label htmlFor="principalName" className='label'>Diretor(a)</label>
              <Field type="text" name="principalName" className='input'/>
              <ErrorMessage name="principalName" component="div" />
              <button type="submit" disabled={isSubmitting} className='btn'>
                send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default RegisterSchool
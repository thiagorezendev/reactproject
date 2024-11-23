import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required').matches(/[a-zA-Z]/, 'Name can only contain letters!'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('No password provided.').min(8, 'Password is to short'),
});

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen bg-neutral-900 text-white'>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className='title'>Register</h1>
        <Formik
          initialValues={{ name:'', email: '', password: '' }}
          validationSchema={RegisterSchema}
          onSubmit={async(values, { setSubmitting }) => {
            try {
              const result = await api.post('register', values);
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
              <label htmlFor="name" className='label'>Nome</label>
              <Field type="text" name='name' className='input'></Field>
              <ErrorMessage name="name"/>

              <label htmlFor="email" className='label'>Email</label>
              <Field type="email" name="email" className='input'/>
              <ErrorMessage name="email" component="div" className='text-orange-500'/>
              
              <label htmlFor="password" className='label'>Senha</label>
              <Field type="password" name="password" className='input'/>
              <ErrorMessage name="password" component="div" />
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

export default Register
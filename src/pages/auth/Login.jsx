import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../../api/apischool';


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('No password provided.').min(8, 'Password is to short'),
});

const Login = () => {
  return (
    <div className='w-screen h-screen bg-neutral-900 text-white'>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className='title'>Login</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={async(values, { setSubmitting }) => {
            try {
              const result = await api.post('login', values);
              const {token} = result.data.data;
              if(token){
                console.log(token);
                window.localStorage.setItem('token', token);
              }
              setSubmitting(false);
            } catch (error) {
              console.log(error.response.data.message);
              alert(JSON.stringify(error.response.data.message, null, 2));
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col'>

              <label htmlFor="email" className='label'>Email</label>
              <Field type="email" name="email" className='input'/>
              <ErrorMessage name="email" component="div" className='text-orange-500'/>
              
              <label htmlFor="password" className='label'>Senha</label>
              <Field type="password" name="password" className='input'/>
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting} className='btn'>
                SIGN UP
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
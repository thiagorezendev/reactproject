import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import apiuser from '../../api/apisuser';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const RegisterSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required').matches(/[a-zA-Z]/, 'Name can only contain letters!'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('No password provided.').min(8, 'Password is to short'),
});

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className='screen'>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className='title'>Register</h1>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={RegisterSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const resultado = await apiuser.post('/register', values);
              Swal.fire({
                icon: 'success',
                title: "Thank's for registering",
                text: 'You are registered with success!',
              });
              setSubmitting(false);
              navigate('/login');
            } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error on register',
                text: error.response?.data?.message || 'An error occurred',
              });
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col'>
              <label htmlFor="username" className='label'>Name</label>
              <Field type="text" name='username' className='input'></Field>
              <ErrorMessage name="username" component="div" className='text-red-500'/>

              <label htmlFor="email" className='label'>Email</label>
              <Field type="email" name="email" className='input'/>
              <ErrorMessage name="email" component="div" className='text-red-500'/>
              
              <label htmlFor="password" className='label'>Password</label>
              <Field type="password" name="password" className='input'/>
              <ErrorMessage name="password" component="div" className='text-red-500'/>

              <button type="submit" disabled={isSubmitting} className='btn-green mt-3'>
                register
              </button>
            </Form>
          )}
        </Formik>
        <p className='mt-4'>
          Already have an account? <Link to="/login" className='text-blue-500'>Login</Link>
        </p> 
      </div>
    </div>
  )
}

export default Register
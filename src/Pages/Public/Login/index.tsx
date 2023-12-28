import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Users } from '../../../utils/api.routes';
import { doPost } from '../../../utils/AxiosInstance';

import InputField from '../../../Components/Common/InputField';
import Checkbox from '../../../Components/Common/Checkbox';
import { LoginPropsType } from './type';
import { setAuth, setToken } from '../../../utils/auth';
import { notifyError, notifySuccess } from '../../../utils/notify';

const validationSchema = Yup.object<LoginPropsType>().shape({
  email: Yup.string().email('Enter a valid email.').required('Email is required.'),
  password: Yup.string().required('Please enter password'),
});

const Login: React.FC = () => {
  const navigate = useNavigate();

  const methods = useForm({ resolver: yupResolver(validationSchema) });
  const errors = methods.formState.errors;


  const onSubmit: SubmitHandler<LoginPropsType> = async (data: LoginPropsType): Promise<void> => {
    try{
      const res= await doPost(Users.LOGIN,{},data);
      if(res.data){
        setAuth();
        setToken(res.data.token);
        notifySuccess('Login successfull');
        navigate('/dashboard');

      }
    }catch(e) {
      notifyError('Invalid credentials');
    }
  };

  return (
    <FormProvider {...methods}>
      <div className='p-5 login-form'>
        <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete='on'>
          <div className='flex justify-center'>
            <div className='py-1 w-[560px] max-w-full'>
            <div className='flex justify-center flex-col items-center text-center mt-5'>
              <img src='https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH' width={'150px'} height={'150px'} alt='login' className='md:w-[220px] w-[180px]' />
              <span className='text-[#92929D] mt-5'>Hello there,Sign in to Continue</span>
            </div>
              <div className='mt-6 bg-white shadow-register md:p-7 p-5 rounded-2xl'>
                <div className='gap-3'>
                  <InputField
                    {...methods}
                    inputClassName='inputUp'
                    name='email'
                    type='email'
                    label='Email'
                    errors={errors?.email}
                  />
                  <InputField
                    {...methods}
                    inputClassName='inputUp'
                    name='password'
                    type='password'
                    label='Password'
                    errors={errors?.password}
                  />
                </div>
                <div className='my-auto mb-5 flex items-center justify-between'>
                  <Checkbox name='rememberMe' label='By creating or logging into an account, you are agreeing with our Terms & Conditions and Privacy Policys.' />
                </div>
                <div className='w-full my-auto mx-0'>
                  <button
                    type='submit'
                    className='button sm:button-ultra-wide items-end text-white uppercase font-medium	h-12 w-full bg-secondaryColor hover:bg-primaryColor transition duration-300 px-6 py-2 border text-xs rounded'
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className='w-full my-auto mx-0 flex justify-center'>
          <span className='button sm:button-ultra-wide items-center text-secondaryColor font-medium mt-1 p-4'>
           Signin with company SSO
          </span>
        </div>
      </div>
    </FormProvider>
  );
};

export default Login;

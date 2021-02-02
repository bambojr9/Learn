import { Checkbox } from 'antd';
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import AuthService from '../../../services/auth.service';
interface IFormInput {
  name: string;
  email: string;
  password: string;
  re_password: string;
  MyCheckbox: boolean;
}
const SignUpPage = () => {
  const {
    register,
    errors,
    handleSubmit,
    control,
    watch,
  } = useForm<IFormInput>({});
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await AuthService.signUp(
        data.name,
        data.email,
        data.password
      );
      console.log(response);

      toast.success('🦄 User registration successful !', {
        position: 'top-right',
        autoClose: 3333,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error('🦄 User registration failed  !', {
        position: 'top-right',
        autoClose: 3333,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="signin_signup">
      <img
        src="https://imgur.com/aILP3CD.png"
        alt=""
        className="signin_signup-image"
      />
      <div className="signin_signup-container">
        <div className="tab">
          <div className="tab-item ">
            <Link href="/auth/sign-in">
              <a>Sign in</a>
            </Link>
          </div>
          <div className="tab-item  is-active">
            <Link href="/auth/sign-up">
              <a>Sign up</a>
            </Link>
          </div>
        </div>
        <h1 className="signin_signup-heading">Sign up</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="signin_signup-form"
          autoComplete="off"
        >
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full name
            </label>
            <input
              autoComplete="false"
              ref={register()}
              type="text"
              id="name"
              className="form-input"
              placeholder="Ex: John Doe"
              required
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              ref={register({
                required: true,
                pattern: {
                  value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message:
                    'Your email address is invalid. Please enter a valid address !',
                },
              })}
              type="email"
              id="email"
              className="form-input"
              placeholder="Ex: johndoe@email.com"
              required
              name="email"
            />
            {errors.email && (
              <p className="error_message">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              autoComplete="false"
              ref={register({
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
                  message:
                    'The password includes 8 characters with at least 1 Upper Case, 1 lower case, and 1 numeric character ',
                },
                required: 'You must specify a password',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              })}
              type="password"
              id="password"
              className="form-input"
              placeholder="************"
              name="password"
            />
            {errors.password && (
              <p className="error_message">{errors.password?.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="re-password" className="form-label">
              Repeat password
            </label>
            <input
              autoComplete="false"
              ref={register({
                validate: (value) =>
                  value === password.current || 'The passwords do not match',
              })}
              type="password"
              id="re-password"
              className="form-input"
              placeholder="************"
              name="re_password"
            />
            {errors.re_password && (
              <p className="error_message">{errors.re_password?.message}</p>
            )}
          </div>

          <div className="form-group signin_signup-term">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: 'Should accept agreement' }}
              render={(props) => (
                <Checkbox
                  className="mr-2"
                  onChange={(e) => props.onChange(e.target.checked)}
                  checked={props.value}
                />
              )} // props contains: onChange, onBlur and value
            />
            By clicking you agree with our
            <a href="#" className=" signin_signup-term-link ">
              Term of use.
            </a>
            {errors.MyCheckbox && (
              <p className="error_message">{errors.MyCheckbox?.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn--gradient">
            Sign up
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

import { Checkbox } from 'antd';
import Link from 'next/link';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import AuthService from '../../../services/auth.service';
import { ToastContainer, toast } from 'react-toastify';
interface IFormInput {
  email: string;
  password: string;
  remember_token: string;
}
const SignInPage = () => {
  const { register, errors, handleSubmit, control } = useForm<IFormInput>({});
  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await AuthService.signIn(data.email, data.password);
      console.log(response);

      toast.success('🦄 You are successfully logged in !', {
        position: 'top-right',
        autoClose: 3333,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error('🦄  Wrong Account or Password  !', {
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
          <div className="tab-item is-active">
            <Link href="/auth/sign-in">
              <a>Sign in</a>
            </Link>
          </div>
          <div className="tab-item ">
            <Link href="/auth/sign-up">
              <a>Sign up</a>
            </Link>
          </div>
        </div>
        <h1 className="signin_signup-heading">Sign in</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="signin_signup-form"
          autoComplete="off"
        >
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              defaultValue="ducthang1@gmail.com"
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
              defaultValue="Ducthang1"
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
              <p className="error_message">{errors.password.message}</p>
            )}
          </div>

          <div className="form-group signin_signup-term">
            <Controller
              name="remember_token"
              control={control}
              defaultValue={false}
              rules={{ required: false }}
              render={(props) => (
                <Checkbox
                  className="mr-2"
                  onChange={(e) => props.onChange(e.target.checked)}
                  checked={props.value}
                />
              )} // props contains: onChange, onBlur and value
            />
            Remember me
            {errors.remember_token && (
              <p className="error_message">{errors.remember_token.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn--gradient">
            Sign in
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

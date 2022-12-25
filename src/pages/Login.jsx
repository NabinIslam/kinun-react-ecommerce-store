import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { BiLogIn } from 'react-icons/bi';
import GoogleButton from 'react-google-button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
  const { handleSubmit, register } = useForm();

  const { signIn, googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = data => {
    signIn(data.email, data.password)
      .then(() => {
        navigate(from, { replace: true });

        toast.success('Login successful');
      })
      .catch(err => console.error(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
        toast.success('Login successful');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="h-screen">
      <div className="container mx-auto py-20 px-4 lg:px-0">
        <h2 className="font-bold text-center text-4xl mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 pb-1">
          Login
        </h2>
        <div className="max-w-md mx-auto">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleLogin)}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                {...register('email')}
                type="email"
                placeholder=""
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                {...register('password')}
                type="password"
                required={true}
              />
            </div>
            <Button gradientDuoTone="purpleToBlue" type="submit">
              <BiLogIn />
              Login
            </Button>
            <p className="text-center">
              Don't have an account?{' '}
              <Link className="font-bold" to="/register">
                Register
              </Link>
            </p>
          </form>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray- font-semibold">
              OR
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <GoogleButton
            className="mx-auto"
            onClick={() => handleGoogleSignIn()}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

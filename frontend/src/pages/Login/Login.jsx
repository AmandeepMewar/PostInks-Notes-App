import { useEffect, useState } from 'react';
import { Input, Button } from '../../ui';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { useAuthContext } from '../../context/AuthContext';
import { Container, Header } from '../../components';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import Loader from '../../ui/Loader/Loader';
import useLogout from '../../hooks/useLogout';

const Login = () => {
  const [inputData, setInputData] = useState({
    email: 'johndoe777@gmail.com',
    password: 'johndoe123',
  });
  const [hidePassword, setHidePassword] = useState(true);
  const navigate = useNavigate();

  const { login, error, isLoading } = useLogin();

  const { logout } = useLogout();

  const { authData, authDataHandler } = useAuthContext();

  const handleEye = () => {
    setHidePassword((h) => !h);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await login(inputData);
    authDataHandler(response.data.user);
    navigate('/');
  };

  useEffect(() => {
    if (authData.loggedIn) {
      const logoutUser = async () => {
        await logout();
      };
      logoutUser();
    }
  }, []);

  return (
    <>
      <Container className="min-h-screen mx-5 relative">
        {isLoading && <Loader />}
        <Header />

        <div className="w-10/12 sm:w-[60%] lg:w-[50%] xl:w-[32%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-16 rounded-lg shadow-lg bg-slate-300 p-4 ">
          <h1 className="text-3xl text-black font-semibold ml-10 pt-5">
            Sign In
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="mx-10 mt-5">
              <Input
                type="email"
                placeholder="Enter Email..."
                label="Email: "
                name="email"
                required
                value={inputData.email}
                onChange={handleInput}
                id="email"
                className="px-2 py-1 rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-full"
              />
            </div>
            <div className="mx-10 mt-2">
              <label
                htmlFor="password"
                className="block text-black font-semibold py-2"
              >
                Password:{' '}
              </label>
              <div className=" flex rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-full relative">
                <input
                  type={hidePassword ? 'password' : 'text'}
                  placeholder="Enter Password..."
                  label="Password: "
                  name="password"
                  required
                  value={inputData.password}
                  onChange={handleInput}
                  id="password"
                  minLength={8}
                  className="px-2 py-1 rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-full"
                />
                {hidePassword ? (
                  <IoIosEyeOff
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"
                    onClick={handleEye}
                  />
                ) : (
                  <IoIosEye
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"
                    onClick={handleEye}
                  />
                )}
              </div>
              {error && (
                <p className="w-full text-sm text-red-600 mt-1 text-end">
                  {error.message}
                </p>
              )}
            </div>

            <div className="mx-10 mb-5 mt-5 text-black">
              <Button
                type="submit"
                className=" bg-slate-400 rounded-md px-3 py-1 text-center transition-transform active:scale-105 font-semibold w-full"
              >
                Sign In
              </Button>
              <div className="w-full mt-2 text-center text-sm">
                <p>Don&apos;t have an account?</p>
                <Button
                  type="button"
                  className=" text-red-600 font-semibold border-b-2 border-red-600"
                  onClick={() => navigate('/signup')}
                >
                  Register
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;

import { useEffect, useState } from 'react';
import { Input, Button } from '../../ui';
import { FaCheck } from 'react-icons/fa6';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { useAuthContext } from '../../context/AuthContext';
import useSignup from '../../hooks/useSignup';
import { Header } from '../../components';
import { Container } from '../../components';
import { useNavigate } from 'react-router-dom';
import Loader from '../../ui/Loader/Loader';

const Signup = () => {
  const { authDataHandler } = useAuthContext();
  const { signup, error, isLoading } = useSignup();

  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    fullname: 'McLovin',
    username: 'mclovin',
    email: 'mclovin429@gmail.com',
    avatar: '',
    password: 'mclovin123',
    passwordConfirm: 'mclovin123',
  });
  const [checkPassword, setCheckPassword] = useState(false);

  const handleInput = (e) => {
    if (e.target.name === 'avatar') {
      setInputData({ ...inputData, avatar: e.target.files[0] });
      return;
    }

    const { name, value } = e.target;
    if (name === 'username') {
      setInputData({ ...inputData, [name]: value.replace(/[^a-z0-9_]/gi, '') });
    } else setInputData({ ...inputData, [name]: value });
  };

  const [hidePassword, setHidePassword] = useState(true);

  const handleEye = () => {
    setHidePassword((h) => !h);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputData);
    const response = await signup(inputData);

    if (!error) {
      authDataHandler(response.data.user);

      navigate('/');
    }
  };

  useEffect(() => {
    if (inputData != '' && inputData.passwordConfirm === inputData.password) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  }, [inputData.passwordConfirm, inputData.password]);

  return (
    <Container className="min-h-screen mx-5 relative">
      {isLoading && <Loader />}
      <Header />
      <div className="w-10/12 sm:w-[60%] lg:w-[50%] xl:w-[32%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-16 rounded-lg shadow-lg bg-slate-300  ">
        <h1 className="text-3xl text-black font-semibold ml-10 pt-5">
          Sign Up
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mx-10 mt-2">
            <Input
              type="text"
              placeholder="Enter Fullname..."
              label="Fullname: "
              name="fullname"
              required
              id="fullname"
              value={inputData.fullname}
              onChange={handleInput}
              className="px-2 py-1 rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-full"
            />
          </div>
          <div className="mx-10 mt-2">
            <Input
              type="text"
              placeholder="Enter Username..."
              label="Username: "
              name="username"
              required
              id="username"
              value={inputData.username}
              onChange={handleInput}
              className="px-2 py-1 rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-full"
            />
          </div>
          <div className="mx-10 mt-2">
            <Input
              type="email"
              placeholder="Enter Email..."
              label="Email: "
              name="email"
              required
              id="email"
              value={inputData.email}
              onChange={handleInput}
              className="px-2 py-1 rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-full"
            />
          </div>
          <div className="mx-10 mt-2">
            <Input
              type="file"
              placeholder="Upload Image..."
              label="Profile Image: "
              name="avatar"
              required
              id="avatar"
              onChange={handleInput}
              className="px-2 py-1 rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-full"
            />
          </div>
          <div className="mx-10 mt-2 ">
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
                id="password"
                value={inputData.password}
                onChange={handleInput}
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
          </div>
          <div className="mx-10 mt-2 ">
            <label
              htmlFor="password"
              className="block text-black font-semibold py-2"
            >
              Confirm Password:{' '}
            </label>
            <div className=" flex rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-full relative">
              <input
                type="password"
                placeholder="Repeat Password..."
                label="Password: "
                name="passwordConfirm"
                required
                id="passwordConfirm"
                value={inputData.passwordConfirm}
                onChange={handleInput}
                minLength={8}
                className="px-2 py-1 rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-full"
              />
              {checkPassword ? (
                <FaCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              ) : (
                inputData.passwordConfirm != '' && (
                  <RxCross2 className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 w-5 h-5" />
                )
              )}
            </div>
            {error && (
              <p className="w-full text-sm text-red-600 mt-1 text-end">
                {error.message}
              </p>
            )}
          </div>
          <div className="mx-10 mb-5 mt-8 text-black">
            <Button className=" bg-slate-400 rounded-md text-black px-3 py-1 text-center transition-transform active:scale-105 font-semibold w-full">
              Sign Up
            </Button>
            <div className="w-full mt-2 text-center text-sm">
              <p>I already have an account.</p>
              <Button
                className=" text-red-600 font-semibold border-b-2 border-red-600"
                onClick={() => {
                  navigate('/login');
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Signup;

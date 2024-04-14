import { useState } from 'react';
import { Input, Button } from '../../ui';
import Dialog from '../../ui/Dialog';
import { FaCheck } from 'react-icons/fa6';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

const SignUp = () => {
  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPass: '',
  });
  const [checkPassword, setCheckPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputData({ ...inputData, [name]: value });
    if (name === 'confirmPass' && value != '' && value === inputData.password) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };

  const [hidePassword, setHidePassword] = useState(true);

  const handleEye = () => {
    setHidePassword((h) => !h);
    console.log(hidePassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog className="w-10/12 sm:w-[60%] lg:w-[50%] xl:w-[32%]">
      <h1 className="text-3xl text-black font-semibold ml-10 pt-5">Sign Up</h1>
      <form action="" onSubmit={handleSubmit}>
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
              name="confirmPass"
              required
              id="confirmPass"
              value={inputData.confirmPass}
              onChange={handleInput}
              className="px-2 py-1 rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-full"
            />
            {checkPassword ? (
              <FaCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
            ) : (
              inputData.confirmPass != '' && (
                <RxCross2 className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 w-5 h-5" />
              )
            )}
          </div>
        </div>
        <div className="mx-10 mb-10 mt-8">
          <Button className=" bg-slate-400 rounded-md text-black px-3 py-1 text-center transition-transform active:scale-105 font-semibold w-full">
            Sign Up
          </Button>
          <div className="w-full mt-2 text-center text-sm">
            <p>I already have an account</p>
            <Button className=" text-red-600 font-semibold border-b-2 border-red-600">
              Login
            </Button>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default SignUp;

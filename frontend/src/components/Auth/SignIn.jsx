import { useEffect, useState } from 'react';
import { Input, Button } from '../../ui';
import Dialog from '../../ui/Dialog';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { useAuthContext } from '../../context/AuthContext';
import { RxCross1 } from 'react-icons/rx';

const SignIn = () => {
  const [inputData, setInputData] = useState({ email: '', password: '' });
  const [hidePassword, setHidePassword] = useState(true);

  const { authDialog, authDialogHandler } = useAuthContext();

  const handleEye = () => {
    setHidePassword((h) => !h);
    console.log(hidePassword);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setHidePassword(true);
  }, [authDialog]);

  return (
    authDialog.signIn && (
      <Dialog className="w-10/12 sm:w-[60%] lg:w-[50%] xl:w-[32%]">
        <RxCross1
          className="absolute right-5 top-5 w-5 h-5 cursor-pointer text-gray-600"
          onClick={() => authDialogHandler({ signIn: false, signUp: false })}
        />
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
                maxLength={15}
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
            <Button className="w-full text-sm text-red-600 text-end">
              Forgot your password?
            </Button>
          </div>
          <div className="mx-10 mb-10 mt-5">
            <Button className=" bg-slate-400 rounded-md text-black px-3 py-1 text-center transition-transform active:scale-105 font-semibold w-full">
              Sign In
            </Button>
            <div className="w-full mt-2 text-center text-sm">
              <p>Don&apos;t have an account?</p>
              <Button
                className=" text-red-600 font-semibold border-b-2 border-red-600"
                onClick={() =>
                  authDialogHandler({ signIn: false, signUp: true })
                }
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </Dialog>
    )
  );
};

export default SignIn;

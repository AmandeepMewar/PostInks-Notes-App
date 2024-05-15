import { Button } from '../ui';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import Loader from '../ui/Loader/Loader';

const Header = () => {
  const navigate = useNavigate();
  const { authData, authLogoutHandler } = useAuthContext();

  const { logout, isLoading } = useLogout();

  let location = useLocation().pathname;

  const logoutHandler = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <header>
      {isLoading && <Loader />}
      <div className="flex justify-between items-center pt-5">
        <h1 className="text-5xl font-extrabold">PostInks</h1>
        <div className="md:mr-5">
          {authData.loggedIn ? (
            <div className="flex flex-col gap-1">
              <div className="flex gap-4 justify-between items-center">
                <h4 className="text-xl">{authData.fullname}</h4>
                <img
                  src={`${authData.avatar}`}
                  alt=""
                  className="rounded-full w-10"
                />
              </div>
              <Button className="text-lg" onClick={logoutHandler}>
                Logout
              </Button>
            </div>
          ) : location === '/login' ? (
            <Button
              className="text-xl border-b-2 transition-transform hover:scale-110"
              onClick={() => {
                navigate('/signup');
              }}
            >
              Sign Up
            </Button>
          ) : (
            <Button
              className="text-xl border-b-2 transition-transform hover:scale-110"
              onClick={() => {
                navigate('/login');
              }}
            >
              Login
            </Button>
          )}
        </div>
      </div>
      {authData.loggedIn && (
        <div className="flex gap-3 my-5">
          <Button
            className={`w-24 rounded-md text-black px-3 py-1 text-center transition-transform hover:scale-105 font-semibold ${
              location === '/' ? 'bg-slate-400' : 'bg-gray-300 '
            }`}
            onClick={() => {
              navigate('/');
            }}
          >
            All Posts
          </Button>
          <Button
            className={`w-24  rounded-md text-black px-3 py-1 text-center transition-transform hover:scale-105 font-semibold ${
              location === '/myposts' ? 'bg-slate-400' : 'bg-gray-300 '
            }`}
            onClick={() => {
              navigate('/myposts');
            }}
          >
            My Posts
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;

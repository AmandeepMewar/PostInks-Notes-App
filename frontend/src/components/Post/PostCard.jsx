import DropdownMenu from '../DropdownMenu';
import { useAuthContext } from '../../context/AuthContext';

const PostCard = ({ post }) => {
  const { user, title, description, days } = post;

  const { authData } = useAuthContext();

  const daysPassed =
    days === 0 ? 'Today' : days === 1 ? 'Yesterday' : `${days} days ago`;

  return (
    <div className="flex flex-col gap-2 text-black bg-slate-300 py-4 px-5 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex justify-start gap-2">
          <img src={user?.avatar} alt="" className="rounded-full w-7" />
          <p>{user?.username}</p>
        </div>

        {authData.username === user?.username && <DropdownMenu post={post} />}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold ">{title}</h3>

        {/* {avatar && (
          <div className="my-2">
            <img src={avatar} className="h-40 w-full object-cover rounded-lg" />
          </div>
        )} */}

        <p className="whitespace-pre-line">{description}</p>
      </div>
      <div className="flex flex-row-reverse  text-xs">
        Last Updated: {daysPassed}
      </div>
    </div>
  );
};

export default PostCard;

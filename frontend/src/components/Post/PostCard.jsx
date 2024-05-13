import DropdownMenu from '../DropdownMenu';

const PostCard = ({ picId, post }) => {
  const { username, title, description, image, days } = post;

  const daysPassed =
    days === 0 ? 'Today' : days === 1 ? 'Yesterday' : `${days} days ago`;

  return (
    <div className="flex flex-col gap-2 text-black bg-slate-300 py-4 px-5 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex justify-start gap-2">
          <img
            src={`https://i.pravatar.cc/150?img=${picId}`}
            alt=""
            className="rounded-full w-6"
          />
          <p>{username}</p>
        </div>

        <DropdownMenu post={post} />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold ">{title}</h3>

        {image && (
          <div className="my-2">
            <img src={image} className="h-40 w-full object-cover rounded-lg" />
          </div>
        )}

        <p className="whitespace-pre-line">{description}</p>
      </div>
      <div className="flex flex-row-reverse  text-xs">
        Last Updated: {daysPassed}
      </div>
    </div>
  );
};

export default PostCard;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friends__item">
      <span
        className={`friends__status ${isOnline && 'friends__status--isonline'}`}
      ></span>
      <img
        className="friends__avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friends__name">{name}</p>
    </li>
  );
};
export default FriendListItem;

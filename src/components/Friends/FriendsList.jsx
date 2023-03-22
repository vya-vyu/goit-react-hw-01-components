import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './FriendsList.css';
const FriendsList = ({ friends }) => {
  return (
    <ul className="friends__list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
FriendsList.prototype = {
  friends: PropTypes.objectOf({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};
export default FriendsList;

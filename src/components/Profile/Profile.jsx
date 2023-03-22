import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="profile__description">
        <img src={avatar} alt="User avatar" className="profile__avatar" />
        <p className="profile__username">{username}</p>
        <p className="profile__tag">@{tag}</p>
        <p className="profile__location">{location}</p>
      </div>
      <ul className="profile__stats">
        <li>
          <span className="profile__label">Followers</span>
          <span className="profile__quantity">{followers}</span>
        </li>
        <li>
          <span className="profile__label">Views</span>
          <span className="profile__quantity">{views}</span>
        </li>
        <li>
          <span className="profile__label">Likes</span>
          <span className="profile__quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
export default Profile;

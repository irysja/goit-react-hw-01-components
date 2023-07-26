/*const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div key={Profile} className="profile">
      <div className="description">
        <img
          src={'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;*/

import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  const getRandomColor = () => {
    const randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`;
    return { backgroundColor: randomColor };
  };

  return (
    <div key={Profile} style={getRandomColor()} className="profile">
      <div className="description">
        <img
          src={'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'}
          alt="User avatar"
          style={getRandomColor()}
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity" style={getRandomColor()}>
            {followers}
          </span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity" style={getRandomColor()}>
            {views}
          </span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity" style={getRandomColor()}>
            {likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

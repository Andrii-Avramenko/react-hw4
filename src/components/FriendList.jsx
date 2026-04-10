import PropTypes from 'prop-types';
import css from './FriendList.module.css';

console.log(css);

export const FriendList = props => {
  return (
    <ul className={css.list}>
      {props.friends.map(friend => {
        return (
          <li className={css.item} key={friend.id}>
            <span className={css[!!friend.isOnline ? 'online' : 'offline']}>
              <svg height="24" width="24">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <img
              className="fl-avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="fl-name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

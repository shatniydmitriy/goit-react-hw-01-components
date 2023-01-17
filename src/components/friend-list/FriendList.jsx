import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import css from './Friend.module.css'

// export const FriendList = ({ friends }) => (
//   <ul className={css.friendList}>
//     {friends.map(friend => (
//       <FriendListItem
//         key={friend.id}
//         avatar={friend.avatar}
//         isOnline={friend.isOnline}
//         name={friend.name}
//       ></FriendListItem>
//     ))}
//   </ul>
// );

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
);


// const FriendList = ({ friends }) => {
//   return (
//     <ul className={css.friendList}>
//       {friends.map(({ id, avatar, name, isOnline }) => {
//         return (
//           <FriendListItem
//             key={id}
//             avatar={avatar}
//             name={name}
//             isOnline={isOnline}
//           />
//         );
//       })}
//     </ul>
//   );
// };
// export default FriendList;

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//     })
//   ).isRequired,
// };
import css from './UserCard.module.css';

const UserCard = ({ data }) => {
  return (
    <li className={css.userCardContainer}>
      <img
        className={css.userAvatar}
        src={
          data.gender == 'Male'
            ? 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg'
            : 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg'
        }
        alt="User image"
      />
      <h3>
        {data.first_name} {data.last_name}
      </h3>
      {data.isactive ? (
        <p style={{ color: 'green' }}>Online</p>
      ) : (
        <p style={{ color: 'red' }}>Offline</p>
      )}
      <button className={css.delBtn}>Delete user</button>
    </li>
  );
};

export default UserCard;

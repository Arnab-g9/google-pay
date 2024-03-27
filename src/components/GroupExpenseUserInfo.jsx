export default function GroupExpenseUserInfo({ user, onDeleteUser }) {
  return (
    <li className="user">
      <div className="user-details">
        <img src={user.imageURL} alt={user.id} />
        <p>{user.name}</p>
      </div>
      <div className="input-icon-container">
        <input type="text" />
        <i
          className="ri-delete-bin-6-line"
          onClick={() => onDeleteUser(user.id)}
        ></i>
      </div>
    </li>
  );
}

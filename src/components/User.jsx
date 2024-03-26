export default function User({ user, onCheckedUser }) {
  return (
    <li>
      <input
        type="checkbox"
        value={user.checked}
        onChange={() => onCheckedUser(user.id)}
      />
      <img src={user.imageURL} alt={user.name} width="48px" />
      <div className="user-info">
        <p>{user.name}</p>
        <p>
          {user.balance > 0
            ? `${user.name} owe you $${user.balance}`
            : `you owe ${user.name} $${user.balance * -1}`}
        </p>
      </div>
      <div className="icons-container">
        <i className="ri-add-line"></i>
        <i className="ri-edit-box-line"></i>
        <i className="ri-delete-bin-6-line"></i>
      </div>
    </li>
  );
}

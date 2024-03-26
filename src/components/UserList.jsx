import User from "./User";
export default function UserList({ users, onCheckedUser }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <User user={user} key={user.id} onCheckedUser={onCheckedUser} />
      ))}
    </ul>
  );
}

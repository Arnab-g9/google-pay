import GroupExpenseUserInfo from "./GroupExpenseUserInfo";
export default function GroupExpense({ selectedUsers, onDeleteUser }) {
  return (
    <ul className="users-list">
      {selectedUsers.map((user) => (
        <GroupExpenseUserInfo
          user={user}
          onDeleteUser={onDeleteUser}
          key={user.id}
        />
      ))}
    </ul>
  );
}

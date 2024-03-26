import GroupExpenseUserInfo from "./GroupExpenseUserInfo";
export default function GroupExpense({ selectedUsers }) {
  return (
    <ul className="users-list">
      {selectedUsers.map((user) => (
        <GroupExpenseUserInfo user={user} />
      ))}
    </ul>
  );
}

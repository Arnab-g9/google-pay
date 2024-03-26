import { useState } from "react";
import { useEffect } from "react";
import Logo from "./components/Logo";
import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";
import SplitExpenseFormContainer from "./components/SplitExpenseFormContainer";
import GroupExpense from "./components/GroupExpense";

const initialFriends = [
  {
    id: 118836,
    name: "Ram",
    imageURL: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
    checked: false,
  },
  {
    id: 933372,
    name: "Suresh",
    imageURL: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
    checked: false,
  },
  {
    id: 499476,
    name: "Hari",
    imageURL: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
    checked: false,
  },
  {
    id: 499477,
    name: "Ravi",
    imageURL: "https://i.pravatar.cc/48?u=499477",
    balance: 0,
    checked: false,
  },
];

export default function App() {
  const [users, setUsers] = useState(initialFriends);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [splitClick, setSplitClick] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showGroupSplitForm, setShowGroupSplitForm] = useState(false);
  const [mode, setMode] = useState(false);

  function handleSetUsers(newUser) {
    setUsers((users) => [...users, newUser]);
  }
  function handleSplitClick() {
    setSplitClick((splitClick) => !splitClick);
  }
  function handleGroupExpense() {
    setShowGroupSplitForm((showGroupSplitForm) =>
      selectedUsers.length > 1 ? !showGroupSplitForm : showGroupSplitForm
    );
  }
  function handleCheckedUser(id) {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, checked: !user.checked } : user
      )
    );
    // setSelectedUsers(users.filter((user) => user.checked));
  }
  useEffect(() => {
    setSelectedUsers(users.filter((user) => user.checked));
  }, [users]);
  return (
    <div className={splitClick ? `app2 ${mode ? "" : "dark"}` : `app`}>
      {!splitClick ? <Logo onSplitClick={handleSplitClick} /> : null}
      {splitClick && (
        <>
          <div className="left">
            <div className="icon-container">
              <i className="ri-arrow-left-line" onClick={handleSplitClick}></i>
            </div>
            <UserList users={users} onCheckedUser={handleCheckedUser} />
            {showAddForm && <AddUserForm onAddNewUser={handleSetUsers} />}
            <div className="btn">
              <button className="button" onClick={handleGroupExpense}>
                {showGroupSplitForm && selectedUsers.length > 1
                  ? "Close"
                  : "Group Expense"}
              </button>
              <button
                className="button"
                onClick={() => setShowAddForm((showAddForm) => !showAddForm)}
              >
                {showAddForm ? "Close" : "Add Friend"}
              </button>
            </div>
          </div>
          <div className="right">
            <div className="light-dark-mode">
              {mode ? (
                <i
                  className="ri-sun-line"
                  onClick={() => setMode((mode) => !mode)}
                ></i>
              ) : (
                <i
                  className="ri-moon-clear-line"
                  onClick={() => setMode((mode) => !mode)}
                ></i>
              )}
            </div>
            {showGroupSplitForm && selectedUsers.length > 1 && (
              <SplitExpenseFormContainer>
                <GroupExpense selectedUsers={selectedUsers} />
              </SplitExpenseFormContainer>
            )}
          </div>
        </>
      )}
    </div>
  );
}

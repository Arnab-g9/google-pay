import { useState } from "react";
import { useEffect } from "react";

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

function Logo({ onSplitClick }) {
  return (
    <div className="logo-container">
      <div className="logo" onClick={onSplitClick}>
        {initialFriends.map((friend) => (
          <LogoAvater friend={friend} key={friend.id} />
        ))}
      </div>
      <p>Split A Bill With Friend</p>
    </div>
  );
}
function LogoAvater({ friend }) {
  return <img src={friend.imageURL} alt={friend.name} />;
}

function UserList({ users, onCheckedUser }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <User user={user} key={user.id} onCheckedUser={onCheckedUser} />
      ))}
    </ul>
  );
}

function User({ user, onCheckedUser }) {
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

function AddUserForm({ onAddNewUser }) {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !imageURL) return;
    const id = crypto.randomUUID();
    const newUser = {
      name,
      imageURL: `${imageURL}?=${id}`,
      id,
      balance: 0,
      checked: false,
    };
    // console.log(newUser);
    onAddNewUser(newUser);
    setName("");
    setImageURL("https://i.pravatar.cc/48");
  }
  return (
    <div className="user-add-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">🤵Enter Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name here"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="image">📸Enter imageURL</label>
          <input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            id="image"
            placeholder="Enter image URL"
          />
        </div>
        <div className="btn">
          <button className="button">Add</button>
        </div>
      </form>
    </div>
  );
}

function SplitExpenseFormContainer({ children }) {
  return (
    <div className="split-expense-form-container">
      <div className="sections">
        <i className="ri-group-3-fill icon"></i>
        <p className="icon">123</p>
        <i className="ri-pie-chart-2-line icon"></i>
        <i className="ri-percent-line icon"></i>
      </div>
      <div className="what-for">
        <input type="text" placeholder="what's for ?" />
      </div>
      {children}
    </div>
  );
}

function GroupExpense({ selectedUsers }) {
  return (
    <ul className="users-list">
      {selectedUsers.map((user) => (
        <GroupExpenseUserInfo user={user} />
      ))}
    </ul>
  );
}

function GroupExpenseUserInfo({ user }) {
  return (
    <li className="user">
      <div className="user-details">
        <img src={user.imageURL} alt={user.id} />
        <p>{user.name}</p>
      </div>
      <div className="input-icon-container">
        <input type="text" />
        <i className="ri-delete-bin-6-line"></i>
      </div>
    </li>
  );
}

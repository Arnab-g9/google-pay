import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Hari Ram",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Krishna",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Jogonnath",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
  {
    id: 499476,
    name: "Jogonnath",
    image: "https://i.pravatar.cc/48?u=499477",
    balance: 0,
  },
];

export default function App() {
  const [splitClick, setSplitClick] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  function handleSplitClick() {
    setSplitClick((splitClick) => !splitClick);
  }
  return (
    <div className={splitClick ? `app2` : `app`}>
      {!splitClick ? <Logo onSplitClick={handleSplitClick} /> : null}
      {splitClick && (
        <>
          <div className="left">
            <div className="icon-container">
              <i class="ri-arrow-left-line" onClick={handleSplitClick}></i>
            </div>
            <UserList />
            {showAddForm && <AddUserForm />}
            <div className="button">
              <button
                onClick={() => setShowAddForm((showAddForm) => !showAddForm)}
              >
                {showAddForm ? "Close" : "Add"}
              </button>
            </div>
          </div>
          <div className="right"></div>
        </>
      )}
    </div>
  );
}

function Logo({ onSplitClick }) {
  return (
    <div className="logo" onClick={onSplitClick}>
      {initialFriends.map((friend) => (
        <LogoAvater friend={friend} />
      ))}
    </div>
  );
}
function LogoAvater({ friend }) {
  return <img src={friend.image} alt={friend.name} />;
}

function UserList() {
  return (
    <ul className="user-list">
      {initialFriends.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </ul>
  );
}

function User({ user }) {
  return (
    <li>
      <img src={user.image} alt={user.name} />
      <div className="user-info">
        <p>{user.name}</p>
        <p>
          {user.balance > 0
            ? `${user.name} owe you $ ${user.balance}`
            : `you owe ${user.name} $ ${user.balance * -1}`}
        </p>
      </div>
      <i class="ri-add-line"></i>
      <i class="ri-edit-box-line"></i>
      <i class="ri-delete-bin-6-line"></i>
    </li>
  );
}

function AddUserForm() {
  return (
    <div className="user-add-form">
      <form>
        <div>
          <label>Enter Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Enter imageURL</label>
          <input type="text" />
        </div>
        <div className="btn">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

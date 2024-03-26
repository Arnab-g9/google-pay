import { useState } from "react";
export default function AddUserForm({ onAddNewUser }) {
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

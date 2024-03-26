import LogoAvater from "./LogoAvater";
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
export default function Logo({ onSplitClick }) {
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

export default function LogoAvater({ friend }) {
  return <img src={friend.imageURL} alt={friend.name} />;
}

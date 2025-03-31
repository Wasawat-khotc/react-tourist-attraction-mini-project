export default function Tag({ name, onClick }) {
    return (
      <span className="tag" onClick={onClick}>
        {name}
      </span>
    );
  }

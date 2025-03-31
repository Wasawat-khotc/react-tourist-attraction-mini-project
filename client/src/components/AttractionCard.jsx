import Tag from './Tag';

export default function AttractionCard({ attraction, addCategoryToSearch }) {
  const truncateDescription = (text) => {
    return text.length > 100 ? `${text.substring(0, 100)}...` : text;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(attraction.url);
    alert('Copied to clipboard!');
  };

  return (
    <div className="attraction-card">
      <div className="card-image">
        <img src={attraction.photos[0]} alt={attraction.title} />
      </div>
      <div className="card-content">
        <h2>
          <a href={attraction.url} target="_blank" rel="noopener noreferrer">
            {attraction.title}
          </a>
        </h2>
        <p>{truncateDescription(attraction.description)}</p>
        <div className="tags">
          {attraction.tags.map((tag) => (
            <Tag
              key={tag}
              name={tag}
              onClick={() => addCategoryToSearch(tag)}
            />
          ))}
        </div>
        <div className="card-actions">
          <a
            href={attraction.url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            อ่านต่อ
          </a>
          <button onClick={copyToClipboard} className="copy-btn">
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}

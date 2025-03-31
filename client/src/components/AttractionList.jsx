import AttractionCard from './AttractionCard';

export default function AttractionList({ attractions = [], addCategoryToSearch }) {
  return (
    <div className="attraction-list">
      {attractions.length === 0 ? (
        <p>No attractions found. Try a different search term.</p>
      ) : (
        attractions.map((attraction) => (
          <AttractionCard
            key={attraction.eid}
            attraction={attraction}
            addCategoryToSearch={addCategoryToSearch}
          />
        ))
      )}
    </div>
  );
}


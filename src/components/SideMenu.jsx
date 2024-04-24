export default function SideMenu({
  onSortByArea,
  onSortByDistance,
  onSortByPopulation,
}) {
  return (
    <aside className="side-menu">
      <h2>Sort the Cities by:</h2>
      <div className="side-buttons">
        <div>
          <button onClick={onSortByPopulation}>Population</button>
        </div>
        <div>
          <button onClick={onSortByArea}>Surface</button>
        </div>
        <div>
          <button onClick={onSortByDistance}>Distance</button>
        </div>
      </div>
    </aside>
  );
}

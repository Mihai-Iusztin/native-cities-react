export default function SideMenu() {
  return (
    <aside className="side-menu">
      <h2>Sort the Cities by:</h2>
      <div className="side-buttons">
        <div>
          <button>Population</button>
        </div>
        <div>
          <button>Surface</button>
        </div>
        <div>
          <button>Distance</button>
        </div>
      </div>
    </aside>
  );
}

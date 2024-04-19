import SideMenu from './components/SideMenu';

function App() {
  return (
    <main className="main-page">
      <SideMenu />
      <div className="content-page">
        <header>
          <img src="timisoara-header.jpg" alt="Beautiful Timisoara!" />
          <h1>Amazing Cities</h1>
        </header>
      </div>
    </main>
  );
}

export default App;

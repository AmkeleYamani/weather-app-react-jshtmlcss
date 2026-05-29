import './App.css';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Weather />
      </div>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Weather App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

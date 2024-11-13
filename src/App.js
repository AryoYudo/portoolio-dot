import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx'; // Correctly import the Header component

function App() {
  return (
    <div className="App">
      <Header /> {/* Use Header without the "s" */}
    </div>
  );
}

export default App;

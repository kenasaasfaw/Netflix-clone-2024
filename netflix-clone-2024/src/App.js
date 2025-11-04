// App.js

// import logo from './logo.svg';
import './App.css';
// REMOVED: Header and Footer imports, as they are inside Home
// import Header from './Components/Header/Header' 
// import Footer from './Components/Footer/Footer';  
import Home from './Pages/Home/Home';

function App() {
  return (
    // FIX: Render the Home component to display all content
    <Home />
  );
}

export default App;
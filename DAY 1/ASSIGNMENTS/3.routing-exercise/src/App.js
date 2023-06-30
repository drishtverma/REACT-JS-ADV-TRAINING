import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;

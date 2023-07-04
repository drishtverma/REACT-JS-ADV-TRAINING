import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import Header from './components/Header';
import { ContextProvider } from './context/FriendsContex';
function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Router />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

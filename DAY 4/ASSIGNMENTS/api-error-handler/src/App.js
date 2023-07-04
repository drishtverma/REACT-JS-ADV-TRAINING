import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import HeaderComponent from './components/HeaderComponent';
import { ContextProvider } from './context/StudentContext';
function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <ContextProvider>
        <Router />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

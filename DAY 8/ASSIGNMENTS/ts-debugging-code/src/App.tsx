import './App.css';
import UserList from './components/UserList';
import { ContextProvider } from './context/UserContext';

function App() {
  return (
    <ContextProvider>
      <UserList />
    </ContextProvider>
  );
}

export default App;

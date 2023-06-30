import { createStore } from 'redux';
import './App.css';
import AddNote from './components/AddNote';
import HeaderComponent from './components/Header';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <HeaderComponent />
      <AddNote />
    </Provider>
  );
}

export default App;

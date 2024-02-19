import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopHeader from './components/TopHeader';
import HomePage from './components/user/HomePage';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

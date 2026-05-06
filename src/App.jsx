import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/nav-cp.jsx';
import InputLogin from './components/InputLogin-cp';


function App() {
  return (
    <div className="main-container">
      <header>
        <h1>Hirely!</h1>
        <h2>Help you match with job!</h2>
        <Navigation />
      </header>

      <main>
        <h3>This is main</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error voluptatibus doloribus sit in impedit maiores quod nostrum corrupti reprehenderit nobis expedita, beatae labore soluta ducimus, praesentium quidem blanditiis earum?</p>
        <Routes>
          <Route path='/login' element={<InputLogin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App

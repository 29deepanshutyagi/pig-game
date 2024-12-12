import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home'

function App() {
  
  return (
    <BrowserRouter >
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

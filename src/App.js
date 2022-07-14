import {useState } from 'react';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import './App.css';

function App() {
  const [page, setPage] = useState(1);
  if(page === 1) return <Page1 onChange={() => setPage(2)} />
  if(page === 2) return <Page2 onChange={() => setPage(3)} />
  if(page === 3) return <Page3 />
}

export default App;

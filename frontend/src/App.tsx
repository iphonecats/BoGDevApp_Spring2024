import MainTable from './components/MainTable';
import { Routes, Route } from 'react-router-dom';
import UserNotes from './components/UserNotes';
function App() {
  

  return (
    <Routes>
      <Route path='/' element={<MainTable isAdmin={false}/>}/>
      <Route path='/admin' element={<MainTable isAdmin={true}/>}/>
      <Route path='/notes/:id' element={<UserNotes/>}/>
    </Routes>
  );
}

export default App;

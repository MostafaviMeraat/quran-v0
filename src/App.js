import './App.css';
import SharedLayout from './components/SharedLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sura from './components/Sura';
import Juz from './components/Juz';
import Page from './components/Page';
import Setting from './components/Setting';
import Error from './components/Error';
import Favorite from './components/Favorite'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Sura />} />
          <Route path='juz' element={<Juz />} />
          <Route path='page' element={<Page />} />
          <Route path='favorite' element={<Favorite />} />
          <Route path='setting' element={<Setting />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;

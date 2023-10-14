import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
    </Layout>
  );
}

export default App;

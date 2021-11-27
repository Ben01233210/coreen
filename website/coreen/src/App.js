import { Route,Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';

import HomePage from './pages/Home';
import InfoPage from './pages/Info'
import ProductsPage from './pages/Products';
import SpendenKlimaPage from './pages/SpendenKlima';
import WarenkorbPage from './pages/Warenkorb';

;

function App() {
  return (
  <Layout>

  
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/info' element={<InfoPage />} />
      <Route path='/produkte' element={<ProductsPage />} />
      <Route path='/spendenKlima' element={<SpendenKlimaPage />} />
      <Route path='/warenkorb' element={<WarenkorbPage />} />
    </Routes>
    <button>Produkte</button>
  
  </Layout>
  );
}

export default App;

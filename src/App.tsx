import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SouEmpreendedorPage from './pages/SouEmpreendedorPage';
import BlogPage from './pages/BlogPage';
import  SouClientePage from './pages/SouClientePage';
import './index.css';
import Footer from './components/Footer';
import 'slick-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
   <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/empreendedores" element={<SouEmpreendedorPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/sou-cliente" element={<SouClientePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
     

export default App;

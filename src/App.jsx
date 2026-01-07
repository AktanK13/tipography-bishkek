import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import FloatingActionButton from "./components/FloatingActionButton";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import { routesData } from "./data/routesData";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProductDetail from "./pages/ProductDetail";

// Компонент для скролла при навигации
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // Если есть хэш, скроллим к элементу
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
    
    // Иначе скроллим вверх
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  
  return null;
}

function App() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Плавный скролл вверх при изменении маршрута
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div>
      <Navbar routesData={routesData} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home catalog={routesData} />} />
        <Route path="/portfolio" element={<Portfolio catalog={routesData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path=":id" element={<ProductDetail detail={routesData} />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;


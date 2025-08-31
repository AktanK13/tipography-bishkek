import { Routes, Route, Navigate, useLocation  } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/footer";
import FloatingActionButton from "./components/FloatingActionButton";
import { routesData } from "./data/routesData";

// Компонент для скролла вверх при навигации
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Принудительный скролл вверх при изменении маршрута
    window.scrollTo(0, 0);
    
    // Дополнительная проверка через небольшую задержку
    const timer = setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);
  
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


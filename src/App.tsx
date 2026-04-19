import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import NotFound from './pages/NotFound';

function getBasename() {
  if (window.location.hostname === 'zhoubin2588.github.io') {
    return '/juxin-portfolio';
  }
  return '';
}

export default function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <div className="flex min-h-screen flex-col bg-bg">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

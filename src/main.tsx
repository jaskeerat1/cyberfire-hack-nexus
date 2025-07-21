import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function RootWithAOS() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out-cubic',
      offset: 60,
    });
  }, []);
  return <App />;
}

createRoot(document.getElementById("root")!).render(<RootWithAOS />);

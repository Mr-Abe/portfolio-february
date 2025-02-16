import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AdminPanel from './components/admin/AdminPanel';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/" element={
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
                <Header />
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Blog />
                <Contact />
              </div>
            } />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
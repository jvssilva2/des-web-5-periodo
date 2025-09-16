import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import RelatedPosts from './components/RelatedPosts';
import { useState, useEffect } from 'react';

function App() {
  
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Botão para alternar o tema */}
      <button onClick={() => setDarkMode(!isDarkMode)} className="theme-toggle-button" title="Alternar tema">
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <Header />
      <main>
        <BlogPost />
        <RelatedPosts />
      </main>
      <Footer />
    </>
  );
}

export default App;
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Article from './components/Article';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';


function App() {

  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_GUARDIAN_API);
      setNews(res.data.response.results)
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(() => {
    getNews()
  }, []);


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage news={news} />} />
        <Route path='/article/:id' element={<Article news={news} />} />
        <Route path="*" element={<HomePage news={news} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

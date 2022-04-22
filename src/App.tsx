import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './routes/Home';
import { Main } from './routes/Main';
import { NotFound } from './routes/NotFound';
import { Profile } from './routes/Profile';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__content">
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

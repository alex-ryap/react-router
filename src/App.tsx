import { Header } from './components/Header/Header';
import { Home } from './routes/Home';
import { Main } from './routes/Main';
import { NotFound } from './routes/NotFound';
import { Profile } from './routes/Profile';
import './App.scss';
import { Route } from './components/Route/Route';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </div>
    </div>
  );
}

export default App;

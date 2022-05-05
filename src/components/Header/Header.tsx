import { Link } from '../Link/Link';
import './style.scss';

export const Header = () => {
  return (
    <header>
      <ul className="nav">
        <li className="nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/main">Main</Link>
        </li>
        <li className="nav__item">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </header>
  );
};

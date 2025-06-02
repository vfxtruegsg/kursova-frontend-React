import css from './Layout.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  const buildActiveLinkClass = ({ isActive }) => {
    return clsx(isActive ? css.activeLink : css.link);
  };

  return (
    <header className={css.header}>
      <div className={`${css.headerContainer} container`}>
        <h1 className={css.header}>
          <span style={{ display: 'flex', gap: '4px' }}>
            <span style={{ color: '#3470ff' }}>Store</span>
            <span>App</span>
          </span>
        </h1>
        <nav className={`${css.navContainer} container`}>
          <NavLink to="/" className={buildActiveLinkClass}>
            Assortment
          </NavLink>
          <NavLink to="/cart" className={buildActiveLinkClass}>
            My cart
          </NavLink>
          <NavLink to="/account" className={buildActiveLinkClass}>
            Account
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Layout;

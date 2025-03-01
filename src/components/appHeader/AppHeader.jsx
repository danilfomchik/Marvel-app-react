import {Link, NavLink} from 'react-router-dom';
import './appHeader.scss';

const setActiveClass = ({isActive}) => (isActive ? 'app__menu-item active-link' : 'app__menu-item');

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <NavLink end className={setActiveClass} to="/">
                    Characters
                </NavLink>
                /
                <NavLink className={setActiveClass} to="/comics">
                    Comics
                </NavLink>
            </nav>
        </header>
    );
};

export default AppHeader;

import {Link, NavLink, useLocation} from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
    const location = useLocation();

    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <NavLink
                    className={({isActive}) =>
                        isActive || location.pathname.startsWith('/characters')
                            ? 'app__menu-item active-link'
                            : 'app__menu-item'
                    }
                    to="/">
                    Characters
                </NavLink>
                /
                <NavLink
                    className={({isActive}) => (isActive ? 'app__menu-item active-link' : 'app__menu-item')}
                    to="/comics">
                    Comics
                </NavLink>
            </nav>
        </header>
    );
};

export default AppHeader;

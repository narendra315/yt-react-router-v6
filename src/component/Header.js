import { NavLink, Link } from 'react-router-dom';
import constant from '../constant';

function Header() {
    const { home, about, contact, login } = constant.component;
    return (
        <ul>
            <li><NavLink to={home.url} className={({ isActive }) => isActive ? 'red' : undefined} end>Home</NavLink></li>
            <li><NavLink to={about.url} className={({ isActive }) => isActive ? 'red' : undefined}>About</NavLink></li>
            <li><NavLink to={contact.url} className={({ isActive }) => isActive ? 'red' : undefined}>Contact</NavLink></li>
            <li><NavLink to={'/invalid-page'} className={({ isActive }) => isActive ? 'red' : undefined}>Invalid Page</NavLink></li>
            <li><NavLink to={login.url} className={({ isActive }) => isActive ? 'red' : undefined}>Login</NavLink></li>
        </ul>
    )
}

export default Header;
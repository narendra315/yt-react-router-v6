import { NavLink } from 'react-router-dom';
import constant from '../constant';

function Header() {
    const { home, dashboard, userList } = constant.component;
    return (
        <ul>
            <li><NavLink to={dashboard.url} className={({ isActive }) => isActive ? 'red' : undefined}>dashboard</NavLink></li>
            <li><NavLink to={userList.url} className={({ isActive }) => isActive ? 'red' : undefined}>user List</NavLink></li>
            <li><NavLink to={home.url} className={({ isActive }) => isActive ? 'red' : undefined}>logout</NavLink></li>
        </ul>
    )
}

export default Header;
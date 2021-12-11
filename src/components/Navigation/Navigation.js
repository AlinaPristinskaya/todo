import {NavLink} from 'react-router-dom'


const Navigation=()=>(
    <nav>
        <NavLink exact to="/"  className="nav-link"
        activeClassName="active">
            На главную
        </NavLink>


        <NavLink to="/persons" className="nav-link"
        activeClassName="active">
            Сотрудники
        </NavLink>

        <NavLink to="/tasks" className="nav-link"
        activeClassName="active">
            Задачи
        </NavLink>
    </nav>
);
export default Navigation;
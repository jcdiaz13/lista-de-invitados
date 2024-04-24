import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Read</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
        <li>
          <NavLink to="/delete">Delete</NavLink>
        </li>
      </ul>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

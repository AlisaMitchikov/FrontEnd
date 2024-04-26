import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/stats">Stats</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

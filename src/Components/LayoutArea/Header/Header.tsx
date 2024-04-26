import "./Header.css";
import pageNotFoundSource from "../../../Assets/Images/logo.png"

export function Header(): JSX.Element {
    return (
        <div className="Header">
			<img src={pageNotFoundSource}/>
        </div>
    );
}

import "./PageNotFound.css";
import pageNotFoundSource from "../../../Assets/Images/page_not_found.png"

export function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<p>The page you are looking for doesn't exist.</p>
            <img src={pageNotFoundSource}/>
        </div>
    );
}

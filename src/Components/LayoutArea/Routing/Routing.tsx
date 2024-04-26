import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { About } from "../../AboutArea/About/About";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			
            {/* collection of routes */}
            <Routes>

            {/* Home route */}
            <Route path="/home" element={<Home/>}/>

            {/* Login route */}
            <Route path="/login" element={<Home/>}/>

            {/* Stats route */}
            <Route path="/stats" element={<Home/>}/>            

            {/* About route */}
            <Route path="/about" element={<About/>}/>            

            {/* default route */}
            <Route path="/" element={<Navigate to="/home"/>}/>

            {/* page not found route */}
            <Route path="*" element={<PageNotFound/>}/>            

            </Routes>
            
        </div>
    );
}

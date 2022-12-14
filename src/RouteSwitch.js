import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Profile from "./Profile";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<App />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <h2>I am root</h2>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
    return (
        <div>
            <h2>I am root</h2>
            <NavBar />
            {Outlet}
        </div>
    );
};

export default Root;
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip as ReactTooltip } from 'react-tooltip'

const NavBar = () => {

    const btnStyle = "flex btn btn-outline items-center p-4";
    const { user, logOut, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const links =
        <>
            <li><NavLink className={btnStyle} to={'/'}>Home</NavLink></li>
            <li><NavLink className={btnStyle} to={"/allCraft"}>All Craft</NavLink></li>
            <li><NavLink className={btnStyle} to={'/addCraft'}>Add Craft</NavLink></li>
            <li><NavLink className={btnStyle} to={'/myCraft'}>My Art&Craft</NavLink></li>

        </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/");
                setUser(null);
            })
            .catch();
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl md:text-2xl lg:text-4xl text-my-black"><span className="text-my-green">Himu</span> Art Gallery</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {
                !user ?
                    <>
                        <div className="navbar-end">
                            <Link to={'/login'}><button className="btn btn-outline btn-primary">LogIn</button></Link>
                            <Link to={'/registration'}><button className="btn btn-outline btn-primary">Register</button></Link>
                        </div>
                    </> :
                    // after login 
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div data-tooltip-id="my-tooltip-1" className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                <li><button onClick={handleLogOut} className="btn btn-error">Logout</button></li>
                            </ul>
                        </div>
                        <ReactTooltip
                            id="my-tooltip-1"
                            place="bottom"
                            effect="solid"
                            delayShow={300}
                        >
                            {user.displayName}
                        </ReactTooltip>
                    </div>

            }
            {/* <div className="navbar-end">
                <Link to={'/login'}><button className="btn btn-outline btn-primary">LogIn</button></Link>
                <Link to={'/registration'}><button className="btn btn-outline btn-primary">Register</button></Link>
            </div> */}
        </div>
    );
};

export default NavBar;
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const btnStyle = "flex btn btn-outline items-center p-4";

    const links =
        <>
            <li><NavLink className={btnStyle} to={'/'}>Home</NavLink></li>
            <li><NavLink className={btnStyle} to={"/allCraft"}>All Craft</NavLink></li>
            <li><NavLink className={btnStyle} to={'/addCraft'}>Add Craft</NavLink></li>
            <li><NavLink className={btnStyle} to={'/myCraft'}>My Art&Craft</NavLink></li>

        </>

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
            <div className="navbar-end">
                <Link to={'/login'}><button className="btn btn-outline btn-primary">LogIn</button></Link>
                <Link to={'/registration'}><button className="btn btn-outline btn-primary">Register</button></Link>
            </div>
        </div>
    );
};

export default NavBar;
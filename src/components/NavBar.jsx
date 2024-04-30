import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip as ReactTooltip } from 'react-tooltip'

const NavBar = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const btnStyle = "flex btn btn-outline items-center p-4";
    const { user, logOut, setUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleThemeToggle = e => {
        // console.log(e.target.checked);
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme('light');
        }
    }

    const themControl = <>
        <label onChange={handleThemeToggle} className="cursor-pointer grid place-items-center">
            <input type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
    </>

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
        <div className="navbar bg-base-100 mb-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className={`btn btn-ghost text-xl md:text-2xl lg:text-4xl ${theme === 'light' ? 'text-black' : 'dark:text-white'}`}><span className="text-my-green">Himu</span> Art Gallery</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {
                !user ?
                    <>
                        <div className="navbar-end ">
                            {themControl}
                            <div>
                                <Link to={'/login'}><button className="btn btn-outline btn-primary">LogIn</button></Link>
                                <Link to={'/registration'}><button className="btn btn-outline btn-primary">Register</button></Link>
                            </div>
                        </div>
                    </> :
                    // after login 
                    <div className="navbar-end">
                        {themControl}
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
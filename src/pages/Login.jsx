import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const [visible, setVisible] = useState(false);
    const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const handleToggle = () => {
        setVisible(!visible);
    }

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        setLoginError("");
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                toast.success("You have logged in successfully")
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setLoginError("Enter your email and password correctly")
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                const loggedUser = result.user;
                const { displayName, email, photoURL } = loggedUser;
                // console.log(loggedUser);
                const updateUserData = { displayName, email, photoURL }


                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updateUserData)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setUser(result.user)
                        if (data.insertedId) {
                            toast.success("You have logged in successfully")
                            navigate('/');
                        }
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=" mb-12">
                <div className="w-3/4 mx-auto">
                    {/* email */}
                    <label className="form-control w-3/4 mx-auto">
                        <div className="label">
                            <span className="text-base font-medium text-primary">Enter your Email <span className="text-red-600 font-bold text-xl">*</span></span>
                        </div>
                        <input type="email"  {...register("email", { required: true })} placeholder="Type here" className="input input-bordered input-primary w-full" />
                    </label>
                    {errors.email && <span className="text-sm text-red-500 font-bold">This field is required</span>}


                    {/* Password */}
                    <label className="form-control w-3/4 mx-auto">
                        <div className="label">
                            <span className="text-base font-medium text-primary">Enter Password <span className="text-red-600 font-bold text-xl">*</span></span>
                        </div>
                        <div className="relative">
                            <input type=
                                {visible ? 'text' : 'password'}
                                {...register("password", { required: true })}
                                placeholder="Type here" className="input input-bordered input-secondary w-full" />
                            {
                                visible ? <GrFormView onClick={handleToggle} className="text-2xl absolute inset-y-0 right-0 m-auto mr-3 cursor-pointer" /> : <GrFormViewHide onClick={handleToggle} className="text-2xl absolute inset-y-0 right-0 m-auto mr-3 cursor-pointer" />
                            }
                        </div>
                    </label>
                    {errors.pasword && <span className="text-sm text-red-500 font-bold">This field is required</span>}

                    <div className=" w-3/4 mx-auto">
                        <input type="submit" value="Login" className="btn btn-outline btn-primary  w-full mt-4" />
                    </div>
                    {
                        loginError &&
                        <div className="w-3/4 mx-auto mt-4">
                            <p className="text-sm text-red-500 font-bold">{loginError}</p>
                        </div>
                    }
                </div>
            </form>
            <div className=" w-3/4 mx-auto flex justify-between mt-4 gap-4">
                <button onClick={handleGoogleLogin} className="btn btn-primary w-1/3">Google</button>
                <button className="btn btn-secondary w-1/3">GitHub</button>
            </div>
            <div className="w-2/4 mx-auto mb-12">
                <p className="">Do not have an account? <Link to={'/registration'} className="btn btn-link">Register</Link> here</p>
            </div>
        </div>
    );
};

export default Login;
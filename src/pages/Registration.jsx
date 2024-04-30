import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";




const Registration = () => {
    const [visible, setVisible] = useState(false);
    const [passError, setPassError] = useState("");
    const [registerError, setRegisterError] = useState('');

    const { createUser } = useContext(AuthContext);
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
        const { email, password, photo, name } = data;
        console.log(email, password, name, photo);
        setPassError("");
        setRegisterError("");

        if (password.length < 6) {
            setPassError("Password must be 6 character or longer")
            return;
        }
        if (/^(?=.*[A-Z]).+$/.test.password) {
            setPassError("Password must contain one Uppercase letter");
            return;
        }
        if (/^(?=.*[a-z]).+$/.test.password) {
            setPassError("Password must contain one LowerCase letter");
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log(result);
                toast("you have register successfully!!!")
                navigate("/login")
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
            })
            .catch(error => {
                console.log(error);
                setRegisterError('Email already in use');
            })


    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="w-3/4 mx-auto">

                    {/* name */}
                    <label className="form-control w-3/4 mx-auto">
                        <div className="label">
                            <span className="text-base font-medium text-primary">Enter your name</span>
                        </div>
                        <input type="text" {...register("name")} placeholder="Type here" className="input input-bordered input-primary w-full" />
                    </label>
                    {errors.name && <span className="text-sm text-red-500 font-bold">This field is required</span>}

                    {/* email */}
                    <label className="form-control w-3/4 mx-auto">
                        <div className="label">
                            <span className="text-base font-medium text-secondary">Enter your Email <span className="text-red-600 font-bold text-xl">*</span></span>
                        </div>
                        <input type="email"  {...register("email", { required: true })} placeholder="Type here" className="input input-bordered input-secondary w-full" />
                    </label>
                    {errors.email && <span className="text-sm text-red-500 font-bold">This field is required</span>}

                    {/* photoUrl */}
                    <label className="form-control w-3/4 mx-auto">
                        <div className="label">
                            <span className="text-base font-medium text-primary">Enter your profile picture link</span>
                        </div>
                        <input type="text" {...register("photo")} placeholder="Type here" className="input input-bordered input-primary w-full" />
                    </label>
                    {errors.photo && <span className="text-sm text-red-500 font-bold">This field is required</span>}

                    {/* Password */}
                    <label className="form-control w-3/4 mx-auto">
                        <div className="label">
                            <span className="text-base font-medium text-secondary">Enter Password <span className="text-red-600 font-bold text-xl">*</span></span>
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
                    {errors.password && <span className="text-sm text-red-500 font-bold">This field is required</span>}
                    {
                        passError &&
                        <div className="w-3/4 mx-auto">

                            <h2 className="text-sm text-red-500 font-bold">{passError}</h2>
                        </div>
                    }
                    <div className=" w-3/4 mx-auto">
                        <input type="submit" value="Register" className="btn btn-outline btn-primary  w-full mt-4" />
                    </div>
                </div>
            </form>
            {
                registerError && <div className="w-3/4 mx-auto">

                    <h2 className="text-sm text-red-500 font-bold">{registerError}</h2>
                </div>
            }
            <div className="w-2/4 mx-auto mb-12">
                <p className="">Already have an account? <Link to={'/login'} className="btn btn-link">Login</Link> here</p>
            </div>
        </div>
    );
};

export default Registration;
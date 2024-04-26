import { useState } from "react";
import { useForm } from "react-hook-form";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { Link } from "react-router-dom";

const Login = () => {
    const [visible, setVisible] = useState(false);

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
        console.log(data);
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
                    <div className=" w-3/4 mx-auto flex justify-between mt-4 gap-4">
                        <button className="btn btn-primary w-1/3">Google</button>
                        <button className="btn btn-secondary w-1/3">GitHub</button>
                    </div>
                </div>
            </form>
            <div className="w-2/4 mx-auto mb-12">
                <p className="">Do not have an account? <Link to={'/registration'} className="btn btn-link">Register</Link> here</p>
            </div>
        </div>
    );
};

export default Login;
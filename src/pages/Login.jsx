import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const [visible, setVisible] = useState(false);
    const [passError, setPassError] = useState("");


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
                            <span className="text-base font-medium text-secondary">Enter your Email <span className="text-red-600 font-bold text-xl">*</span></span>
                        </div>
                        <input type="email"  {...register("email", { required: true })} placeholder="Type here" className="input input-bordered input-secondary w-full" />
                    </label>

                    {/* Password */}
                    <label className="form-control w-3/4 mx-auto">
                        <div className="label">
                            <span className="text-base font-medium text-secondary">Enter Password <span className="text-red-600 font-bold text-xl">*</span></span>
                        </div>
                        <input type="text" {...register("password", { required: true })} placeholder="Type here" className="input input-bordered input-secondary w-full" />
                    </label>
                    <div className=" w-3/4 mx-auto">
                        <input type="submit" value="Register" className="btn btn-outline btn-secondary  w-full mt-4" />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default Login;
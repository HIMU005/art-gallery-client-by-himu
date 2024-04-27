import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const AddCraft = () => {
    const { user } = useContext(AuthContext);
    const [isOpen1, setIsOpen1] = useState(false);
    const handleDropdownToggle1 = () => {
        setIsOpen1(!isOpen1);
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const email = user.email;

        const addCartDetails = {
            email, image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus
        };

        fetch('http://localhost:5000/crafts', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addCartDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast("craft updated successfully");
                    form.reset();
                }
            })



    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">


                    {/* 1 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-primary">Enter image link</span>
                        </div>
                        <input type="text" name="image" placeholder="Type here" required className="input input-bordered input-primary w-full " />
                    </label>

                    {/* 2 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-secondary">Enter item_name</span>
                        </div>
                        <input type="text" name="item_name" placeholder="Type here" required className="input input-bordered input-secondary w-full " />
                    </label>

                    {/* 3 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-accent">Enter subcategory_Name</span>
                        </div>
                        <input type="text" name="subcategory_Name" placeholder="Type here" required className="input input-bordered input-accent w-full " />
                    </label>

                    {/* 4 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-primary">Enter short description</span>
                        </div>
                        <input type="text" name="short_description" placeholder="Type here" required className="input input-bordered input-primary w-full " />
                    </label>

                    {/* 5 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-secondary">What is the price</span>
                        </div>
                        <input type="text" name="price" placeholder="Type here" required className="input input-bordered input-secondary w-full " />
                    </label>

                    {/* 6 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-accent">Enter a rating</span>
                        </div>
                        <input type="text" name="rating" placeholder="Type here" required className="input input-bordered input-accent w-full " />
                    </label>

                    {/* 7 */}
                    <label className="form-control w-full relative">
                        <div className="label">
                            <span className="label-text text-base font-medium text-primary">Is it customizable</span>
                        </div>
                        <div className="relative inline-block w-full">
                            <select
                                name="customization"
                                id="customization"
                                required
                                className="input input-bordered input-primary w-full appearance-none"
                                onClick={handleDropdownToggle1}
                            >
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className={`w-4 h-4 transform ${isOpen1 ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </label>

                    {/* 8 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-secondary">what is the processing_time</span>
                        </div>
                        <input type="text" name="processing_time" placeholder="Type here" required className="input input-bordered input-secondary w-full " />
                    </label>

                    {/* 9 */}
                    <label className="form-control w-full relative">
                        <div className="label">
                            <span className="label-text text-base font-medium text-primary">stockStatus</span>
                        </div>
                        <div className="relative inline-block w-full">
                            <select
                                name="stockStatus"
                                id="stockStatus"
                                required
                                className="input input-bordered input-primary w-full appearance-none"
                                onClick={handleDropdownToggle}
                            >
                                <option value="">Select an option</option>
                                <option value="inStock">In Stock</option>
                                <option value="madeToOrder">Made to Order</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className={`w-4 h-4 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </label>

                </div>
                <input className="btn btn-success btn-outline w-full mt-3" type="submit" value="Add" />
            </form >
        </div >
    );
};

export default AddCraft;

const AddCraft = () => {

    const handleSubmit = (e) => {
        e.target.preventDefault();

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
                        <input type="text" name="image" placeholder="Type here" className="input input-bordered input-primary w-full " />
                    </label>

                    {/* 2 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-secondary">Enter item_name</span>
                        </div>
                        <input type="text" name="item_name" placeholder="Type here" className="input input-bordered input-secondary w-full " />
                    </label>

                    {/* 3 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-accent">Enter subcategory_Name</span>
                        </div>
                        <input type="text" name="subcategory_Name" placeholder="Type here" className="input input-bordered input-accent w-full " />
                    </label>

                    {/* 4 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-primary">Enter short description</span>
                        </div>
                        <input type="text" name="short_description" placeholder="Type here" className="input input-bordered input-primary w-full " />
                    </label>

                    {/* 5 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-secondary">What is the price</span>
                        </div>
                        <input type="text" name="price" placeholder="Type here" className="input input-bordered input-secondary w-full " />
                    </label>

                    {/* 6 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-accent">Enter a rating</span>
                        </div>
                        <input type="text" name="rating" placeholder="Type here" className="input input-bordered input-accent w-full " />
                    </label>

                    {/* 7 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-primary">Is it customizable</span>
                        </div>
                        <input type="text" name="customization" placeholder="yes or no" className="input input-bordered input-primary w-full " />
                    </label>

                    {/* 8 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-secondary">what is the processing_time</span>
                        </div>
                        <input type="text" name="processing_time" placeholder="Type here" className="input input-bordered input-secondary w-full " />
                    </label>

                    {/* 9 */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-base font-medium text-accent">What is your stockStatus</span>
                        </div>
                        <input type="text" name="stockStatus" placeholder="Type here" className="input input-bordered input-accent w-full " />
                    </label>

                </div>
                <input className="btn btn-success btn-outline w-full mt-3" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddCraft;
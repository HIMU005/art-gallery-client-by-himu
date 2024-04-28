import { useEffect, useState } from "react";

const CardItem = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/category")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    // console.log(category);
    return (
        <div>
            <h3 className="text-3xl md:text-4xl lg:text-6xl text-center font-bold my-8 ">Categories</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto ">
                {
                    category.map(singleCategory =>
                        <div key={singleCategory._id} className="bg-amber-400 text-white text-4xl font-bold text-center rounded-2xl py-20">
                            <div>
                                <h2 className="">{singleCategory.name}</h2>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default CardItem;
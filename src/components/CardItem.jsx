import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardItem = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch("https://authentication-and-simple-database-server.vercel.app/category")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <h3 className="text-3xl md:text-4xl lg:text-6xl text-center font-bold my-8 text-[#131313]">Categories</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto ">
                {
                    category.map(singleCategory =>
                        <div key={singleCategory._id} className=" flex flex-col justify-between p-4">
                            <figure className="flex items-center justify-center my-4">
                                <img className="h-52" src={singleCategory.image} alt="" />
                            </figure>
                            <figcaption className="text-xl font-medium">{singleCategory.name}</figcaption>
                            <p className="text-lg my-3 ">{singleCategory.des}</p>
                            <Link to={`/craft/cat/${singleCategory.cat}`} className="btn btn-info btn-outline">
                                <button>View details</button>
                            </Link>
                        </div>


                    )
                }
            </div>
        </div>
    );
};

export default CardItem;
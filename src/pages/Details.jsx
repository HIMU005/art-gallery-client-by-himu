import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const Details = () => {

    const loadedSingle = useLoaderData();
    const {
        image,
        customization,
        item_name,
        processing_time,
        rating,
        short_description,
        stockStatus,
        subcategory_Name,
    } = loadedSingle;

    return (
        <div>
            <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">

                <div>
                    <figure>
                        <img src={image} alt={subcategory_Name} className="object-cover w-full mb-4 h-auto sm:h-96 dark:bg-gray-500" />
                    </figure>
                    <figcaption>{item_name}</figcaption>
                    <h2 className="mb-1 text-xl font-semibold">{subcategory_Name}</h2>
                    <p className="text-sm dark:text-gray-600">{short_description}</p>
                    <div className='flex gap-10'>
                        <h2 className='flex gap-3 items-center'><FaStar className='text-amber-400 font-extrabold fill-amber-500 ' />
                            {rating}</h2>
                        <h2 className='flex gap-2 items-center'><IoMdTime className='text-sky-500' />
                            {processing_time}</h2>
                    </div>
                    <div className="flex gap-10">
                        <p>Customization status: {customization}</p>
                        <p>Stock status: {stockStatus}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;
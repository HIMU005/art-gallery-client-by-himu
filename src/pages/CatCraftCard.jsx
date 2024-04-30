import { Link, useLoaderData } from "react-router-dom";

const CatCraftCard = () => {
    const catCardData = useLoaderData();

    // const {
    //     _id,
    //     // email,
    //     image,
    //     // customization,
    //     item_name,
    //     // processing_time,
    //     // rating,
    //     // short_description,
    //     stockStatus,
    //     subcategory_Name,
    // } = catCardData;

    console.log(catCardData);
    if (catCardData.length === 0)
        return (
            <div>
                <h2 className="text-xl font-bold text-center">No card available for this category</h2>
            </div>
        )

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                catCardData.map(singleCatCardData => <div key={singleCatCardData._id} className="card card-compact h-auto bg-base-100 shadow-xl flex flex-col">
                    <figure>
                        <img className='h-48' src={singleCatCardData.image} alt={singleCatCardData.subcategory_Name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{singleCatCardData.item_name}!</h2>
                        <p>{singleCatCardData.stockStatus}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/myCraft/details/${singleCatCardData._id}`} className="btn btn-info">View details</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CatCraftCard;
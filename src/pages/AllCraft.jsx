import { useLoaderData } from "react-router-dom";
import SingleCard from "../components/SingleCard";

const AllCraft = () => {
    const allCraftData = useLoaderData();
    return (
        <div className="px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
                {
                    allCraftData.map(singleData => <SingleCard key={singleData._id} details={singleData}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default AllCraft;
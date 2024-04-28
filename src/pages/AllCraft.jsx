import { useLoaderData } from "react-router-dom";
import SingleCard from "../components/SingleCard";

const AllCraft = () => {
    const allCraftData = useLoaderData();
    return (
        <div className="px-4">
            <h1>I am all craft</h1>
            <h2 className="text-4xl text-center ">I have total {allCraftData.length} data in the database</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allCraftData.map(singleData => <SingleCard key={singleData._id} details={singleData}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default AllCraft;
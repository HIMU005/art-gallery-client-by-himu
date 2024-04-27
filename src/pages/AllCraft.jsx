import { useLoaderData } from "react-router-dom";

const AllCraft = () => {
    const allCraftData = useLoaderData();
    // console.log(allCraftData);
    return (
        <div>
            <h1>I am all craft</h1>
            <h2 className="text-4xl text-center ">I have total {allCraftData.length} data in the database</h2>

        </div>
    );
};

export default AllCraft;
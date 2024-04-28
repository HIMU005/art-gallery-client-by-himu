import { useLoaderData } from "react-router-dom";

const CatCraftCard = () => {
    const catCardData = useLoaderData();
    console.log(catCardData);
    return (
        <div>

        </div>
    );
};

export default CatCraftCard;
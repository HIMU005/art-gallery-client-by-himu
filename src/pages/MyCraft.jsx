import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyCraftCard from "../components/MyCraftCard";

const MyCraft = () => {
    const { user } = useContext(AuthContext);
    const [myUploadedData, setMyUploadedDAta] = useState([]);
    console.log(user.email);
    useEffect(() => {
        fetch(`http://localhost:5000/crafts/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyUploadedDAta(data);
            })
    }, [user])
    return (
        <div>


            <div className="grid grid-cols-1 lg:grid-cols-2">
                {
                    myUploadedData.map(myUploadedSingleData => <MyCraftCard key={myUploadedSingleData._id} cardData={myUploadedSingleData}></MyCraftCard>)
                }
            </div>

        </div>
    );
};

export default MyCraft;
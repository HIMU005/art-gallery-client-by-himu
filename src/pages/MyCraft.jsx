import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyCraftCard from "../components/MyCraftCard";

const MyCraft = () => {
    const { user } = useContext(AuthContext);
    const [myUploadedData, setMyUploadedDAta] = useState([]);
    // console.log(user.email);
    useEffect(() => {
        fetch(`https://authentication-and-simple-database-server.vercel.app/crafts/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyUploadedDAta(data);
            })
    }, [user, myUploadedData])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-4">
                {
                    myUploadedData.map(myUploadedSingleData => <MyCraftCard key={myUploadedSingleData._id} cardData={myUploadedSingleData}></MyCraftCard>)
                }
            </div>

        </div>
    );
};

export default MyCraft;
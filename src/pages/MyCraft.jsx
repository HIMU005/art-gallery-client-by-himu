import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

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
            <h2>I am my craft</h2>
            <h2>I have uploaded {myUploadedData.length} items</h2>
        </div>
    );
};

export default MyCraft;
import PropTypes from 'prop-types';
import { CiEdit } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCraftCard = ({ cardData }) => {
    // console.log(cardData);
    const {
        _id,
        // email,
        image,
        customization,
        item_name,
        processing_time,
        rating,
        short_description,
        stockStatus,
        subcategory_Name,
    } = cardData;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://authentication-and-simple-database-server.vercel.app/crafts-info/${_id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })

                }
            });

    }
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">

                <div className="space-y-4 flex flex-col justify-between h-[810px]">
                    <div className="space-y-1">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-lg">
                            <span>{item_name}</span>
                        </div>
                    </div>
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-3xl font-semibold dark:text-violet-600">{subcategory_Name}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600">{short_description}.</p>
                    <p>Stock status: {stockStatus}</p>
                    <div className='flex gap-2 justify-between'>
                        <h2 className='flex gap-3 items-center'><FaStar className='text-amber-400 font-extrabold fill-amber-500 ' />
                            {rating}</h2>
                        <h2 className='flex gap-2 items-center'><IoMdTime className='text-sky-500' />
                            {processing_time}</h2>
                    </div>
                    <p>Customization: {customization}</p>
                    <div className='text-5xl flex gap-5'>
                        <button onClick={() => handleDelete(_id)} className='btn text-5xl btn-error btn-outline'>
                            <MdDeleteForever className='text-red-600 cursor-pointer ' />
                        </button>
                        <Link to={`/update/${_id}`} className='btn text-5xl btn-info btn-outline'>
                            <CiEdit className='text-primary cursor-pointer ' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraftCard;

MyCraftCard.propTypes = {
    cardData: PropTypes.object,
}
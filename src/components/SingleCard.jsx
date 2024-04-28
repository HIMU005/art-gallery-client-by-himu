import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCard = ({ details }) => {
    const {
        _id,
        // email,
        image,
        // customization,
        item_name,
        // processing_time,
        // rating,
        // short_description,
        stockStatus,
        subcategory_Name,
    } = details;
    return (
        <div>
            <div className="card card-compact h-auto bg-base-100 shadow-xl flex flex-col">
                <figure>
                    <img className='h-48' src={image} alt={subcategory_Name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item_name}!</h2>
                    <p>{stockStatus}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/myCraft/details/${_id}`} className="btn btn-info">View details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;
SingleCard.propTypes = {
    details: PropTypes.object,
}
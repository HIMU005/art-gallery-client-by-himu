import PropTypes from 'prop-types';

const Slider = ({ bannerSingleData }) => {
    const {
        image,
        item_name,
        short_description,
        stockStatus,
        subcategory_Name,
    } = bannerSingleData;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl py-24 w-11/12 mx-auto gap-7">
                <figure className='w-1/2 h-96'>
                    <img src={image} alt="Movie" /></figure>
                <div className="flex flex-col gap-4">
                    <h2 className="card-title">{item_name}</h2>
                    <h2 className="card-title">{subcategory_Name}</h2>
                    <p>{short_description.slice(0, 150)}</p>
                    <p>Stock: {stockStatus}</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;
Slider.propTypes = {
    bannerSingleData: PropTypes.object,
}
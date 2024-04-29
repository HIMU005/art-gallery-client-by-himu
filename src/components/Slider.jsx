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
        <div className=''>
            <div className="card card-side  shadow-xl py-12 w-11/12 mx-auto gap-7 ">
                <figure className='w-1/2 h-96'>
                    <img src={image} alt="Movie" /></figure>
                <div className="flex flex-col gap-4 bg-sky-300 grow pl-4 rounded-lg pt-8 text-[#131313]">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{item_name}</h2>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{subcategory_Name}</h2>
                    <p className='text-lg font-medium'>{short_description.slice(0, 150)}</p>
                    <p className='text-lg font-medium'>Stock: {stockStatus}</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;
Slider.propTypes = {
    bannerSingleData: PropTypes.object,
}
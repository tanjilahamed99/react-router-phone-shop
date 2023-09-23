import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayFavorite = ({ phone }) => {
    const { brand_name, image, phone_name} = phone
    return (
        <div className="my-10">
            <div className="w-[60%] mx-auto flex justify-center items-center card-compact shadow-xl p-5 rounded-md">
                <img className='w-[400px] h-[400px]  ' src={image} alt="Shoes" />
                <div className="space-y-5">
                    <h2 className="text-pink-500 font-bold ">{brand_name}</h2>
                    <p className="font-bold text-xl">{phone_name}</p>
                   <Link><button className="btn bg-green-200 text-pink-500 mt-3">add to favorite</button></Link>
                </div>
            </div>
        </div>
    );
};

DisplayFavorite.propTypes = {
    phone: PropTypes.object
};

export default DisplayFavorite;
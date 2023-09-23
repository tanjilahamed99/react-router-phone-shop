import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayPhone = ({ phone }) => {
    const {id, image, phone_name, brand_name, price, rating } = phone
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl p-5 rounded-md">
                <div className='border p-4 rounded-lg mb-3'>
                    <img className='w-[250px] h-[200px] mx-auto ' src={image} alt="Shoes" />
                </div>
                <div className="y">
                    <h2>{rating}</h2>
                    <h2 className="bg-green-400 w-full">{brand_name}</h2>
                    <div className='flex items-center justify-between font-semibold mb-7'>
                        <p>{phone_name}</p>
                        <p>{price}</p>
                    </div>
                       <Link to={`/detail/${id}`}> <button className="btn  bg-base-200 text-black border-none w-full">see details</button></Link>
                </div>
            </div>
        </div>
    );
};

DisplayPhone.propTypes = {
    phone: PropTypes.object
};

export default DisplayPhone;
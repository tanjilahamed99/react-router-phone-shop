import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocalStorage } from "../../../utilites/SavetoLocalstorage";

const Detail = () => {
    const { id } = useParams()
    const phonesData = useLoaderData();
    const findPhone = phonesData.find((phone) => phone.id === id)
    const { brand_name, image, phone_name } = findPhone;

    const notify = () => toast("Successfully Added");

    return (
        <div className="my-10">
            <div className="w-[60%] mx-auto flex justify-center items-center card-compact shadow-xl p-5 rounded-md">
                <img className='w-[400px] h-[400px]  ' src={image} alt="Shoes" />
                <div className="space-y-5">
                    <h2 className="text-pink-500 font-bold ">{brand_name}</h2>
                    <p className="font-bold text-xl">{phone_name}</p>
                   <Link onClick={()=>saveLocalStorage(id)}><button onClick={notify} className="btn bg-green-200 text-pink-500 mt-3">add to favorite</button></Link>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Detail;
import { useLoaderData, useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams()
    const phonesData = useLoaderData();
    const findPhone = phonesData.find((phone) => phone.id === id)
    const { brand_name, image, phone_name } = findPhone;
    return (
        <div className="my-10">
            <div className="w-[60%] mx-auto flex justify-center items-center card-compact shadow-xl p-5 rounded-md">
                <img className='w-[400px] h-[400px]  ' src={image} alt="Shoes" />
                <div className="space-y-3">
                    <h2 className="text-pink-500 font-bold">{brand_name}</h2>
                    <p className="font-bold text-xl">{phone_name}</p>
                    <button className="btn bg-green-200 text-pink-500">add to favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
import { useEffect, useState } from "react";
import { getInfo } from "../../utilites/SavetoLocalstorage";
import { useLoaderData } from "react-router-dom";
import DisplayFavorite from "./DisplayFavorite";

const Favorite = () => {
    const [phones, setPhones] = useState([])
    const phonesData = useLoaderData();
    useEffect(() => {
        const id = getInfo();
        if (phonesData.length > 0) {
            const filterPhones = phonesData.filter((phone) => id.includes(phone.id))
            setPhones(filterPhones)
        }
    }, [phonesData])
    return (
        <div>
            <button>delate all favorites</button>
            <div>
                {
                    phones.map((phone) => <DisplayFavorite key={phone.id} phone={phone}></DisplayFavorite>)
                }
            </div>
        </div>
    );
};

export default Favorite;
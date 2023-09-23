import { useEffect, useState } from "react";
import DisplayPhone from "./DisplayPhone";

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('phone.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])
    return (
        <div className="container mx-auto"> 
            <h2 className="font-semibold text-xl text-center my-4">Our Phones Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center">
                {
                    phones.map((phone) => <DisplayPhone key={phone.id} phone={phone}></DisplayPhone>)
                }
            </div>
        </div>
    );
};

export default Phones;
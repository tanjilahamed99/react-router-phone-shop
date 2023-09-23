const Banner = () => {
    return (
        <div className="w-full h-[500px] my-10
         bg-[url('https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-no-repeat bg-cover">
            < div className="container mx-auto relative pt-[250px]">
                <input className="px-4 py-3 border-none  font--bold rounded-lg w-[80%] mx-auto flex" type="text" placeholder="search by phone" />
                <button className="btn btn-primary absolute ml-[1069px] -mt-[48px]">Search</button>
            </div >
        </div >
    );
};

export default Banner;
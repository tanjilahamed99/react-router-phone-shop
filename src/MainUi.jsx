import { Outlet } from "react-router-dom";
import Header from "./fixed-pages/Header";
import Footer from "./fixed-pages/Footer";

const MainUi = () => {
    return (
        <div className="">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainUi;
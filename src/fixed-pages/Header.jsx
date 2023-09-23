import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="border-b-2 p-5 mb-5">
            <div className="flex justify-between container mx-auto">
                <h3 className="font-bold text-2xl">phone shop</h3>
                <div className="flex gap-10">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/favorites"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                        }
                    >
                        favorites
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                        }
                    >
                        login
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
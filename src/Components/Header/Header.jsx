import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex gap-8 py-5">
            <Link className="text-xl" to={"/"}>Home</Link>
            <Link className="text-xl" to={"/meals"}>Meals</Link>
            <Link className="text-xl" to={"/contact"}>Contact</Link>
        </div>
    );
};

export default Header;
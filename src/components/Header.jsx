import React from 'react';
import Logo from '../img/logo.png';

const Header = () => {
    return (
        <div className="fixed z-50 w-screen p-6 px-16">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full">
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" className='w-10 object-cover' />
                    <p className="text-headingColor text-xl font-bold">FoodValley</p>
                </div>
            </div>


            {/* Mobile */}
            <div className="flex md:hidden w-full h-full"></div> 
        </div>
    );
};

export default Header;
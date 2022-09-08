import React from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { motion } from 'framer-motion';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { stringify } from 'postcss';

const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStateValue();
    
    const login = async () => {
        const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0]
        });
        localStorage.setItem('user', JSON.stringify(providerData[0]))
    }


    return (
        // Header
        <header className=" z-50 w-screen p-6 px-16">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={"/"} className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" className='w-8 object-cover' />
                    <p className="text-headingColor text-xl font-bold">FoodValley</p>
                </Link>


                <div className='flex items-center gap-8'>
                    {/* navbar */}
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>About</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Service</li>
                    </ul>


                    {/* cart */}
                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>


                    {/* user profile */}
                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' alt="user profile" onClick={login}/>
                    </div>
                </div>
            </div>


            {/* Mobile */}
            <div className="flex md:hidden w-full h-full"></div>
        </header>
    );
};

export default Header;
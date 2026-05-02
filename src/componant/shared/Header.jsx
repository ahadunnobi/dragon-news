import React from 'react';
import Image from 'next/image';
import logo from '@/src/assets/logo.png';

const Header = () => {
    return (
        <div className="flex flex-col items-center gap-2 py-6">
            <Image src={logo} alt="Dragon News Logo" />
            <p className="text-gray-500 text-sm mt-2">Journalism Without Fear or Favour</p>
            <p className="font-medium text-gray-700">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
    );
};

export default Header;
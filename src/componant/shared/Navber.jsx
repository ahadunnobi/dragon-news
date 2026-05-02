import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import userIcon from '@/src/assets/user.png';

const Navber = () => {
    return (
        <div className="flex justify-between items-center py-4 px-4 max-w-6xl mx-auto w-full">
            <div className="flex-1"></div>
            <div className="flex gap-4 flex-1 justify-center text-gray-600">
                <Link href="/" className="hover:text-black">Home</Link>
                <Link href="/about" className="hover:text-black">About</Link>
                <Link href="/career" className="hover:text-black">Career</Link>
            </div>
            <div className="flex gap-4 items-center flex-1 justify-end">
                <Image src={userIcon} alt="User" width={40} height={40} className="rounded-full" />
                <button className="bg-gray-800 text-white px-8 py-2 font-semibold">Login</button>
            </div>
        </div>
    );
};

export default Navber;
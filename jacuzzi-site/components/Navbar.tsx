// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import ConnectWallet from '@/components/ConnectWallet';
import SelectNetwork from '@/components/SelectNetwork';

export default function Navbar() {
    return (
        <div className="fixed w-full top-0 z-10">
            <nav className="bg-slate-400 border-transparent">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <ul className="flex space-x-4 items-center">
                        <li>
                            <button className=" hover:shadow-md hover:bg-softgray font-medium transition duration-200 ease-in-out border border-transparent  text-black py-2 px-4 rounded-lg">
                                <Link className="" href="/">
                                    Dashboard
                                </Link>
                            </button>
                        </li>
                        <li>
                            <button className=" hover:shadow-md hover:bg-softgray font-medium transition duration-200 ease-in-out border border-transparent  text-black py-2 px-4 rounded-lg">
                                <Link className="" href="/">
                                    Pools
                                </Link>
                            </button>
                        </li>
                        <li>
                            <button className=" hover:shadow-md hover:bg-softgray font-medium transition duration-200 ease-in-out border border-transparent  text-black py-2 px-4 rounded-lg">
                                <Link className="" href="/studio">
                                    Investment Studio
                                </Link>
                            </button>
                        </li>
                    </ul>
                    <ul className="flex space-x-4 items-center">
                        <li>
                            <SelectNetwork />
                        </li>
                        <li>
                            <ConnectWallet />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

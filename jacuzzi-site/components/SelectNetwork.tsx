'use client';

// components/SelectNetwork.js
import React, { useState } from 'react';

export default function SelectNetwork() {
    const [selectedNetwork, setSelectedNetwork] = useState('Select network');

    const networks = ['Ethereum', 'Polygon', 'Gnosis'];

    const handleChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedNetwork(event.target.value);
    };

    return (
        <div className="relative inline-flex">
            <select
                value={selectedNetwork}
                onChange={handleChange}
                className="block appearance-none w-full bg-softgray border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
                <option disabled>{selectedNetwork}</option>
                {networks.map((network, index) => (
                    <option key={index} value={network}>
                        {network}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 12.5l5-5-1.414-1.414L10 9.672 6.414 6 5 7.414z" />
                </svg>
            </div>
        </div>
    );
}

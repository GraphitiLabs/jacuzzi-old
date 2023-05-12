'use client';

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';


const ConnectWallet: React.FC = () => {
    const [address, setAddress] = useState<string>('');
    const [isEthereumAvailable, setIsEthereumAvailable] = useState<boolean>(false);

    useEffect(() => {
        setIsEthereumAvailable(
            typeof window !== 'undefined' && window.ethereum,
        );

        if (isEthereumAvailable) {
            const handleAccountsChanged = (accounts: string[]) => {
                if (accounts.length === 0) {
                    setAddress('');
                } else {
                    setAddress(accounts[0]);
                }
            };

            window.ethereum.on('accountsChanged', handleAccountsChanged);

            return () => {
                window.ethereum.removeListener(
                    'accountsChanged',
                    handleAccountsChanged,
                );
            };
        }
    }, [isEthereumAvailable]);

    const connectWallet = async () => {
        if (!isEthereumAvailable) {
            alert(
                'MetaMask is not available. Please install the MetaMask extension and try again.',
            );
            return;
        }

        try {
            // Request access to the user's MetaMask account
            const [account] = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });

            // Create a new Ethers.js provider using the MetaMask provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Get the signer from the Ethers.js provider
            const signer = provider.getSigner();

            // Set the connected wallet address
            setAddress(await signer.getAddress());
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
        }
    };

    const buttonStyling =
        'bg-softgray border border-transparent hover:border-blue-300 text-black font-bold py-1.5 px-4 rounded-full';

    return (
        <div>
            {address ? (
                <button className={buttonStyling}>
                    {address.slice(0, 6)}...{address.slice(-4)}
                </button>
            ) : (
                <button className={buttonStyling} onClick={connectWallet}>
                    Connect to MetaMask
                </button>
            )}
        </div>
    );
};

export default ConnectWallet;

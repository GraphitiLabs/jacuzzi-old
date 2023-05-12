import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Jacuzzi Finance',
    description: 'Self-custodial indexes and pools for DeFi',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`flex flex-col min-h-screen ${inter.className}`}>
                <Navbar />
                <main className="flex-grow pb-20">{children}</main>
            </body>
        </html>
    );
}

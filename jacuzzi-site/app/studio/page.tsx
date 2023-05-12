'use client';

import StrategyInfoButton from '@/components/StrategyInfoButton';
import StrategyWindow from '@/components/StrategyWindow';

export default function Home() {
    const fileTreeItems = [
        <StrategyInfoButton/>

    ];

    const handleFileItemClick = item => {
        console.log('Clicked item:', item);
    };

    //todo: the buttons and info panels need to be fixed
    return (
        <main className="flex min-h-screen">
            <div className="flex flex-col">
                <StrategyWindow
                    items={fileTreeItems}
                    onItemClick={handleFileItemClick}
                />
            </div>
            <div className="flex-grow">{/* Add your main content here */}</div>
        </main>
    );
}

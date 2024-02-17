import React, { useState, useEffect } from 'react';
import './Upgrades.css';

const upgradesData = [
    {
        button: 'Granny',
        cost: 10,
        cps: 1,
    },
    {
        button: 'Super oven',
        cost: 100,
        cps: 10,
    },
    {
        button: 'Factory',
        cost: 1000,
        cps: 100,
    },
];

export default function Upgrades({ count, setCount, setTotalCPS }) {
    const [upgrades] = useState(upgradesData);
    const [selectedUpgrades, setSelectedUpgrades] = useState(Array(upgrades.length).fill(0));

    const buyUpgrade = (index) => {
        const cost = upgrades[index].cost;
        if (count >= cost) {
            const upgrade = upgrades[index].cps;
            setCount(preCount => preCount - cost);
            setSelectedUpgrades(prevSelectedUpgrades => {
                const newSelectedUpgrades = prevSelectedUpgrades.slice();
                newSelectedUpgrades[index]++;
                return newSelectedUpgrades;
            });
        } else {
            console.log('Not enough cookies to buy this upgrade!');
        }
    };

    useEffect(() => {
        const totalCPS = selectedUpgrades.reduce((total, selected, index) => {
            return total + selected * upgrades[index].cps;
        }, 0);
        setTotalCPS(totalCPS);
    }, [selectedUpgrades, setTotalCPS]);

    return (
        <div className="upgrades">
            {upgrades.map((upgrade, index) => (
                <button
                    className={`upg-btn`}
                    key={upgrade.button}
                    onClick={() => buyUpgrade(index)}
                >
                    {upgrade.button}| Cost: {upgrade.cost} | CPS: {upgrade.cps}
                </button>
            ))}
        </div>
    );
}
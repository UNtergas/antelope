import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HornChart from '../components/HornChart';

import { DataType } from '../types';
import ContinentChart from '../components/ContinentChart';
import WeightHightChart from '../components/WeightHeightChart';

import axios from "axios";

const URL = "http://localhost:8080/api/antelope/graph";

const GraphPage: React.FC = () => {
    const [data, setData] = React.useState<DataType[]>([]);
    // const cardsToShow = DATA.slice(0, 5)

    useEffect(() => {
        const fetchAxios = async () => {
            const { data } = await axios.get(URL);
            setData(data); // Set the fetched data
        };
        fetchAxios()
    }, [])
    const [currentChart, setCurrentChart] = useState('Horn');

    const renderChart = (data: DataType[]) => {
        switch (currentChart) {
            case 'Horn':
                return <HornChart data={data} />;
            case 'Continent':
                return <ContinentChart data={data} />;
            case 'WeightHeight':
                return <WeightHightChart data={data} />;
            default:
                return <ContinentChart data={data} />;
        }
    };

    return (
        <div className="flex flex-col justify-around antialiased">
            <Navbar />
            <h1 className="text-4xl font-bold text-center mt-10 mb-20 gap-y-64">Statistic view</h1>
            <div className='flex flex-row justify-center'>
                {/* <div> */}
                {renderChart(data)}


                <div className='flex flex-col ml-80'>
                    <button onClick={() => setCurrentChart('Horn')} className=' py-20 px-40 me-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-slate-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Horn Chart</button>
                    <button onClick={() => setCurrentChart('Continent')} className='py-20 px-40 me-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-slate-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Continent Chart</button>
                    <button onClick={() => setCurrentChart('WeightHeight')} className='py-20 px-40 me-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-slate-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>WeightHeight Chart</button>
                </div>
            </div>
        </div>
    )
}


export default GraphPage;

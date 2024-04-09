import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Table from '../components/Table';

import axios from "axios";
import { DataType } from "../types";

const URL = "http://localhost:8080/api/antelope/table";

const TablePage: React.FC = () => {
    const [data, setData] = React.useState<DataType[]>([]);
    // const cardsToShow = DATA.slice(0, 5)

    useEffect(() => {
        const fetchAxios = async () => {
            const { data } = await axios.get(URL);
            setData(data); // Set the fetched data
        };
        fetchAxios()
    }, [])

    return (
        <div className="flex flex-col  justify-items-center items-center antialiased">
            <Navbar />
            <h1 className="text-4xl font-bold text-center mb-4 gap-y-64">Table View</h1>
            <Table data={data} />
        </div>
    )
}

export default TablePage;
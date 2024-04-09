import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { DataType } from "../types";



const URL = "http://localhost:8080/api/antelope";

const OverviewPage: React.FC = () => {
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
        <div className="flex flex-col justify-around antialiased gap-y-32">
            <Navbar />

            <h1 className="text-4xl font-bold text-center ">The big Antelope family </h1>
            <Slider data={data} />
        </div>
    )
}
export default OverviewPage;
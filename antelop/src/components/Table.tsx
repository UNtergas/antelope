import React from 'react';
import { DataList } from '../types';

const Table: React.FC<DataList> = ({ data }) => {
    return (
        <table className="table-auto border-seperated border border-slate-400 w-3/5 text-xl">
            <caption className="caption-top">
                Table : Antelope and their feature.
            </caption>
            <thead>
                <tr>
                    <th className='border border-slate-400'>Name</th>
                    <th className='border border-slate-400'>Continent</th>
                    <th className='border border-slate-400'>Weight (lbs)</th>
                    <th className='border border-slate-400'>Height (in)</th>
                    <th className='border border-slate-400'>Horns</th>
                    <th className='border border-slate-400'>Picture</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data, index) => (
                    <tr key={index}>
                        <td className='border border-slate-400 '>{data.name}</td>
                        <td className='border border-slate-400'>{data.continent}</td>
                        <td className='border border-slate-400 text-center align-middle'>{data.weight}</td>
                        <td className='border border-slate-400 text-center align-middle'>{data.height}</td>
                        <td className='border border-slate-400 '>{data.horns}</td>
                        <td className='flex justify-center border border-slate-400 items-center'>

                            <img src={data.picture} alt={data.name} style={{ width: "100px", height: "80px" }} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
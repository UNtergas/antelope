import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { DataType } from '../types'

const SinglePage: React.FC = () => {
    const location = useLocation()
    const data: DataType = location.state.data
    console.log(data)
    return (
        <div className='flex flex-col justify-around antialiased gap-y-32'>
            <Navbar />

            <h1 className="text-4xl font-bold text-center"> Your Favorite Antelope is ......</h1>
            <div className='flex flex-row justify-center'>
                <img src={data.picture} className="relative shadow-xl rounded-xl px-2 py-2 h-2/5 w-2/5  border border-slate-400 " />
                <div className='text-3xl flex flex-col gap-y-20 items-center justify-center relative shadow-xl rounded-xl px-2 py-2 min-h-2/5 w-2/5  border border-slate-400 '>
                    <p>Its name is {data.name}</p>
                    <p>It came from {data.continent}</p>
                    <p>Weight {data.weight} lbs</p>
                    <p>Height {data.height} lbs</p>
                    <p>Horn type {data.horns}</p>
                </div>

            </div>

        </div>
    )
}

export default SinglePage
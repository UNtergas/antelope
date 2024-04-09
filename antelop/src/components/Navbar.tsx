import React from 'react';
import SearchBar from './Searchbar';
import logo_navbar from '../assets/navbar_ICON.png';
import { Link, useNavigate } from 'react-router-dom';

import axios from "axios";


const URL = "http://localhost:8080/api/antelope";



const Navbar: React.FC = () => {
    const [search, setSearch] = React.useState('');
    const navigate = useNavigate();
    const formatSearchTerm = (term: string) => {
        // Convert the first character to uppercase and the rest to lowercase
        return term.charAt(0).toUpperCase() + term.slice(1).toLowerCase();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
        try {
            const formattedSearch = formatSearchTerm(search);
            const response = await axios.get(`${URL}/${formattedSearch}`);
            if (response.data) {
                console.log('Response from backend:', response.data);
                return navigate('/single', { state: { data: response.data } })
            }

        } catch (error) {
            console.error('Error fetching data:', error);

        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    return (
        <div className="flex justify-between justify-items-center items-center bg-gray-400 h-32 w-full">
            <div className='flex justify-items-center items-center '>
                <img src={logo_navbar} alt="antelope logo" />
                <h1 className='text-6xl font-bold italic'>ANTELOPE</h1>

            </div>
            <ul className="flex justify-between items-center gap-x-64">
                <li className="cursor-pointer text-3xl font-bold"><Link to='/'>Overview</Link></li>
                <li className="cursor-pointer text-3xl font-bold"><Link to='/table'>Table</Link></li>
                <li className="cursor-pointer text-3xl font-bold"><Link to='/graph'>Graph</Link></li>
                <li>
                    {/* <form onSubmit={handleSubmit} className="flex items-center max-w-sm mx-auto">
                        <div className="relative w-full">
                            <input onChange={handleChange} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What is your antelope ..." required />
                        </div>
                        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>

                        </button>
                    </form> */}
                    <SearchBar cbSubmit={handleSubmit} cbChange={handleChange} />
                </li>
            </ul>
            <img src={logo_navbar} alt="antelope logo" />
        </div>
    )
}

export default Navbar;
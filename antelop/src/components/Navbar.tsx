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
            } else {
                window.alert('Your search term was not found');
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
                    <SearchBar cbSubmit={handleSubmit} cbChange={handleChange} />
                </li>
            </ul>
            <img src={logo_navbar} alt="antelope logo" />
        </div>
    )
}

export default Navbar;
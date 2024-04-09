import React, { useState } from 'react';
import { DataType } from '../types';
const FlipCard: React.FC<DataType> = ({ name, continent, weight, height, horns, picture }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped); // Toggle the flipped state
    };

    return (
        <div onClick={handleFlip} className="cursor-pointer [perspective:1000px]">
            <div className={` cursor-pointer relative shadow-xl rounded-xl px-2 py-2 h-[450px] w-[380px]  border border-slate-400 [transform-style:preserve-3d] transition-all duration-300 ease-in-out ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front side */}
                <div className='absolute inset-0 '>
                    <img src={picture} className="object-cover h-full w-full rounded-xl" />
                </div>
                {/* Back side */}
                <div className={`absolute inset-0  rounded-xl ${isFlipped ? 'bg-slate-200' : 'bg-slate-200/40'} [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                    <div className='flex flex-col items-center justify-center min-h-full text-3xl rounded-xl'>
                        <p>{name}</p>
                        <p>{continent}</p>
                        <p>{weight} lbs</p>
                        <p>{height} in</p>
                        <p>{horns}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;

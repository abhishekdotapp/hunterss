import React from 'react';

const Section = ({ title, description, icons = [], registerLink }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{description}</p>
            <div className="flex flex-wrap space-x-6  mb-4">
                {icons.map((icon, index) => (
                    <img key={index} src={icon} alt={`${title} icon ${index + 1}`} className="h-8 py-1" />
                ))}
            </div>
            <a href={registerLink} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg">Register</button>
            </a>
        </div>
    );
};

export default Section;

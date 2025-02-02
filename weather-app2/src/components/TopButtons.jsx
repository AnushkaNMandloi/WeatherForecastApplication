import React from 'react';

function TopButtons({ setQuery }) {

    const locations = [
        {
            id: 1,
            title: 'Boston'
        },
        {
            id: 2,
            title: 'Pittsburgh'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'London'
        },
        {
            id: 5,
            title: 'Mumbai'
        }
    ]

    return (
        <div className="flex items-center justify-around my-6">
            {locations.map((location) => (

                <button
                    key={location.id}
                    className="text-white text-lg font-medium"
                    onClick={() =>
                        setQuery({ q: location.title })
                    }
                >
                    {location.title}
                </button>

            ))}
        </div>
    );
}

export default TopButtons;

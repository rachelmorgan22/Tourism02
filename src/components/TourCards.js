import React from 'react';
import '../styles/TourCards.css';
import TropicalImage from '../assets/tropical-image.png';
import MountainImage from '../assets/mountain-image.png';
import MarketImage from '../assets/market-image.png';

const tours = [
    {
        title: 'Tropical Paradise',
        description: 'Experience the beauty of tropical beaches.',
        image: TropicalImage
    
    },
    {
        title: 'Mountain Adventure',
        description: 'Challenge yourself with thrilling mountain hikes.',
        image: MountainImage
    
    },
    {
        title: 'Cultural Journey',
        description: 'Immerse yourself in rich local cultures and traditionas.',
        image: MarketImage
    },
];

const TourCards = () => {
    return (
        <div className="tour-cards">
            {tours.map((tour, index) => (
                <div className="card" key={index}>
                    <h3>{tour.title}</h3>
                    <img className="tourImage" src={tour.image} alt={tour.title} />
                    <p>{tour.description}</p>
                    </div>
            ))}
        </div>
    );
};

export default TourCards;
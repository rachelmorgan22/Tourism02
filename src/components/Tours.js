import React from 'react';
import '../styles/Tours.css'; // Import your CSS file

import tropicalParadise from '../assets/tropical-image.png';
import mountainAdventure from '../assets/mountain-image.png';
import culturalJourney from '../assets/market-image.png';


const toursData = [
  {
    title: "Tropical Paradise",
    price: "$149",
    description: "Escape to sun-kissed beaches and crystal-clear waters on our Tropical Paradise tour. Enjoy a day of relaxation on pristine sands, swimming in turquoise lagoons, and snorkeling among vibrant coral reefs.",
    itinerary: [
      "9:00 AM - Depart from the meeting point",
      "10:00 AM - Arrive at the beach",
      "12:00 PM - Beachside lunch",
      "1:00 PM - Snorkeling activity",
      "4:00 PM - Return to the meeting point",
    ],
    inclusions: [
      "Beachside lunch",
      "Snorkeling gear rental",
      "Guided tour",
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
    ],
    reviews: [
      { name: "Jane D.", comment: "An unforgettable experience!" },
      { name: "John S.", comment: "Highly recommend this tour!" },
    ],
    image: tropicalParadise,
  },
  {
    title: "Mountain Adventure",
    price: "$199",
    description: "Join uas for an exhilarating Mountain Adventure! Hike through stunning landscapes, enjoy breathtaking views, and discover the thrill of outdoor exploration.",
    itinerary: [
      "8:00 AM - Departure from the city",
      "9:30 AM - Arrival at the hiking trail",
      "12:00 PM - Picnic lunch with a view",
      "2:00 PM - Continue the hike",
      "5:00 PM - Return to the city",
    ],
    inclusions: [
      "Guided hike",
      "Lunch",
      "All necessary equipment",
    ],
    exclusions: [
      "Personal gear",
      "Travel insurance",
    ],
    reviews: [
      { name: "Alice M.", comment: "The views were incredible!" },
      { name: "Tom B.", comment: "A must-do for nature lovers!" },
    ],
    image: mountainAdventure,
  },
  {
    title: "Cultural Journey",
    price: "$129",
    description: "Experience the rich history and vibrant culture on our Cultural Journey. Visit local markets, historical sites, and engage with the community.",
    itinerary: [
      "10:00 AM - Depart for the cultural site",
      "11:00 AM - Guided tour of historical landmarks",
      "1:00 PM - Lunch at a local restaurant",
      "2:30 PM - Visit to the artisan market",
      "4:00 PM - Return to starting point",
    ],
    inclusions: [
      "Lunch",
      "Entrance fees to attractions",
      "Guided tour",
    ],
    exclusions: [
      "Souvenirs",
      "Personal expenses",
    ],
    reviews: [
      { name: "Mark D.", comment: "A fantastic way to learn about the culture!" },
      { name: "Sarah W.", comment: "I loved the market visit!" },
    ],
    image: culturalJourney, 
  },
];

const Tours = () => {
  return (
    <div className="tours-page">
      <header className="tours-header">
        <h1>Explore Our Tours</h1>
      </header>

      {toursData.map((tour, index) => (
        <div className="tour-detail" key={index}>
          <h2>{tour.title}</h2>
          <img src={tour.image} alt={tour.title} className="tour-image" />
          <p className="price">{tour.price}</p>
          <p>{tour.description}</p>
          
          <h3>Itinerary</h3>
          <ul>
            {tour.itinerary.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          
          <h3>Inclusions</h3>
          <ul>
            {tour.inclusions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3>Exclusions</h3>
          <ul>
            {tour.exclusions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3>Customer Reviews</h3>
          {tour.reviews.map((review, idx) => (
            <p key={idx}><strong>{review.name}:</strong> {review.comment}</p>
          ))}

          <button className="btn">Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default Tours;

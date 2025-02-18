import React, { useState } from "react";
import "./Display.css";

function Display({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoryMapping = {
    Apps: "App",
    Books: "Book",
    Charities: "Charity",
    Coaching: "Coaching",
    Communities: "Community",
    Films: "Film",
    Podcasts: "Podcast",
    "Social media": "Social media",
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  const handleDisplayClick = () => {
    const selectedSingularCategories = selectedCategories.map(
      (category) => categoryMapping[category]
    );
    onFilterChange(selectedSingularCategories);
  };

  return (
    <div className="Display">
      <p>I want to see:</p>
      <ul>
        {Object.keys(categoryMapping).map((category) => (
          <li key={category}>
            <label>
              <input
                type="checkbox"
                value={category}
                onChange={() => handleCheckboxChange(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleDisplayClick}>Display</button>
    </div>
  );
}

export default Display;

import React, { useState } from "react";
import "./Display.css";
import reading from "../src/images/reading.png";

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
    Television: "Television",
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
      <div className="checkbox-container">
        <div className="checkbox-list">
          <div className="checklist">I want to see:</div>

          {Object.keys(categoryMapping).map((category) => (
            <div className="checklist" key={category}>
              <label>
                <input
                  className="tickbox"
                  type="checkbox"
                  value={category}
                  onChange={() => handleCheckboxChange(category)}
                />
                {category}
              </label>
            </div>
          ))}
        </div>
        <div className="checkbox-image-button">
          <img
            className="reading"
            src={reading}
            alt="woman relaxing and reading"
          />
          <button onClick={handleDisplayClick}>Display</button>
        </div>
      </div>
    </div>
  );
}

export default Display;

import React, { useState, useEffect } from "react";
import "./Resources.css";
import { supabase } from "./config/supabaseClient";
import Display from "./Display";

function Resources() {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);

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

  useEffect(() => {
    const fetchResources = async () => {
      const { data, error } = await supabase
        .from("sober_resources")
        .select(
          "category, title, secondary_information, image, description, link"
        );
      if (error) {
        console.error("Error fetching resources:", error);
      } else {
        setResources(data);
      }
    };

    fetchResources();
  }, []);

  const handleFilterChange = (selectedCategories) => {
    console.log("Filtering resources with categories:", selectedCategories);
    if (selectedCategories.length === 0) {
      setFilteredResources([]);
    } else {
      const sortedResources = resources
        .filter((resource) => selectedCategories.includes(resource.category))
        .sort((a, b) => {
          return (
            Object.values(categoryMapping).indexOf(a.category) -
            Object.values(categoryMapping).indexOf(b.category)
          );
        });
      setFilteredResources(sortedResources);
    }
  };

  const getButtonText = (category) => {
    switch (category) {
      case "App":
        return "Download app";
      case "Book":
        return "Buy book";
      case "Charity":
        return "Find out more";
      case "Coaching":
        return "Learn more";
      case "Community":
        return "Find out more";
      case "Film":
        return "Watch";
      case "Podcast":
        return "Listen";
      case "Television":
        return "Watch";
      default:
        return "Learn more";
    }
  };

  return (
    <div id="resources-section" className="Resources">
      <h1>Resources</h1>
      <Display onFilterChange={handleFilterChange} />
      <div className="resource-cards">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <p className="category">{resource.category}</p>
            <p className="title">{resource.title}</p>
            <p className="secondary_information">
              {resource.secondary_information}
            </p>
            <img src={resource.image} alt={resource.title} />
            <p className="description">{resource.description}</p>
            <button>
              {resource.link && (
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-button"
                >
                  {getButtonText(resource.category)}
                </a>
              )}
            </button>
          </div>
        ))}
      </div>
      <p className="disclosure">
        <strong>Disclosure:</strong> If you buy a book after following a link on
        this website, I will receive a small commission at no extra cost to you.
        This helps me to keep this website running, so thank you for your
        support!
      </p>
    </div>
  );
}

export default Resources;

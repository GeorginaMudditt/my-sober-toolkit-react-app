import React, { useState, useEffect } from "react";
import "./Resources.css";
import { supabase } from "./config/supabaseClient";
import Display from "./Display";

function Resources() {
  const [resources, setResources] = useState([]);

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
        return "Join";
      case "Film":
        return "Watch";
      case "Podcast":
        return "Listen";
      case "Social media":
        return "Follow";
      default:
        return "Learn more";
    }
  };

  return (
    <div id="resources-section" className="Resources">
      <h1>Resources</h1>
      <Display />

      <div className="resource-cards">
        {resources.map((resource) => (
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
    </div>
  );
}

export default Resources;

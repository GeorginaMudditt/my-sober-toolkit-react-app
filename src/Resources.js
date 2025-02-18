import React, { useState, useEffect } from "react"; // is this the right place for this?
import "./Resources.css";
import { supabase } from "./config/supabaseClient"; // is this okay here?

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const { data, error } = await supabase
        .from("sober_resources")
        .select("title, secondary_information");
      if (error) {
        console.error("Error fetching resources:", error);
      } else {
        setResources(data);
      }
    };

    fetchResources();
  }, []);

  return (
    <div id="resources-section" className="Resources">
      <h1>Resources</h1>
      <p>I want to see:</p>
      <ul>
        <li>All resources</li>
        <li>Apps</li>
        <li>Books</li>
        <li>Charities</li>
        <li>Coaching</li>
        <li>Communities</li>
        <li>Films</li>
        <li>Podcasts</li>
        <li>Social media</li>
      </ul>
      <div className="resource-cards">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h2>{resource.title}</h2>
            <p>{resource.secondary_information}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;

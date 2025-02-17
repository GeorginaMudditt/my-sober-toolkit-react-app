import React, { useState } from "react";
import "./Counter.css";
import happy from "./images/man-jumping.png";

function Counter() {
  const [name, setName] = useState("");
  const [lastDrinkDate, setLastDrinkDate] = useState("");
  const [daysSober, setDaysSober] = useState(null);
  const [years, setYears] = useState(null);
  const [months, setMonths] = useState(null);
  const [days, setDays] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date();
    const lastDrink = new Date(lastDrinkDate);
    const differenceInTime = today - lastDrink;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    setDaysSober(differenceInDays);

    const years = Math.floor(differenceInDays / 365);
    const months = Math.floor((differenceInDays % 365) / 30);
    const days = differenceInDays % 30;
    setYears(years);
    setMonths(months);
    setDays(days);
  };

  const getPlural = (value, word) => {
    return value === 1 ? word : `${word}s`;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="Counter">
      <h1>Sobriety counter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            What is your first name?
            <br />
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            When was the last time you had a drink?
            <br />
            <input
              type="date"
              value={lastDrinkDate}
              onChange={(event) => setLastDrinkDate(event.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>
      {daysSober !== null && (
        <p>
          Well done, {capitalizeFirstLetter(name)}!<br />
          <img
            className="jumping-man"
            src={happy}
            alt="happy man jumping in air"
          />
          <br />
          You have been sober for {daysSober} {getPlural(daysSober, "day")}.
          <br />
          That is equal to {years} {getPlural(years, "year")}, {months}{" "}
          {getPlural(months, "month")}, and {days} {getPlural(days, "day")}.
        </p>
      )}
    </div>
  );
}

export default Counter;

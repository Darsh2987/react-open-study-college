import React, { useState, useEffect } from "react";
import "./App.scss";
import Axios from "axios";

// Data from JSON File
import topLeadsData from "./data.json";

// Components
import Card from "./components/Card.jsx";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function Random Item
  function getRandomItem(results) {
    return results[Math.floor(Math.random() * results.length)];
  }

  // Function Axios to Fetch Data - Get a random item from the data retrieved
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios("https://leads.beta.openstudycollege.info/getTopLeads");
        const results = response.data;
        const randomItem = getRandomItem(results);
        setData(randomItem);
        setIsLoading(false);
      } catch (e) {
        console.log("ERROR FETCHING DATA FROM API");
      }
    }

    fetchData();
  }, []);

  // Call Function to Get a Random Data Item from Top Leads Data JSON file
  // const randomItem = getRandomItem(topLeadsData);

  return (
    <div className="App">
      <div className="main">
        <Card isLoading={isLoading} data={data} />
        {/* <Card data={randomItem} /> */}
      </div>
    </div>
  );
}

export default App;

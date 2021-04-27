import React, { useState, useEffect } from "react";
import "./App.scss";
import Axios from "axios";

// Components
import Card from "./components/Card.jsx";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function Axios to Fetch Data - Get a random item from the data retrieved
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios("http://leads.beta.openstudycollege.info/getTopLeads");
        const results = response.data;
        const randomItem = results[Math.floor(Math.random() * results.length)];
        setData(randomItem);
        setIsLoading(false);
      } catch (e) {
        console.log("ERROR FETCHING DATA FROM API");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="main">
        <Card isLoading={isLoading} data={data} />
      </div>
    </div>
  );
}

export default App;

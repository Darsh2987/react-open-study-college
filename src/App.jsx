import React, { useState, useEffect } from "react";
import "./App.scss";
import Axios from "axios";

// Components
import Card from "./components/Card.jsx";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios("http://leads.beta.openstudycollege.info/getTopLeads");
        const results = response.data;
        const randomItem = results[Math.floor(Math.random() * results.length)];
        setData(randomItem);
      } catch (e) {
        console.log("ERROR FETCHING DATA FROM API");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Card data={data} />
    </div>
  );
}

export default App;

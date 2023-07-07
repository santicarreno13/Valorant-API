import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Weapons from './components/Weapons'
import Maps from './components/Maps'
import Agents from './components/Agents'




function App() {

  const [weapons, setWeapons] = useState([]);
  const [maps, setMaps] = useState([]);
  const [agents, setAgents] = useState([]);


  const weaponsUrl = "https://valorant-api.com/v1/weapons/skins"
  const mapsUrl = "https://valorant-api.com/v1/maps"
  const agentsUrl = "https://valorant-api.com/v1/agents"

  const fetchWeapons = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setWeapons(data.data))
    .catch(error => console.log(error))
  }
  const fetchMaps = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setMaps(data.data))
    .catch(error => console.log(error))
  }
  const fetchAgents = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setAgents(data.data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchWeapons(weaponsUrl);
  }, [])
  useEffect(() => {
    fetchMaps(mapsUrl);
  }, [])
  useEffect(() => {
    fetchAgents(agentsUrl);
  }, [])

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route path="/weapons" element={<Weapons weapons={weapons} />} />
          <Route path="/maps" element={<Maps maps={maps} />} />
          <Route path="/agents" element={<Agents agents={agents} />} />
      </Routes>
    </Router>
    <style>{`
      body {
        background-color: #212020;
      }
          `}</style>
    </>
  );
}

export default App;

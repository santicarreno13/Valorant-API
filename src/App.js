import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Weapons from './components/Weapons'


function App() {

  const [weapons, setWeapons] = useState([]);

  const WeaponsUrl = "https://valorant-api.com/v1/weapons/skins"

  const fetchWeapons = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setWeapons(data.data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchWeapons(WeaponsUrl);
  }, [])

  return (
    <>
    <Navbar brand="Weapons Valorant" />
    <Weapons weapons={weapons}/>
    <style>{`
      body {
        background-color: #212020;
      }
          `}</style>
    </>
  );
}

export default App;

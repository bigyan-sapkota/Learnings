import React from "react";

const ExerciseTwo = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className="m-10">
      <p className="text-xl font-bold">Gas Plants name</p>
      {planets.map((planet, i) => (
        <div key={i}>{planet.isGasPlanet && planet.name}</div>
      ))}
    </div>
  );
};

export default ExerciseTwo;

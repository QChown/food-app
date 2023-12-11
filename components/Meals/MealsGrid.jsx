import React from "react";

function MealsGrid({ meals }) {
  return (
    <ul>
      {meals.map((meal) => {
        <li key={meal.id}></li>;
      })}
    </ul>
  );
}

export default MealsGrid;

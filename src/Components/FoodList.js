import React from 'react';
import Food from '../components/Food';

const FoodList = ({ recipes }) => {
  console.log('recipes in foodlist', recipes)

    return (
      
      <div>
        {
          recipes.map((meal, i) => 
              <Food 
                key={i}
                id={meal.idMeal}
                strYoutube={meal.strYoutube}
                strMealThumb={meal.strMealThumb}
                strMeal={meal.strMeal}
                />
            
          )
        }
      </div>
    );
  }
export default FoodList;